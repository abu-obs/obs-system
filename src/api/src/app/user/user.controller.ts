import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@ApiTags('Kullanıcı (Users)')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  
  @Get()
  @ApiOperation({ summary: 'Sistemdeki tüm kullanıcıları listeler' })
  @ApiResponse({ status: 200, description: 'Kullanıcı listesi başarıyla getirildi.' })
  findAll() {
    // İş mantığı daha sonra eklenecek (Stub)
    return [];
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID değerine göre tekil bir kullanıcı getirir' })
  @ApiParam({ name: 'id', description: 'Kullanıcı ID', type: Number })
  @ApiResponse({ status: 200, description: 'Kullanıcı başarıyla getirildi.' })
  @ApiResponse({ status: 404, description: 'Kullanıcı bulunamadı.' })
  findOne(@Param('id') id: string) {
    // İş mantığı daha sonra eklenecek (Stub)
    return { message: `${id} ID'li kullanıcı detayları` };
  }

  @Post()
  @ApiOperation({ summary: 'Sisteme yeni bir kullanıcı ekler' })
  @ApiResponse({ status: 201, description: 'Kullanıcı başarıyla oluşturuldu.' })
  @ApiResponse({ status: 400, description: 'Geçersiz veri girişi.' })
  create(@Body() createUserDto: CreateUserDto) {
    // İş mantığı daha sonra eklenecek (Stub)
    return { message: 'Kullanıcı oluşturuldu', data: createUserDto };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Var olan bir kullanıcının bilgilerini günceller' })
  @ApiParam({ name: 'id', description: 'Kullanıcı ID', type: Number })
  @ApiResponse({ status: 200, description: 'Kullanıcı bilgileri güncellendi.' })
  @ApiResponse({ status: 404, description: 'Güncellenecek kullanıcı bulunamadı.' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // İş mantığı daha sonra eklenecek (Stub)
    return { message: `${id} ID'li kullanıcı güncellendi`, data: updateUserDto };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Bir kullanıcıyı sistemden siler' })
  @ApiParam({ name: 'id', description: 'Kullanıcı ID', type: Number })
  @ApiResponse({ status: 200, description: 'Kullanıcı silindi.' })
  @ApiResponse({ status: 404, description: 'Silinecek kullanıcı bulunamadı.' })
  remove(@Param('id') id: string) {
    // İş mantığı daha sonra eklenecek (Stub)
    return { message: `${id} ID'li kullanıcı silindi` };
  }
}
