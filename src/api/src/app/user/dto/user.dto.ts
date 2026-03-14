import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Kullanıcının adı', example: 'Ahmet' })
  ad!: string;

  @ApiProperty({ description: 'Kullanıcının soyadı', example: 'Yılmaz' })
  soyad!: string;

  @ApiProperty({ description: 'Kullanıcının TC Kimlik Numarası', example: '12345678901' })
  tckn!: string;

  @ApiProperty({ description: 'Kullanıcının e-posta adresi', example: 'ahmet.yilmaz@university.edu.tr' })
  eposta!: string;

  @ApiProperty({ description: 'Öğrenci Numarası (Sadece öğrenciler için)', example: '20230001', required: false })
  ogrenciNo?: string;

  @ApiProperty({ description: 'Sistemdeki rolü', example: 'OGRENCI', enum: ['OGRENCI', 'AKADEMISYEN', 'ADMIN'] })
  rol!: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
