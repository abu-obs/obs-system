import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException, ForbiddenException, ConflictException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

// Mock bcrypt
jest.mock('bcrypt', () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

describe('AuthService', () => {
  let authService: AuthService;
  let prismaService: any;
  let jwtService: any;

  const mockPrismaService = {
    kULLANICI: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
  };

  const mockJwtService = {
    signAsync: jest.fn().mockResolvedValue('mock-token'),
  };

  beforeEach(async () => {
    // Set env variables for tests
    process.env.MAX_FAILED_ATTEMPTS = '5';
    process.env.LOCKOUT_DURATION_MINUTES = '15';
    process.env.SESSION_TIMEOUT_MINUTES = '30';
    process.env.JWT_ACCESS_SECRET = 'test-access-secret';
    process.env.JWT_REFRESH_SECRET = 'test-refresh-secret';
    process.env.JWT_EXPIRES_IN = '15m';

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    prismaService = module.get(PrismaService);
    jwtService = module.get(JwtService);

    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  // ─── Test 1: register() creates user with hashed password ───
  describe('register', () => {
    it('should create a new user with a hashed password', async () => {
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashed-password-123');
      prismaService.kULLANICI.findUnique.mockResolvedValue(null);
      prismaService.kULLANICI.create.mockResolvedValue({
        ID: 1,
        Eposta: 'test@test.com',
        Sifre_Hash: 'hashed-password-123',
        Rol: 'OGRENCI',
      });

      const result = await authService.register({
        email: 'test@test.com',
        password: 'password123',
        role: 'OGRENCI',
      });

      expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
      expect(prismaService.kULLANICI.create).toHaveBeenCalledWith({
        data: {
          Eposta: 'test@test.com',
          Sifre_Hash: 'hashed-password-123',
          Rol: 'OGRENCI',
        },
      });
      expect(result).toEqual({
        message: 'Kullanıcı başarıyla kaydedildi',
        userId: 1,
        email: 'test@test.com',
      });
    });

    it('should throw ConflictException if email already exists', async () => {
      prismaService.kULLANICI.findUnique.mockResolvedValue({ ID: 1 });

      await expect(
        authService.register({
          email: 'existing@test.com',
          password: 'password123',
          role: 'OGRENCI',
        }),
      ).rejects.toThrow(ConflictException);
    });
  });

  // ─── Test 2: login() with correct credentials ───
  describe('login - successful', () => {
    it('should return tokens and reset fail count on successful login', async () => {
      const mockUser = {
        ID: 1,
        Eposta: 'test@test.com',
        Sifre_Hash: 'hashed-password',
        Rol: 'OGRENCI',
        Basarisiz_Giris_Sayisi: 2,
        Hesap_Kilitli_Mi: false,
        Kilit_Zamani: null,
      };

      prismaService.kULLANICI.findUnique.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.signAsync.mockResolvedValue('mock-token');

      const result = await authService.login({
        email: 'test@test.com',
        password: 'correct-password',
      });

      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');

      // Should reset fail count and update last activity
      expect(prismaService.kULLANICI.update).toHaveBeenCalledWith({
        where: { ID: 1 },
        data: {
          Basarisiz_Giris_Sayisi: 0,
          Hesap_Kilitli_Mi: false,
          Kilit_Zamani: null,
          Son_Aktivite: expect.any(Date),
        },
      });
    });
  });

  // ─── Test 3: login() with wrong password (1st attempt) ───
  describe('login - failed attempt', () => {
    it('should increment fail count on wrong password', async () => {
      const mockUser = {
        ID: 1,
        Eposta: 'test@test.com',
        Sifre_Hash: 'hashed-password',
        Rol: 'OGRENCI',
        Basarisiz_Giris_Sayisi: 0,
        Hesap_Kilitli_Mi: false,
        Kilit_Zamani: null,
      };

      prismaService.kULLANICI.findUnique.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        authService.login({ email: 'test@test.com', password: 'wrong-password' }),
      ).rejects.toThrow(UnauthorizedException);

      expect(prismaService.kULLANICI.update).toHaveBeenCalledWith({
        where: { ID: 1 },
        data: { Basarisiz_Giris_Sayisi: 1 },
      });
    });
  });

  // ─── Test 4: login() with wrong password (5th attempt — lockout) ───
  describe('login - account lockout on 5th failed attempt', () => {
    it('should lock account after 5 consecutive failed attempts', async () => {
      const mockUser = {
        ID: 1,
        Eposta: 'test@test.com',
        Sifre_Hash: 'hashed-password',
        Rol: 'OGRENCI',
        Basarisiz_Giris_Sayisi: 4, // 4th failure already recorded
        Hesap_Kilitli_Mi: false,
        Kilit_Zamani: null,
      };

      prismaService.kULLANICI.findUnique.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        authService.login({ email: 'test@test.com', password: 'wrong-password' }),
      ).rejects.toThrow(ForbiddenException);

      expect(prismaService.kULLANICI.update).toHaveBeenCalledWith({
        where: { ID: 1 },
        data: {
          Basarisiz_Giris_Sayisi: 5,
          Hesap_Kilitli_Mi: true,
          Kilit_Zamani: expect.any(Date),
        },
      });
    });
  });

  // ─── Test 5: login() on locked account (within lockout window) ───
  describe('login - locked account within lockout window', () => {
    it('should throw ForbiddenException when account is locked', async () => {
      const mockUser = {
        ID: 1,
        Eposta: 'test@test.com',
        Sifre_Hash: 'hashed-password',
        Rol: 'OGRENCI',
        Basarisiz_Giris_Sayisi: 5,
        Hesap_Kilitli_Mi: true,
        Kilit_Zamani: new Date(), // Locked just now
      };

      prismaService.kULLANICI.findUnique.mockResolvedValue(mockUser);

      await expect(
        authService.login({ email: 'test@test.com', password: 'any-password' }),
      ).rejects.toThrow(ForbiddenException);

      // Should NOT have attempted password comparison
      expect(bcrypt.compare).not.toHaveBeenCalled();
    });
  });

  // ─── Test 6: login() on locked account (after lockout expires) ───
  describe('login - locked account after lockout expires', () => {
    it('should auto-unlock account after lockout period and allow login', async () => {
      const expiredLockTime = new Date(Date.now() - 16 * 60 * 1000); // 16 mins ago (> 15 min lockout)
      const mockUser = {
        ID: 1,
        Eposta: 'test@test.com',
        Sifre_Hash: 'hashed-password',
        Rol: 'OGRENCI',
        Basarisiz_Giris_Sayisi: 5,
        Hesap_Kilitli_Mi: true,
        Kilit_Zamani: expiredLockTime,
      };

      prismaService.kULLANICI.findUnique.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.signAsync.mockResolvedValue('mock-token');

      const result = await authService.login({
        email: 'test@test.com',
        password: 'correct-password',
      });

      // Should first auto-unlock
      expect(prismaService.kULLANICI.update).toHaveBeenCalledWith({
        where: { ID: 1 },
        data: {
          Hesap_Kilitli_Mi: false,
          Basarisiz_Giris_Sayisi: 0,
          Kilit_Zamani: null,
        },
      });

      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
    });
  });

  // ─── Test 7: validateSession() with recent activity ───
  describe('validateSession - active session', () => {
    it('should return true when last activity is within timeout window', async () => {
      prismaService.kULLANICI.findUnique.mockResolvedValue({
        Son_Aktivite: new Date(), // Just now
      });

      const result = await authService.validateSession(1);
      expect(result).toBe(true);
    });
  });

  // ─── Test 8: validateSession() with expired activity ───
  describe('validateSession - expired session', () => {
    it('should return false when last activity exceeds timeout window', async () => {
      const expiredActivity = new Date(Date.now() - 31 * 60 * 1000); // 31 mins ago (> 30 min timeout)
      prismaService.kULLANICI.findUnique.mockResolvedValue({
        Son_Aktivite: expiredActivity,
      });

      const result = await authService.validateSession(1);
      expect(result).toBe(false);
    });

    it('should return false when user has no last activity', async () => {
      prismaService.kULLANICI.findUnique.mockResolvedValue({
        Son_Aktivite: null,
      });

      const result = await authService.validateSession(1);
      expect(result).toBe(false);
    });
  });

  // ─── Test 9: updateLastActivity() ───
  describe('updateLastActivity', () => {
    it('should update Son_Aktivite to current time', async () => {
      prismaService.kULLANICI.update.mockResolvedValue({});

      await authService.updateLastActivity(1);

      expect(prismaService.kULLANICI.update).toHaveBeenCalledWith({
        where: { ID: 1 },
        data: { Son_Aktivite: expect.any(Date) },
      });
    });
  });
});
