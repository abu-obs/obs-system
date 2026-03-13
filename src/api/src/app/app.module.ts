import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Importing our newly created AuthModule
import { AuthModule } from './auth/auth.module'; 

@Module({
  imports: [
    AuthModule // Registering AuthModule here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}