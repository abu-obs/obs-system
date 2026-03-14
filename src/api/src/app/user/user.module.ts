import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [], // Servis kısmı boş bırakıldı, iş mantığı yazılmayacak.
})
export class UserModule {}
