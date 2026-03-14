import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    description: 'Kullanıcının e-posta adresi',
    example: 'yeni.ogrenci@university.edu.tr',
  })
  email!: string;

  @ApiProperty({
    description: 'Kullanıcının şifresi',
    example: 'GüçlüSifre123!',
  })
  password!: string;

  @ApiProperty({
    description: 'Sistemdeki rolü (OGRENCI, AKADEMISYEN, ADMIN)',
    example: 'OGRENCI',
  })
  role!: string;
}
