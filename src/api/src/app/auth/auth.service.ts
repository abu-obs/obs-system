import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  // Configurable constants (from env or defaults)
  private readonly MAX_FAILED_ATTEMPTS = parseInt(process.env.MAX_FAILED_ATTEMPTS || '5', 10);
  private readonly LOCKOUT_DURATION_MINUTES = parseInt(process.env.LOCKOUT_DURATION_MINUTES || '15', 10);
  private readonly SESSION_TIMEOUT_MINUTES = parseInt(process.env.SESSION_TIMEOUT_MINUTES || '30', 10);

  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Hashes the plain text password before saving it to the database.
   */
  async hashData(data: string): Promise<string> {
    const saltOrRounds = 10;
    return bcrypt.hash(data, saltOrRounds);
  }

  /**
   * Generates both Access and Refresh tokens for the authenticated user.
   */
  async getTokens(userId: number, email: string, role: string) {
    const jwtPayload = {
      sub: userId,
      email: email,
      role: role,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN as any,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  /**
   * Registers a new user by hashing their password and storing them in the database.
   */
  async register(dto: RegisterDto) {
    // Check if user already exists
    const existingUser = await this.prisma.kULLANICI.findUnique({
      where: { Eposta: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('Bu e-posta adresi zaten kayıtlı');
    }

    const hashedPassword = await this.hashData(dto.password);

    const user = await this.prisma.kULLANICI.create({
      data: {
        Eposta: dto.email,
        Sifre_Hash: hashedPassword,
        Rol: dto.role,
      },
    });

    return {
      message: 'Kullanıcı başarıyla kaydedildi',
      userId: user.ID,
      email: user.Eposta,
    };
  }

  /**
   * Authenticates a user with email and password.
   * Implements account lockout after MAX_FAILED_ATTEMPTS consecutive failed attempts.
   */
  async login(dto: LoginDto) {
    // 1. Find user by email
    const user = await this.prisma.kULLANICI.findUnique({
      where: { Eposta: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Geçersiz e-posta veya şifre');
    }

    // 2. Check if account is locked
    if (user.Hesap_Kilitli_Mi) {
      const lockoutExpiry = this.getLockoutExpiry(user.Kilit_Zamani);

      if (lockoutExpiry > new Date()) {
        // Still within lockout period
        const remainingMinutes = Math.ceil(
          (lockoutExpiry.getTime() - Date.now()) / (1000 * 60),
        );
        throw new ForbiddenException(
          `Hesap kilitlendi. ${remainingMinutes} dakika sonra tekrar deneyin`,
        );
      }

      // Lockout period has expired — auto-unlock the account
      await this.prisma.kULLANICI.update({
        where: { ID: user.ID },
        data: {
          Hesap_Kilitli_Mi: false,
          Basarisiz_Giris_Sayisi: 0,
          Kilit_Zamani: null,
        },
      });
    }

    // 3. Compare password
    const passwordMatches = await bcrypt.compare(dto.password, user.Sifre_Hash);

    if (!passwordMatches) {
      const newFailCount = user.Hesap_Kilitli_Mi ? 1 : user.Basarisiz_Giris_Sayisi + 1;

      if (newFailCount >= this.MAX_FAILED_ATTEMPTS) {
        // Lock the account
        await this.prisma.kULLANICI.update({
          where: { ID: user.ID },
          data: {
            Basarisiz_Giris_Sayisi: newFailCount,
            Hesap_Kilitli_Mi: true,
            Kilit_Zamani: new Date(),
          },
        });

        throw new ForbiddenException(
          `${this.MAX_FAILED_ATTEMPTS} başarısız giriş denemesi. Hesap ${this.LOCKOUT_DURATION_MINUTES} dakika süreyle kilitlendi`,
        );
      }

      // Increment fail count
      await this.prisma.kULLANICI.update({
        where: { ID: user.ID },
        data: {
          Basarisiz_Giris_Sayisi: newFailCount,
        },
      });

      throw new UnauthorizedException(
        `Geçersiz şifre. Kalan deneme hakkı: ${this.MAX_FAILED_ATTEMPTS - newFailCount}`,
      );
    }

    // 4. Successful login — reset fail count, update last activity
    await this.prisma.kULLANICI.update({
      where: { ID: user.ID },
      data: {
        Basarisiz_Giris_Sayisi: 0,
        Hesap_Kilitli_Mi: false,
        Kilit_Zamani: null,
        Son_Aktivite: new Date(),
      },
    });

    // 5. Generate and return tokens
    const tokens = await this.getTokens(user.ID, user.Eposta, user.Rol);
    return tokens;
  }

  /**
   * Updates the Son_Aktivite (last activity) timestamp for session timeout tracking.
   */
  async updateLastActivity(userId: number): Promise<void> {
    await this.prisma.kULLANICI.update({
      where: { ID: userId },
      data: { Son_Aktivite: new Date() },
    });
  }

  /**
   * Validates whether the user's session is still active based on inactivity timeout.
   * Returns true if session is valid, false if expired.
   */
  async validateSession(userId: number): Promise<boolean> {
    const user = await this.prisma.kULLANICI.findUnique({
      where: { ID: userId },
      select: { Son_Aktivite: true },
    });

    if (!user || !user.Son_Aktivite) {
      return false;
    }

    const timeoutMs = this.SESSION_TIMEOUT_MINUTES * 60 * 1000;
    const elapsed = Date.now() - user.Son_Aktivite.getTime();

    return elapsed < timeoutMs;
  }

  /**
   * Calculates the lockout expiry time from the lock timestamp.
   */
  private getLockoutExpiry(lockTime: Date | null): Date {
    if (!lockTime) {
      return new Date(0); // No lock time means expired
    }
    return new Date(lockTime.getTime() + this.LOCKOUT_DURATION_MINUTES * 60 * 1000);
  }
}