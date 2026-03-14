import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'Kullanıcının e-posta adresi',
    example: 'ogrenci@university.edu.tr',
  })
  email!: string;

  @ApiProperty({
    description: 'Kullanıcının şifresi',
    example: 'GüçlüSifre123!',
  })
  password!: string;
}
