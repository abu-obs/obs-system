# 1. Fonksiyonel Gereksinimler (Functional Requirements - FR)

## 1.1. Kullanıcı ve Kimlik Yönetimi
* **FR-1:** Sistem; Öğrenci, Akademisyen ve İdari Personel olmak üzere 3 temel giriş türünü desteklemelidir. İdari görevi olan akademisyenler (dekan, bölüm başkanı) hem akademisyen hem idari modüle çift hesap mantığıyla ayrı ayrı erişebilmelidir.
* **FR-2:** Sistem, kullanıcıların kullanıcı adı ve parola ile giriş yapmasını, şifre değiştirmesini ve sıfırlamasını sağlamalıdır. Öğrenciler sisteme TC kimlik numarası ve doğum tarihi girerek SMS yoluyla self-servis ilk şifrelerini alabilmelidir.
* **FR-3:** Sistem, kullanıcıların rol bazlı erişim yetkilerini kontrol etmelidir.
* **FR-4:** Sistem, kullanıcıların profil bilgilerini (iletişim, fotoğraf vb.) görüntülemesini ve güncellemesini sağlamalıdır.
* **FR-5:** Sistem yöneticileri kullanıcı hesaplarını oluşturabilmeli, devre dışı bırakabilmeli ve rollerini değiştirebilmelidir. ÖSYM'den gelen öğrenci verisi (TC, ad-soyad, bölüm) ve yabancı uyruklu öğrenci listeleri Excel ile toplu olarak sisteme aktarılabilmelidir.

## 1.2. Öğrenci ve Mezuniyet Yönetimi
* **FR-6:** Sistem, yeni öğrenciler için ön kayıt ve kesin kayıt işlemlerini yönetebilmelidir. Online kesin kayıtta nüfus cüzdanı, ikametgah, diploma, fotoğraf ve (erkekler için) askerlik belgesi sisteme yüklenebilmelidir.
* **FR-7:** Sistem, öğrencilerin aktif, pasif veya izinli durumlarını takip edip değiştirebilmelidir.
* **FR-8:** Sistem, yatay geçiş başvurularını alabilmeli, fakülte onayını kaydedebilmeli ve öğrencinin eski üniversitesine kaydının silinmesi için resmi yazı yazma sürecini takip edebilmelidir.
* **FR-9:** Sistem; çift anadal ve yandal programları için başvuru alabilmeli ve bağımsız müfredat takibi yapabilmelidir. Çift anadal için GANO 3.0 ve sınıf ilk %20 (veya geçiş bölümü puan eşiği) şartı, yandal için GANO 2.5 ve en az 2 dönem tamamlamış olma şartı aranmalıdır.
* **FR-10:** Sistem, mezuniyet koşullarını (kredi ve zorunlu ders kontrolü, GANO 2.0+) denetleyebilmeli; mezuniyet sürecini otomatik olarak başlatmalı ve sırasıyla danışman ile idari birim onaylarını almalıdır.
* **FR-11:** Sistem, öğrenci belgesi ve PDF formatında doğrulanabilir resmi transkript oluşturabilmelidir.
* **FR-12:** Sistem, öğrencinin tamamladığı ve alması gereken kalan kredileri görsel bir "ilerleme çubuğu" (progress bar) üzerinden gösterebilmelidir.

## 1.3. Akademik Yapı, Müfredat ve Ders Yönetimi
* **FR-13:** Sistem; fakülte, bölüm ve akademik program tanımları oluşturup bunları birbiriyle ilişkilendirebilmelidir.
* **FR-14:** Sistem, akademik takvim oluşturabilmeli ve dönemleri manuel uzatma opsiyonuyla açıp kapatabilmelidir. Akademik takvim girildiğinde sınav tarihleri ve kayıt pencereleri sistem tarafından otomatik hesaplanmalıdır.
* **FR-15:** Sistem; ders kodu, adı, AKTS, zorunlu/seçmeli durumu ve ön koşullarıyla ders tanımları oluşturabilmelidir. Ön koşul kuralı için "DD" harf notu ve üzeri geçme yeterli sayılmalı, şartlı geçme uygulanmamalıdır.
* **FR-16:** Sistem, ders eşdeğerliklerini tanımlayabilmeli ve müfredat güncellemelerini versiyonlayabilmelidir.
* **FR-17:** Sistem, öğrencilerin ödevlerini sisteme yükleyebileceği, materyal (sunum, döküman) indirebileceği ve akademisyenlerin değerlendirme yapabileceği bir ödev/materyal yönetim modülü sunmalıdır.
* **FR-18:** Sistem, Erasmus/Farabi/Mevlana süreci için anlaşmalı üniversitelerin listesini, başvuru akışını (sınav → kabul → müfredat karşılaştırma → denklik kararı → not girişi) ve dönüşen notu takip edebilmelidir.
* **FR-19:** Sistem, öğrencilerin ders bazında ve akademisyen bazında geçmiş yıllara ait çalışma materyallerini (notlar, çıkmış sorular) yükleyebileceği ve indirebileceği paylaşımlı bir arşiv alanı sunmalıdır.
* **FR-20:** Sistem, tanımlanmış dersleri, mekan kısıtlarını ve hoca çalışma saatlerini dikkate alarak dönem ders programını otomatik olarak oluşturabilen kısıt-tabanlı (constraint-based) bir optimizasyon motoruna sahip olmalıdır.

## 1.4. Ders Açma, Şube Planlama ve Kayıt (Enrollment)
* **FR-21:** Sistem, dönemlik dersleri açabilmeli, şubeler (section) oluşturabilmeli ve kontenjan belirleyebilmelidir.
* **FR-22:** Sistem, derslere öğretim elemanı atayabilmeli ve çakışma kontrolü yapmalıdır. Dışarıdan gelen misafir hocalar, dönem bitiminde sistem tarafından otomatik pasife alınmalıdır.
* **FR-23:** Sistem, öğrencilerin ders ekle-bırak işlemlerini yapmasını sağlamalıdır. Kontenjan dolduğunda kayıt yapılamaz (bekleme listesi yoktur) ve add/drop sonrası danışman onayı yenilenmelidir.
* **FR-24:** Sistem; kayıt sırasında ön koşul, AKTS limiti, ve çakışma kontrolleri yapmalıdır. Mali borcu olan öğrencinin ders kaydı engellenmemeli, sadece uyarı verilmelidir.
* **FR-25:** Sistem kayıt hiyerarşisini şu sırayla yönetmelidir: Öğrenci önce alt sınıftan kalan borç derslerini, sonra kendi sınıfı derslerini, son olarak (kredisi kalırsa) üst sınıf derslerini alabilmelidir. Üst sınıf dersi alımında danışman onayı yeterlidir; GANO şartı uygulanmaz.
* **FR-26:** Sistem, akademik sınama (probation) durumundaki öğrencilerin maksimum kredi limitlerini otomatik olarak kısıtlamalıdır.

## 1.5. Notlandırma, Sınav ve Devam Yönetimi
* **FR-27:** Sistem; vize, final ve bütünleme notlarının Excel'den toplu aktarımla veya manuel girilmesini sağlamalıdır. Bütünleme notu doğrudan finalin yerine geçmeli (en yüksek olan alınmalı) ve GPA otomatik hesaplanmalıdır.
* **FR-28:** Sistem, not ilanından itibaren 3 gün içinde öğrenci itirazı alabilmeli; bu itiraz dekanlık onayı ile sadece maddi hata (toplama) kontrolü olarak gerçekleştirilmelidir.
* **FR-29:** Sistem, EBS (Elektronik Belge Sistemi) üzerinden yapılan mazeret sınavı başvurularını yönetebilmeli ve salon/gözetmen planlaması yapabilmelidir.
* **FR-30:** Sistem, haftalık fiziki kağıt yoklamalarının sisteme manuel girişine izin vermeli ve devamsızlık durumunu hesaplamalıdır. Hocaların sisteme not girebilmesi için devamsızlık kayıtlarını tamamlaması zorunlu kılınmalıdır.
* **FR-31:** Sistem, öğretim üyesi ders performans anketlerini dönem sonunda öğrencilere sunmalı (5 puan skalası), sonuçları toplayarak yönetim raporuna aktarmalıdır.
* **FR-32:** Sistem, akademisyenlerin verdikleri ders ve şubeler için haftalık yoklama amacıyla oturuma özel QR kod oluşturmasını sağlamalıdır.
* **FR-33:** Sistem, öğrencilerin bu QR kodu mobil cihazlarındaki kendi OBS hesapları üzerinden okutarak derse katılımlarını otomatik olarak "geldi" şeklinde kaydetmelerini sağlamalıdır.
* **FR-34:** Sistem, akademisyenlerin QR kod aracılığıyla otomatik oluşan yoklama listelerini görüntülemesine ve gerektiğinde devamsızlık kayıtlarına manuel olarak müdahale etmesine (düzenleme yapmasına) izin vermelidir.
* **FR-35:** Sistem, öğrencilerin henüz girilmemiş harf notları için tahmini değerler girerek o döneme ait Dönem Ortalaması (SGPA) ve Genel Ağırlıklı Not Ortalaması (CGPA) üzerindeki etkisini simüle edebildiği bir not simülasyon ekranı sunmalıdır.
* **FR-36:** Sistem, öğrencinin bir dersteki devamsızlık hakkı kritik sınıra (örneğin son 1 veya 2 hak) yaklaştığında otomatik olarak uyarı bildirimi göndermelidir.

## 1.6. Akademik Danışmanlık ve Raporlama
* **FR-37:** Sistem, öğrencilere danışman atayabilmeli (araştırma görevlilerince toplu atama dahil) ve danışman görüşmelerini kaydedebilmelidir. Dışarıdan gelen misafir hocalara danışmanlık verilmemelidir.
* **FR-38:** Sistem yöneticileri ve akademisyenler; ders bazlı öğrenci listeleri, başarı dağılımı, kontenjan doluluğu ve devamsızlık raporları oluşturabilmelidir. Bu raporlar sistem içerisinde filtrelenebilmeli ve PDF veya Excel formatında dışa aktarılabilmelidir.
* **FR-39:** Sistem yöneticileri; bölüm, sınıf, burs türü ve devamsızlık oranı gibi kriterleri birlikte kullanarak çok boyutlu öğrenci raporları oluşturabilmelidir. Bu raporlar Excel veya PDF formatında dışa aktarılabilmelidir.
* **FR-40:** Sistem; tüm akademisyenlerin isimlerini, oda numaralarını ve güncel ders programlarını kullanıcıların (öğrenciler ve diğer personel) görüntüleyebileceği ortak bir bilgi paneli/rehber sunmalıdır.
* **FR-41:** Sistem; öğrencilerin kesinleşen kendi haftalık ders programlarını, alınan dersler (kayıtlı olunan dersler) listesini ve filtreleyerek görüntüledikleri diğer fakülte/bölüm ders programlarını, arayüz üzerinden tek tıkla 'PDF Olarak İndir' veya 'Yazdır' seçenekleriyle dışa aktarabilmesini sağlamalıdır.

## 1.7. İletişim, Bildirim ve Entegrasyonlar
* **FR-42:** Sistem; kullanıcılara e-posta, SMS ve sistem içi bildirimler ile akademik takvim veya not hatırlatmaları gönderebilmelidir. KVKK kuralları gereği öğrencilerin telefon numaraları akademisyenler tarafından görüntülenememelidir.
* **FR-43:** Sistem; YÖKSİS, KYK ve e-Devlet ile veri paylaşımı ve belge doğrulama entegrasyonu sağlamalıdır.
* **FR-44:** Sistem, mali yönetim sistemi ile ödeme/borç bilgilerini görüntüleme amacıyla entegre çalışmalıdır. Ödeme OBS üzerinden yapılmaz, sadece borç durumu görünür.
* **FR-45:** Sistem, API yönetimi üzerinden diğer dış sistemlerin veri sorgulamasına olanak tanımalıdır.

## 1.8. Akıllı Sistemler ve Öğrenci Deneyimi (Smart Systems & UX)
* **FR-46:** Sistem, müfredattaki dersleri ve bu derslerin ön koşul bağlantılarını etkileşimli bir ağaç grafiği (node-based harita) şeklinde görselleştirebilmelidir.
* **FR-47:** Sistem, öğrencinin geçmiş dönemlerde yüksek not aldığı derslerin kategorilerini analiz ederek, ilgi alanına en uygun seçmeli dersleri kayıt ekranında "Önerilen Dersler" başlığı altında sunabilmelidir.
* **FR-48:** Sistem, uluslararası öğrenciler ve değişim programları (Erasmus) süreçleri için arayüzde Türkçe ve İngilizce olmak üzere çoklu dil desteği (i18n) sunmalıdır.
* **FR-49:** Sistem, öğrencilerin karşılaştıkları idari veya teknik sorunlar için (Örn: Ders kayıt hataları, harç ödeme sorunları) Öğrenci İşleri veya Bilgi İşlem birimlerine sistem üzerinden 'Destek Talebi (Ticket)' açabilmesini ve sürecin durumunu takip edebilmesini sağlamalıdır.
* **FR-50:** Sistem; öğrencinin ulaşmak istediği 'Hedef GANO' değerini girebileceği ve sistemin arka planda öğrencinin geçmiş transkriptini analiz ederek, hedefe en optimum şekilde ulaşabilmesi için harf notu düşük olan (DD, DC vb.) hangi dersleri tekrar alması gerektiğini etki puanlarıyla birlikte sunan 'Akıllı Transkript Senaryosu (GPA Stratejisti)' modülüne sahip olmalıdır.
* **FR-51:** Sistem, öğrencilere dönem başında teknik seçmeli, mesleki seçmeli ve bölüm dışı seçmeli kategorilerinde hangi derslerin açılmasını istediklerini soran bir talep anketi sunabilmelidir. Toplanan veriler yöneticilere raporlanarak bir sonraki dönem ders planlama sürecine girdi sağlamalıdır.

---

# 2. Fonksiyonel Olmayan Gereksinimler (Non-Functional Requirements - NFR)

## 2.1. Güvenlik ve Denetim (Security & Audit)
* **NFR-1:** Sistem, başarılı ve başarısız tüm kullanıcı giriş denemelerini ve kritik veri değişikliklerini (özellikle not değişikliklerini) loglamalıdır (Audit Trail).
* **NFR-2:** Sistem, 5 başarısız giriş denemesinden sonra hesabı geçici olarak kilitlemeli ve oturum zaman aşımı (session timeout) uygulamalıdır.
* **NFR-3:** Sistem, REST API erişimlerini güvenli jetonlar (örneğin JWT veya OAuth 2.0) ile yetkilendirmelidir.
* **NFR-4:** Sistem, öğrenci kişisel verilerini KVKK (Kişisel Verilerin Korunması Kanunu) uyumluluğu kapsamında veritabanında şifreleyerek (encryption) saklamalıdır.

## 2.2. Performans ve Ölçeklenebilirlik (Performance & Scalability)
* **NFR-5:** Sistem, ders kayıt (add-drop) haftalarındaki anlık yüksek trafiği (örneğin 5000 eşzamanlı kullanıcı) çökme veya ciddi yavaşlama olmadan kaldırabilmelidir.
* **NFR-6:** Sistem, kullanıcı isteklerinin %95'ini normal şartlarda 2 saniyenin altında yanıtlamalıdır.

## 2.3. Güvenilirlik ve Süreklilik (Reliability & Availability)
* **NFR-7:** Sistem, veri güncellemelerini (örneğin ders kayıt onayları) transaction mantığında gerçekleştirmeli, hata durumunda veritabanı bütünlüğünü korumalıdır (Rollback).
* **NFR-8:** Sistem bakım moduna alınabilmeli ve bu süre zarfında kullanıcılara anlaşılır bir bilgilendirme ekranı sunmalıdır.
* **NFR-9:** Sistemin yıllık çalışma süresi (Uptime) %99.9 olmalı; felaket kurtarma (Disaster Recovery) senaryoları için günlük tam yedekleme ve saatlik artımlı (incremental) yedekleme yapmalıdır.

## 2.4. Kullanılabilirlik (Usability)
* **NFR-10:** Sistem, farklı cihazlardan (mobil, tablet, masaüstü) sorunsuz erişilebilmesi için responsive (duyarlı) bir arayüz tasarımına sahip olmalıdır.
* **NFR-11:** Sistem, görme engelli kullanıcılar için ekran okuyucu (Screen Reader) yazılımlarıyla uyumlu olmalı ve erişilebilirlik standartlarını (WCAG) desteklemelidir.

## 2.5. Veri Bütünlüğü ve Eşzamanlılık (Data Integrity & Concurrency)
* **NFR-12:** Sistem, eş zamanlı kayıt işlemlerinde kontenjan taşmasını önlemek amacıyla veritabanı seviyesinde kilitleme (pessimistic/optimistic locking) mekanizması uygulamalıdır.
