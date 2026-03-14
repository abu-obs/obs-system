import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Custom Guard that extends the default Passport JWT AuthGuard.
 * Use @UseGuards(JwtAuthGuard) on any controller or route to protect it.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}