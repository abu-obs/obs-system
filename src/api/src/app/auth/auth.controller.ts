import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Endpoint: POST /api/auth/register
   * Used for creating a new user password hash.
   */
  @Post('register')
  async register(@Body() body: any) {
    // In a real scenario, you save the user to the database via Prisma here.
    // For now, we just test the hashing function.
    const hashedPassword = await this.authService.hashData(body.password);
    
    return { 
      message: 'User registered successfully', 
      email: body.email, 
      hashedPassword: hashedPassword 
    };
  }

  /**
   * Endpoint: POST /api/auth/login
   * Used for logging in and getting JWT tokens.
   */
  @Post('login')
  async login(@Body() body: any) {
    // In a real scenario, you would verify the user's password with the DB here.
    // For now, we mock a successful login to generate tokens.
    const mockUserId = 1; 
    const mockRole = 'STUDENT'; 

    const tokens = await this.authService.getTokens(mockUserId, body.email, mockRole);
    return tokens;
  }
}