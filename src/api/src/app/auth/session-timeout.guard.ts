import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

/**
 * Guard that enforces session timeout based on user inactivity.
 * Should be used AFTER JwtAuthGuard on protected routes.
 *
 * Usage: @UseGuards(JwtAuthGuard, SessionTimeoutGuard)
 *
 * - Checks if the user's last activity is within the timeout window.
 * - If expired, throws UnauthorizedException.
 * - If valid, updates the last activity timestamp (sliding window).
 */
@Injectable()
export class SessionTimeoutGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.userId) {
      throw new UnauthorizedException('Oturum bilgisi bulunamadı');
    }

    // Check if session is still valid (not timed out)
    const isSessionValid = await this.authService.validateSession(user.userId);

    if (!isSessionValid) {
      throw new UnauthorizedException(
        'Oturum zaman aşımına uğradı. Lütfen tekrar giriş yapın',
      );
    }

    // Session is valid — update last activity (sliding window)
    await this.authService.updateLastActivity(user.userId);

    return true;
  }
}
