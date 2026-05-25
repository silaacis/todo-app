# 📝 Todo App

Yapılacaklar listenizi dijital olarak yönetmek için tasarlanmış, basit ve etkili bir web uygulaması. Görevlerinizi hızlıca ekleyin, tamamladığınız işleri işaretleyin ve artık gerekli olmayan görevleri silin. Minimalist arayüzü sayesinde hiçbir karmaşıklık olmadan verimliliğinizi arttırın.

## ✨ Temel Özellikler

- ➕ **Yeni Görev Ekleme** - Hızlıca yapılacaklar listesine yeni görevler ekleyin
- ✅ **Görev Tamamlama** - Bitirdiğiniz görevleri işaretleyerek ilerlemenizi takip edin
- 🗑️ **Görev Silme** - Artık ihtiyaç duymadığınız görevleri kolayca kaldırın
- 🎨 **Temiz Tasarım** - Dikkat dağıtıcı öğeler olmadan sadece gerekli bilgiler
- ⚡ **Hızlı Performans** - Anında yanıt veren ve sorunsuz çalışan arayüz

## 🛠️ Teknoloji Stack'i

Bu proje modern web teknolojileri ile geliştirilmiştir:

- **Frontend**: TypeScript (%69) - Tip güvenliği ile daha güvenilir kod
- **Markup**: HTML (%30) - Temiz ve anlamsal sayfa yapısı
- **Stil**: CSS (%1) - Minimal ama etkili tasarım
- **Backend**: External Todo API - Görevleri güvenli şekilde depolama ve yönetme

## 🚀 Başlangıç Rehberi

### Gereksinimler

Başlamadan önce bilgisayarınızda yüklü olması gerekenler:
- **Node.js** (v14 ve üzeri)
- **npm** (Node Package Manager - genellikle Node.js ile birlikte gelir)

### Adım Adım Kurulum

```bash
# 1. Projeyi bilgisayarınıza indirin
git clone https://github.com/silaacis/todo-app

# 2. Proje klasörüne girin
cd todo-app

# 3. Gerekli kütüphaneleri yükleyin
npm install

# 4. Uygulamayı başlatın
npm start
```

Kurulum tamamlandıktan sonra otomatik olarak **http://localhost:3000** adresinde tarayıcınız açılacak ve uygulamayı kullanmaya başlayabilirsiniz.

## ⚙️ Backend API Kurulumu

Bu uygulama, görevleri sunucu tarafında depolamak için harici bir API'ye bağlıdır. API olmadan uygulama çalışacak ama görevleriniz kaydedilmeyecektir.

### API'yi Kurma Adımları

1. **Depoyu klonlayın**: [Fcakiroglu16/TodoAppPlayground](https://github.com/Fcakiroglu16/TodoAppPlayground)
2. **Hocasının talimatlarını takip edin** - İlgili depoda kurulum adımları bulunmaktadır
3. **API'yi çalıştırın** - Genellikle `npm start` veya benzer bir komut ile başlatılır

### API Bağlantısı Kontrol

Eğer uygulamayı açtığınızda:
- ✅ Görevleri görebiliyorsanız → API doğru şekilde çalışıyor
- ❌ Görev ekleyemiyorsanız veya hata alıyorsanız → API'yi kontrol edin

---

## 💡 İpuçları ve Sorun Giderme

**Soru**: Uygulamayı başlattığım halde görevler boş gözüküyor?
**Cevap**: Muhtemelen API çalışmıyor veya henüz başlamadı. Hocanın deposundaki API'yi başlatın.

**Soru**: Yeni görev ekleyemiyorum?
**Cevap**: Tarayıcınızın geliştirici konsolu (F12) açın ve hata mesajını kontrol edin. Genellikle API bağlantı problemidir.

**Soru**: Tarayıcı yenilemesinde görevler kayboluyor?
**Cevap**: Bu tamamen normal. Görevler API sunucusunda depolanıyor, yenilemenin ardından tekrar yüklenir.

---

**Sorularınız mı var?** Hocanız veya sınıf arkadaşlarınızla iletişime geçin. Mutlu üretken olmanızı diliyorum! 🚀
