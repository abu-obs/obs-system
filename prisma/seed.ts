// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seed işlemi başlıyor... ');

  // ÖRNEK: Taha ve Azra burayı schema.prisma'daki isimlere göre güncelleyecek.
  // Örneğin FAKULTE tablonuz varsa:
  /*
  const muhendislikFakultesi = await prisma.fAKULTE.create({
    data: {
      Fakulte_Ad: 'Mühendislik ve Doğa Bilimleri Fakültesi',
      // ... diğer zorunlu alanlar
    },
  });
  console.log('Fakülte eklendi:', muhendislikFakultesi);
  */

  console.log('Seed işlemi başarıyla tamamlandı! ');
}

main()
  .catch((e) => {
    console.error('Seed sırasında hata oluştu:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });