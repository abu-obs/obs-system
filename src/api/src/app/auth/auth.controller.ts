import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiOkResponse, ApiUnauthorizedResponse, ApiForbiddenResponse, ApiConflictResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Endpoint: POST /api/auth/register
   * Creates a new user account with hashed password in the database.
   */
  @Post('register')
  @ApiOperation({ summary: 'Yeni kullanıcı kaydı oluşturur' })
  @ApiResponse({ status: 201, description: 'Kullanıcı başarıyla kaydedildi.' })
  @ApiConflictResponse({ description: 'Bu e-posta adresi zaten kayıtlı.' })
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  /**
   * Endpoint: POST /api/auth/login
   * Authenticates the user. Returns JWT tokens on success.
   * Locks account after 5 consecutive failed attempts.
   */
  @Post('login')
  @ApiOperation({ summary: 'Kullanıcı girişi yapar ve JWT token döner' })
  @ApiOkResponse({ description: 'Başarılı giriş, tokenlar döndürüldü.' })
  @ApiUnauthorizedResponse({ description: 'Geçersiz e-posta veya şifre.' })
  @ApiForbiddenResponse({ description: 'Hesap kilitli.' })
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}