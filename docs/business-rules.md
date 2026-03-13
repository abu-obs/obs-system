

# Student Information System (OBS) – Business Rules



## Modül 1: Öğrenci Yönetimi

**BR-OGR-001** – TC Kimlik No Benzersizliği: Her öğrencinin TC Kimlik Numarası sistemde yalnızca bir kez kayıtlı olabilir. Aynı TC ile mükerrer kayıt oluşturulamaz.

**BR-OGR-002** – Öğrenci No Üretimi: Öğrenci numarası; kayıt yılı, fakülte kodu ve sıra numarasından otomatik olarak sistem tarafından üretilir; kullanıcı tarafından manuel girilemez.

**BR-OGR-003** – Ön Kayıt Süresi: Ön kayıt, üniversite tarafından belirlenen akademik takvim tarihlerinde açık olmalıdır. Takvim dışında ön kayıt işlemi gerçekleştirilemez.

**BR-OGR-004** – Kesin Kayıt Belgesi Zorunluluğu: Kesin kayıt için öğrencinin YKS sonuç belgesi, diploma/mezuniyet belgesi ve kimlik fotokopisi sisteme yüklenmiş olmalıdır.

**BR-OGR-005** – Öğrenci Statü Geçişleri: Aktif, izinli, kayıt donduran ve mezun statüleri arasındaki geçişler, yalnızca öğrenci işleri yetkilileri tarafından ve belirtilen koşullar sağlandığında yapılabilir.

**BR-OGR-006** – Kayıt Dondurma Limiti: Bir öğrenci, tüm öğrenim hayatı boyunca en fazla 2 dönem kayıt dondurabilir. Bu süre aşıldığında sistem otomatik olarak işlemi reddeder.

**BR-OGR-007** – İzin Süresi Kontrolü: Mazeretsiz izin için aynı akademik yılda en fazla 1 dönem, toplamda en fazla 2 dönem izin kullanılabilir.

**BR-OGR-008** – Çift Anadal Koşulu: Çift anadal programına başvurmak için öğrencinin GANO'sunun 3.00 ve üzeri olması ve bulunduğu programda ilgili dönem itibarıyla başarı sıralamasında üst %20'lik dilime girmesi zorunludur. Öğrencinin %20'lik dilime girememesi halinde GANO'sunun, başvurulan programın ilgili dönemde kabul ettiği en düşük puana eşit veya daha yüksek olması gerekir.

**BR-OGR-009** – Yan Dal Koşulu: Yan dal programına başvurabilmek için öğrencinin GANO'sunun 3.00 ve üzeri olması ve bulunduğu programda ilgili dönem itibarıyla başarı sıralamasında üst %20'lik dilime girmesi zorunludur. Öğrencinin %20'lik dilime girememesi halinde GANO'sunun, başvurulan programın ilgili dönemde kabul ettiği en düşük puana eşit veya daha yüksek olması gerekir.

**BR-OGR-010** – Mezuniyet Şartı: Mezuniyet için öğrencinin müfredattaki tüm zorunlu dersleri geçmiş, seçmeli ders kreditlerini tamamlamış ve GANO'sunun 2.00 veya üzerinde olması gerekir.

**BR-OGR-011** – İlişik Kesme Koşulu: Peş peşe 2 dönem kayıt yaptırmayan öğrencinin kaydı, öğrenci işleri onayı ile re'sen silinir.

**BR-OGR-012** – Yatay Geçiş Kotası: Yatay geçiş kontenjanı, bölüm kapasitesinin %10'unu aşamaz; bu oran YÖK mevzuatına göre güncellenir.

**BR-OGR-013** – Dikey Geçiş Kabul Koşulu: DGS ile dikey geçiş yapan öğrencilerin muafiyet talepleri, ders eşdeğerlik komisyonu onayına tabidir.

**BR-OGR-014** – Belge Talep Süresi: Öğrenci belgesi, transkript gibi belgeler talep tarihinden itibaren en geç 2 iş günü içinde sisteme yüklenir.

**BR-OGR-015** – İletişim Bilgisi Güncelliği: Öğrenci e-posta ve telefon bilgilerinin her dönem başında doğrulanması zorunludur; doğrulanmayan hesaplar uyarı alır.

## Modül 2: Akademik Program ve Müfredat Yönetimi

**BR-PRG-001** – Müfredat Onay Hiyerarşisi: Yeni müfredat veya değişiklikler; bölüm kurulu, fakülte kurulu ve senato onayından geçmeden sisteme aktif olarak kaydedilemez.

**BR-PRG-002** – AKTS Toplamı Zorunluluğu: Bir dönem müfredatındaki toplam AKTS kredisi, YÖK normlarına göre 30 AKTS olmalıdır. Sapma yalnızca senato kararı ile mümkündür.

**BR-PRG-003** – Zorunlu/Seçmeli Ders Oranı: Bir programda zorunlu derslerin toplam kredisi, müfredatın en az %60'ını oluşturmalıdır.

**BR-PRG-004** – Ön Koşul Döngüsü Yasağı: Sistem, ön koşul tanımlarında döngüsel bağımlılık (A→B→A) oluşmasını engeller; böyle bir tanımlama girişiminde hata mesajı üretir.

**BR-PRG-005** – Ders Eşdeğerlik Tanımı: Ders eşdeğerlikleri yalnızca ilgili bölüm komisyonu tarafından tanımlanabilir; eşdeğerlik onaylandıktan sonra değiştirilemez, sadece yeni kayıt eklenebilir.

**BR-PRG-006** – Müfredat Versiyonlama: Onaylanan her müfredat değişikliği yeni bir versiyon numarası alır. Eski versiyonlar arşivde saklanır ve silinmez.

**BR-PRG-007** – Ders Kodu Benzersizliği: Her ders kodu üniversite genelinde benzersiz olmalıdır. Aynı ders kodu iki farklı derse atanamaz.

**BR-PRG-008** – Program Kapatma Süreci: Bir program kapatılmadan önce, kayıtlı öğrencilerin mezuniyete ya da başka bir programa geçişine ilişkin plan onaylanmış olmalıdır.

**BR-PRG-009** – AKTS Güncelleme Kısıtı: Bir dersin AKTS değeri o dönem içinde kayıtlı öğrenci varken değiştirilemez; değişiklik ancak dönem sonrasında sonraki versiyona uygulanır.

**BR-PRG-010** – Yeni Ders Açılış Bildirimi: Yeni açılan her ders için en az 2 hafta önce bölüm başkanlığına bildirim yapılması zorunludur.

## Modül 3: Ders ve Şube Yönetimi

**BR-SBE-001** – Şube Açılış Zamanı: Şubeler, akademik takvimde belirlenen ders açılış tarihinden önce tanımlanmış ve onaylanmış olmalıdır.

**BR-SBE-002** – Kontenjan Üst Sınırı: Bir şubenin maksimum kontenjanı, atandığı dersliğin kapasitesini aşamaz. Ek kontenjan ancak dekan onayı ile verilebilir.

**BR-SBE-003** – Öğretim Üyesi Ders Yükü: Bir öğretim üyesinin haftalık ders yükü 18 saattir. Bu yükün aşılması durumunda sistem uyarı üretir ancak işlemi engellemez.

**BR-SBE-004** – Çakışma Kontrolü: Aynı öğretim üyesi aynı gün ve saate iki farklı şubede görevlendirilemez; sistem çakışma tespit ettiğinde uyarı üretir.

**BR-SBE-005** – Derslik Çakışma Kontrolü: Aynı derslik aynı zaman dilimine iki farklı şube için atanamaz.

**BR-SBE-006** – Şube İptali Bildirimi: İptal edilen şubeler için kayıtlı öğrencilere sistem üzerinden otomatik bildirim gönderilir.

**BR-SBE-007** – Ders Programı Değişikliği: Onaylanmış ders programı değişiklikleri, eğitim-öğretim döneminin ilk 2 haftasından sonra yapılamaz.

## Modül 4: Ders Kayıt

**BR-KYT-001** – Akademik Takvim Kısıtı: Öğrenciler ders kaydını yalnızca akademik takvimde belirlenen kayıt döneminde gerçekleştirebilir; dönem dışında kayıt işlemi yapılamaz.

**BR-KYT-002** – Ön Koşul Zorunluluğu: Ön koşulu bulunmayan veya ön koşulu başarıyla tamamlanmamış bir derse öğrenci kayıt olamaz; sistem bu kontrolü otomatik yapar.

**BR-KYT-003** – Kredi Üst Sınırı: Normal şartlarda bir dönemde alınabilecek maksimum kredi 30 AKTS'tir. GANO 3.50 ve üzeri öğrenciler için ek ders alımı danışman onayına tabidir.

**BR-KYT-004** – Kredi Alt Sınırı: Tam zamanlı öğrenciler bir dönemde en az 15 AKTS'lik ders almak zorundadır; aksi hâlde sistem uyarı üretir.

**BR-KYT-005** – Kontenjan Kontrolü: Kontenjanı dolan bir şubeye yeni öğrenci kaydı alınamaz. Bekleme listesi yalnızca öğretim üyesi onayı ile açılabilir.

**BR-KYT-006** – Ders Programı Çakışma Yasağı: Birbirinin aynı gün ve saatine denk gelen iki ders seçilemez; sistem çakışmayı otomatik olarak engeller.

**BR-KYT-007** – Danışman Onay Zorunluluğu: Kayıt işleminin tamamlanması için danışman elektronik onayı zorunludur. Onaylanmayan kayıtlar geçici statüde bekler.

**BR-KYT-008** – Add-Drop Süresi: Add-drop işlemi yalnızca dönem başındaki ilk 2 hafta içinde gerçekleştirilebilir.

**BR-KYT-009** – Üst Sınıf Dersi Seçimi: Öğrencinin kendi döneminden bir üst sınıfa ait ders alabilmesi için danışman onayı yeterlidir. Öğrencinin yeterli AKTS'ye sahip olması ve o derse ait altta kalan (başarısız veya alınmamış) ön koşul dersinin bulunmaması gerekir; ayrıca GANO şartı aranmaz.

**BR-KYT-010** – Devam Durumu Kaydı: Ders kaydı tamamlanmadan devam takibine açılmaz; kayıt iptalinde devam verileri arşivlenir.

**BR-KYT-011** – Borç Engeli: Mali borcu bulunan öğrenciler ders kaydı yaptıramaz; borç kapatılmadan sistem kayda izin vermez.

## Modül 5: Not ve Değerlendirme

**BR-NOT-001** – Not Giriş Süresi: Öğretim üyeleri final sınavından itibaren 10 iş günü içinde notları sisteme girmek zorundadır; süre aşılırsa bölüm başkanlığına otomatik uyarı gönderilir.

**BR-NOT-002** – Not Ağırlıkları: Vize, final ve diğer değerlendirme bileşenlerinin ağırlıkları dönem başında sisteme girilir ve öğrencilere ilan edilir; dönem içinde değiştirilemez.

**BR-NOT-003** – Harf Notu Dönüşümü: Harf notu dönüşümü, üniversitenin onaylı not dönüşüm tablosuna göre sistem tarafından otomatik yapılır; manuel override yalnızca Öğrenci İşleri Müdürü onayı ile mümkündür.

**BR-NOT-004** – GNO / AGNO Hesabı: AGNO (genel not ortalaması) her not girişinin ardından sistem tarafından gerçek zamanlı güncellenir ve öğrenci özet ekranında anlık gösterilir.

**BR-NOT-005** – Not Kilit Kuralı: Notlar transkripte işlendikten sonra kilitlenir; kilitli nota düzeltme talebi yalnızca bölüm başkanı onayı ile açılabilir.

**BR-NOT-006** – İtiraz Süresi: Öğrenciler notların ilanından itibaren 5 iş günü içinde not itirazında bulunabilir; bu süre dolduktan sonra itiraz başvurusu sisteme alınmaz.

**BR-NOT-007** – Bütünleme Hakkı: Dönem sonu notu FF olan öğrenci bütünleme sınavına girme hakkı kazanır; devamsızlık sınırını aşan öğrenciye bu hak tanınmaz.

**BR-NOT-008** – Akademik Tekrar Sınırı: Aynı ders 2 kez başarısız olunursa, öğrenci üçüncü kayıtta danışman onayı almak zorundadır.

**BR-NOT-009** – Akademik Uyarı Eşiği: AGNO 2.00'ın altına düşen öğrenci akademik uyarı listesine alınır; 2 dönem arka arkaya devam ederse bölüm başkanı ile görüşme zorunlu hâle gelir.

**BR-NOT-010** – Muafiyet Notu: Muafiyet ile tanınan dersler için öğrencinin aldığı nota eşdeğer bir not sisteme girilir ve AGNO hesabına dahil edilir.

**BR-NOT-011** – Onur/Yüksek Onur Koşulu: Daha sonra yazılacak.

## Modül 6: Sınav Yönetimi

**BR-SNV-001** – Sınav Takvimi İlanı: Dönem sınav takvimi, sınav döneminden en az 3 hafta önce öğrencilere ilan edilmelidir.

**BR-SNV-002** – Sınav Salonu Kapasitesi: Bir sınav salonuna atanacak öğrenci sayısı, salon kapasitesinin %80'ini geçemez.

**BR-SNV-003** – Gözetmen Atama Kuralı: Her 30 öğrenci için en az 1 gözetmen atanmalıdır; bu oran sistem tarafından denetlenir.

**BR-SNV-004** – Öğrenci Çakışma Kontrolü: Bir öğrenci aynı gün ve saatte iki farklı sınava giremez; sistem çakışma tespit ettiğinde uyarı üretir.

**BR-SNV-005** – Öğretim Üyesi Çakışma Kontrolü: Bir öğretim üyesinin yönettiği iki sınav aynı zaman dilimine atanamaz.

**BR-SNV-006** – Mazeret Sınavı Hakkı: Belgelenmiş mazereti sisteme yüklenen ve birim yönetimince onaylanan öğrenci mazeret sınavına girebilir; mazeret sınavı sayısı dönem başında belirlenen kurala göre sınırlandırılır.

**BR-SNV-007** – Sonuç Aktarım Süresi: Sınav sonuçları, sınavın yapıldığı tarihten itibaren 10 iş günü içinde sisteme aktarılmalıdır.

**BR-SNV-008** – Sınav İptal Bildirimi: İptal edilen sınavlar için öğrencilere en az 24 saat öncesinden sistem üzerinden bildirim yapılır.

## Modül 7: Öğretim Üyesi Yönetimi

**BR-OYE-001** – Kadro Tanımı Zorunluluğu: Sisteme yalnızca üniversite kadrosunda kayıtlı akademik personel öğretim üyesi olarak tanımlanabilir.

**BR-OYE-002** – Ders Atama Yetkisi: Bir öğretim üyesine ders atanabilmesi için ilgili anabilim dalı başkanının onayı zorunludur.

**BR-OYE-003** – Not Giriş Yetkisi: Not girişi yalnızca o şubenin sorumlu öğretim üyesine aittir; yetki devri bölüm başkanı onayı gerektirir.

**BR-OYE-004** – Görevden Ayrılma Süreci: Görevden ayrılan öğretim üyesinin üzerindeki şubeler ve danışmanlıklar dönem sonuna kadar yerine vekâlet atanana devredilir.

**BR-OYE-005** – Performans Raporlama: Öğretim üyesi ders performans raporları her dönem sonu üretilir ve bölüm başkanlığına iletilir.

## Modül 8: Danışmanlık

**BR-DAN-001** – Danışman Zorunluluğu: Her aktif öğrencinin sisteme tanımlı bir danışmanı olmak zorundadır; danışmansız kayıt ders kaydına kapanır.

**BR-DAN-002** – Danışman Onay Süresi: Danışman, öğrencinin ders kaydını akademik takvimde belirtilen süre dolmadan onaylamak zorundadır; onaylanmayan kayıtlar dönem sonu iptal edilir.

**BR-DAN-003** – Akademik Uyarı Bildirimi: AGNO 2.00 altına düşen öğrenciler için sistem danışmana otomatik bildirim gönderir ve görüşme planlaması yapılmasını gerektirir.

**BR-DAN-004** – Danışman Değişikliği: Danışman değişikliği dönem içinde yapılamaz; değişiklik talebi bir sonraki dönem başına ertelenir ve bölüm başkanı onayı gerektirir.

**BR-DAN-005** – Mezuniyet Onayı: Mezuniyet müracaatı yapan öğrencinin danışmanı, müfredat tamamlama durumunu kontrol ederek onay vermek zorundadır.

## Modül 9: Devam Takibi

**BR-DEV-001** – Devam Yükümlülüğü: Öğrenciler her dersin teorik saatlerinin en az %70'ine, uygulamalı dersler için en az %80'ine katılmak zorundadır.

**BR-DEV-002** – Devam Girişi Zamanı: Yoklama, ilgili ders saatinden sonraki 24 saat içinde öğretim üyesi tarafından sisteme girilmelidir.

**BR-DEV-003** – Devamsızlık Uyarısı: Devamsızlık oranı %30'a ulaştığında öğrenci bütünleme hakkını kaybeder.

**BR-DEV-004** – Devam Kaydı Değişikliği: Sisteme girilen devam kaydı yalnızca ilgili öğretim üyesi tarafından ve bölüm başkanına bildirim yapılarak değiştirilebilir; değişiklik log'a işlenir.

**BR-DEV-005** – Mazeret İzni: Sağlık raporu veya resmi belgeye dayalı devamsızlıklar, bölüm onayı ile mazeretli sayılır ve devamsızlık hesabına dahil edilmez.

**BR-DEV-006** – Otomatik Başarısızlık: Devamsızlık sınırını aşan öğrenci, sistem tarafından otomatik olarak 'NA' (devamsız) statüsüne alınır ve sınava girme hakkı kaldırılır.

## Modül 10: Entegrasyon

**BR-ENT-001** – YÖKSİS Bildirimi: Öğrenci kayıt, not ve mezuniyet bilgileri YÖKSİS'e belirlenen periyotta (dönem sonu 30 gün içinde) aktarılmalıdır.

**BR-ENT-002** – KYK Veri Akışı: Öğrenci öğrenim durumu ve burs bilgileri KYK sistemine API aracılığıyla gerçek zamanlı olarak iletilir.

**BR-ENT-003** – Mali Sistem Entegrasyonu: Harç ve ödeme bilgileri üniversite Mali Yönetim Sistemi ile tek yönlü entegrasyon üzerinden OBS'e aktarılır; ödeme durumu OBS kayıt ekranına yansır.

**BR-ENT-004** – e-Devlet Erişimi: Öğrenci öğrenim belgesi ve transkript sorgulamaları e-Devlet entegrasyonu üzerinden yapılabilir; belge doğrulama barkod sistemi ile desteklenir.

**BR-ENT-005** – API Güvenliği: Tüm dış sistem entegrasyonları OAuth 2.0 veya API Key yetkilendirmesi ile güvence altına alınır; yetkisiz erişim girişimleri loglanır ve uyarı üretilir.

**BR-ENT-006** – Veri Senkronizasyon Hatası: Entegrasyon işlemlerinde hata oluşması durumunda sistem otomatik olarak yeniden deneme mekanizmasını devreye alır ve teknik ekibe alarm gönderir.

**BR-ENT-007** – Harici Eğitim Platformu Entegrasyonu: Üniversitede harici bir LMS sistemi bulunmamaktadır. İhtiyaç duyulması halinde üçüncü taraf eğitim platformu entegrasyonu API yönetim katmanı üzerinden sağlanabilir; entegrasyon kapsamı ayrıca belirlenir.

## Modül 11: Bildirim ve İletişim

**BR-BLD-001** – Bildirim Kanalı Tercihi: Öğrenciler SMS, e-posta veya sistem içi bildirim kanalını tercihlerine göre seçebilir; en az bir kanal aktif olmak zorundadır.

**BR-BLD-002** – Kritik Bildirim Zorunluluğu: Ders kaydı onayı, not ilanı, sınav tarihi ve akademik uyarı gibi kritik bildirimler tüm aktif kanallara eş zamanlı iletilir; kanal tercihi bu bildirimleri kapsamamaz.

**BR-BLD-003** – Bildirim Arşivleme: Tüm gönderilen bildirimler 2 yıl süreyle sistemde saklanır; öğrenci bildirim geçmişine erişebilir.

**BR-BLD-004** – Toplu Bildirim Yetkisi: Bölüm veya fakülte genelinde toplu bildirim yalnızca yönetici rolündeki kullanıcılar tarafından gönderilebilir.

**BR-BLD-005** – Duyuru Geçerlilik Süresi: Sistem içi duyurular yayınlanma tarihinden itibaren en fazla 90 gün boyunca aktif kalır; süre dolduğunda otomatik olarak arşivlenir.

**BR-BLD-006** – Otomatik Hatırlatma: Kayıt bitiş tarihine 3 gün kala, ders kaydı tamamlanmamış öğrencilere sistem tarafından otomatik hatırlatma gönderilir.

