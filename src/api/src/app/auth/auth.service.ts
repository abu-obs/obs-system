import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

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
        // Bypassing strict 'StringValue' type check with 'as any'
        expiresIn: process.env.JWT_EXPIRES_IN as any, 
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d', // String literals are natively accepted
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}