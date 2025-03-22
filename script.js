document.addEventListener("DOMContentLoaded", () => {
    // Ürün verileri - her kategori için 10 ürün
    const artificialProducts = [
      {
        id: 1,
        name: "Tek Dallı Orkide",
        images: [
          "img/tek_dalli_orkide_beyaz.jfif",
          "img/mor_genis_saksi_orkide.jpg",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Yapay+Zeytin+3",
        ],
        price: "₺1.299,99",
        shortFeatures: "Gerçekçi görünüm, UV korumalı, iç ve dış mekan kullanımı",
        fullFeatures: `
                  <ul>
                      <li><strong>Yükseklik:</strong> 180 cm</li>
                      <li><strong>Malzeme:</strong> Yüksek kalite ipek kumaş ve doğal ahşap gövde</li>
                      <li><strong>UV Koruma:</strong> Güneş ışınlarına dayanıklı</li>
                      <li><strong>Kullanım:</strong> İç ve dış mekan</li>
                      <li><strong>Bakım:</strong> Toz alınması yeterli, su gerekmez</li>
                      <li><strong>Saksı:</strong> Dekoratif saksı dahil (renk seçenekli)</li>
                      <li><strong>Garanti:</strong> 1 yıl</li>
                  </ul>
              `,
      },
      {
        id: 2,
        name: "Yapay Palmiye",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Yapay+Palmiye+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Yapay+Palmiye+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Yapay+Palmiye+3",
        ],
        price: "₺899,99",
        shortFeatures: "Tropikal görünüm, dayanıklı yaprak, dekoratif saksı",
        fullFeatures: `
                  <ul>
                      <li><strong>Yükseklik:</strong> 150 cm</li>
                      <li><strong>Malzeme:</strong> Yüksek kalite ipek kumaş ve plastik gövde</li>
                      <li><strong>Yaprak Sayısı:</strong> 12 büyük yaprak</li>
                      <li><strong>Kullanım:</strong> İç mekan</li>
                      <li><strong>Bakım:</strong> Nemli bezle silme</li>
                      <li><strong>Saksı:</strong> Siyah plastik saksı dahil</li>
                  </ul>
              `,
      },
      {
        id: 3,
        name: "Yapay Gül Aranjmanı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Yapay+Gul+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Yapay+Gul+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Yapay+Gul+3",
        ],
        price: "₺249,99",
        shortFeatures: "Gerçek görünümlü, solmaz, dekoratif vazo dahil",
        fullFeatures: `
                  <ul>
                      <li><strong>İçerik:</strong> 15 adet gerçek dokulu yapay gül</li>
                      <li><strong>Malzeme:</strong> Yüksek kalite ipek kumaş ve plastik</li>
                      <li><strong>Renk:</strong> Kırmızı, pembe veya beyaz (seçiminize göre)</li>
                      <li><strong>Vazo:</strong> Cam vazo dahil</li>
                      <li><strong>Kullanım:</strong> İç mekan</li>
                  </ul>
              `,
      },
      {
        id: 4,
        name: "Yapay Bambu Ağacı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Yapay+Bambu+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Yapay+Bambu+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Yapay+Bambu+3",
        ],
        price: "₺749,99",
        shortFeatures: "Doğal görünüm, uzun ömürlü, dekoratif saksı",
        fullFeatures: `
                  <ul>
                      <li><strong>Yükseklik:</strong> 160 cm</li>
                      <li><strong>Malzeme:</strong> Doğal bambu gövde, yapay yapraklar</li>
                      <li><strong>Kullanım:</strong> İç mekan</li>
                      <li><strong>Bakım:</strong> Toz alınması yeterli</li>
                      <li><strong>Saksı:</strong> Seramik saksı dahil</li>
                  </ul>
              `,
      },
      {
        id: 5,
        name: "Yapay Lavanta Buketi",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Yapay+Lavanta+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Yapay+Lavanta+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Yapay+Lavanta+3",
        ],
        price: "₺129,99",
        shortFeatures: "Kokulu, dekoratif, uzun ömürlü",
        fullFeatures: `
                  <ul>
                      <li><strong>İçerik:</strong> 3 demet yapay lavanta</li>
                      <li><strong>Malzeme:</strong> İpek kumaş ve plastik</li>
                      <li><strong>Koku:</strong> Lavanta esanslı</li>
                      <li><strong>Kullanım:</strong> İç mekan, masa üstü, raf</li>
                      <li><strong>Paket:</strong> Dekoratif kağıt ambalaj</li>
                  </ul>
              `,
      },
      {
        id: 6,
        name: "Yapay Bonsai Ağacı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Yapay+Bonsai+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Yapay+Bonsai+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Yapay+Bonsai+3",
        ],
        price: "₺349,99",
        shortFeatures: "Geleneksel görünüm, bakım gerektirmez, dekoratif",
        fullFeatures: `
                  <ul>
                      <li><strong>Yükseklik:</strong> 40 cm</li>
                      <li><strong>Malzeme:</strong> Plastik yapraklar, doğal ahşap gövde</li>
                      <li><strong>Saksı:</strong> Seramik bonsai saksısı</li>
                      <li><strong>Stil:</strong> Japon tarzı</li>
                      <li><strong>Kullanım:</strong> İç mekan, ofis, salon</li>
                  </ul>
              `,
      },
      {
        id: 7,
        name: "Yapay Orkide",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Yapay+Orkide+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Yapay+Orkide+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Yapay+Orkide+3",
        ],
        price: "₺279,99",
        shortFeatures: "Zarif görünüm, gerçekçi dokular, şık saksı",
        fullFeatures: `
                  <ul>
                      <li><strong>Tür:</strong> Phalaenopsis (Güve) Orkide</li>
                      <li><strong>Yükseklik:</strong> 60 cm</li>
                      <li><strong>Çiçek Sayısı:</strong> 8-10 adet</li>
                      <li><strong>Malzeme:</strong> Silikon ve kumaş çiçekler</li>
                      <li><strong>Saksı:</strong> Beyaz seramik saksı</li>
                  </ul>
              `,
      },
      {
        id: 8,
        name: "Yapay Kaktüs Seti",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Yapay+Kaktus+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Yapay+Kaktus+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Yapay+Kaktus+3",
        ],
        price: "₺199,99",
        shortFeatures: "3'lü set, gerçekçi doku, mini saksılar",
        fullFeatures: `
                  <ul>
                      <li><strong>İçerik:</strong> 3 farklı yapay kaktüs</li>
                      <li><strong>Yükseklik:</strong> 15-25 cm</li>
                      <li><strong>Malzeme:</strong> Yumuşak silikon</li>
                      <li><strong>Saksı:</strong> Terracotta mini saksılar</li>
                      <li><strong>Kullanım:</strong> İç mekan, masa üstü, raf</li>
                  </ul>
              `,
      },
      {
        id: 9,
        name: "Yapay Çam Ağacı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Yapay+Cam+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Yapay+Cam+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Yapay+Cam+3",
        ],
        price: "₺899,99",
        shortFeatures: "Doğal görünüm, yoğun dal yapısı, dış mekan kullanımı",
        fullFeatures: `
                  <ul>
                      <li><strong>Yükseklik:</strong> 200 cm</li>
                      <li><strong>Malzeme:</strong> PE ve PVC karışımı yapraklar</li>
                      <li><strong>Dal Sayısı:</strong> 1200+ iğne yaprak</li>
                      <li><strong>Kullanım:</strong> İç ve dış mekan</li>
                      <li><strong>Saksı:</strong> Dayanıklı plastik saksı dahil</li>
                      <li><strong>Özellik:</strong> UV korumalı, solmaz</li>
                  </ul>
              `,
      },
      {
        id: 10,
        name: "Yapay Sukulent Aranjmanı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Yapay+Sukulent+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Yapay+Sukulent+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Yapay+Sukulent+3",
        ],
        price: "₺159,99",
        shortFeatures: "Çeşitli sukulentler, dekoratif kase, bakım gerektirmez",
        fullFeatures: `
                  <ul>
                      <li><strong>İçerik:</strong> 6-8 farklı yapay sukulent</li>
                      <li><strong>Boyut:</strong> 25 cm çap</li>
                      <li><strong>Malzeme:</strong> Silikon ve plastik</li>
                      <li><strong>Kap:</strong> Ahşap veya seramik kase</li>
                      <li><strong>Kullanım:</strong> İç mekan, masa üstü</li>
                  </ul>
              `,
      },
    ]
  
    const liveFlowers = [
      {
        id: 1,
        name: "Kırmızı Gül Buketi",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Kirmizi+Gul+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Kirmizi+Gul+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Kirmizi+Gul+3",
        ],
        price: "₺249,99",
        shortFeatures: "Taze kırmızı güller, özel ambalaj, aynı gün teslimat",
        fullFeatures: `
                  <ul>
                      <li><strong>İçerik:</strong> 11 adet birinci sınıf kırmızı gül</li>
                      <li><strong>Ambalaj:</strong> Özel tasarım kraft kağıt ve şeffaf selofan</li>
                      <li><strong>Aksesuar:</strong> Dekoratif kurdele ve yeşillikler</li>
                      <li><strong>Teslimat:</strong> Aynı gün teslimat (saat 14:00'e kadar)</li>
                      <li><strong>Garanti:</strong> Tazelik garantisi</li>
                  </ul>
              `,
      },
      {
        id: 2,
        name: "Orkide Aranjmanı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Orkide+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Orkide+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Orkide+3",
        ],
        price: "₺349,99",
        shortFeatures: "Çift dallı beyaz orkide, dekoratif saksı",
        fullFeatures: `
                  <ul>
                      <li><strong>Tür:</strong> Phalaenopsis (Güve) Orkide, çift dallı</li>
                      <li><strong>Renk:</strong> Beyaz veya açık pembe çiçekler</li>
                      <li><strong>Saksı:</strong> Seramik dekoratif saksı (renk seçenekli)</li>
                      <li><strong>Bakım:</strong> Bakım talimatları dahil</li>
                      <li><strong>Ömür:</strong> Düzenli bakımla 3+ ay çiçekli kalır</li>
                  </ul>
              `,
      },
      {
        id: 3,
        name: "Papatya Buketi",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Papatya+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Papatya+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Papatya+3",
        ],
        price: "₺179,99",
        shortFeatures: "Taze papatyalar, renkli ambalaj, kart hediyeli",
        fullFeatures: `
                  <ul>
                      <li><strong>İçerik:</strong> 25-30 adet taze beyaz papatya</li>
                      <li><strong>Ambalaj:</strong> Renkli kraft kağıt, jüt ip bağlama</li>
                      <li><strong>Aksesuar:</strong> Mevsim yeşillikleri ve dekoratif çiçekler</li>
                      <li><strong>Hediye:</strong> Mesaj kartı dahil</li>
                      <li><strong>Teslimat:</strong> Aynı gün teslimat (saat 14:00'e kadar)</li>
                  </ul>
              `,
      },
      {
        id: 4,
        name: "Renkli Lale Buketi",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Lale+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Lale+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Lale+3",
        ],
        price: "₺199,99",
        shortFeatures: "Karışık renkli laleler, şık ambalaj, mevsimlik",
        fullFeatures: `
                  <ul>
                      <li><strong>İçerik:</strong> 15 adet karışık renkli lale</li>
                      <li><strong>Renkler:</strong> Kırmızı, sarı, pembe, mor (mevsime göre değişebilir)</li>
                      <li><strong>Ambalaj:</strong> Özel tasarım kraft kağıt</li>
                      <li><strong>Mevsim:</strong> Kış sonu - İlkbahar</li>
                      <li><strong>Teslimat:</strong> Mevsiminde aynı gün teslimat</li>
                  </ul>
              `,
      },
      {
        id: 5,
        name: "Teraryum",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Teraryum+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Teraryum+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Teraryum+3",
        ],
        price: "₺299,99",
        shortFeatures: "Canlı sukulentler, dekoratif cam fanus, uzun ömürlü",
        fullFeatures: `
                  <ul>
                      <li><strong>İçerik:</strong> 3-5 farklı canlı sukulent</li>
                      <li><strong>Kap:</strong> El yapımı cam teraryum</li>
                      <li><strong>Boyut:</strong> 20 cm yükseklik, 15 cm çap</li>
                      <li><strong>Dekor:</strong> Renkli taşlar, kum, yosun</li>
                      <li><strong>Bakım:</strong> Minimal bakım, talimatlar dahil</li>
                  </ul>
              `,
      },
      {
        id: 6,
        name: "Bonzai Ağacı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Bonzai+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Bonzai+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Bonzai+3",
        ],
        price: "₺449,99",
        shortFeatures: "Canlı bonsai, seramik saksı, bakım seti hediyeli",
        fullFeatures: `
                  <ul>
                      <li><strong>Tür:</strong> Ficus Ginseng Bonsai</li>
                      <li><strong>Yaş:</strong> 5-7 yıllık</li>
                      <li><strong>Yükseklik:</strong> 30-35 cm</li>
                      <li><strong>Saksı:</strong> El yapımı seramik bonsai saksısı</li>
                      <li><strong>Hediye:</strong> Bakım seti (makas, tel, talimatlar)</li>
                  </ul>
              `,
      },
      {
        id: 7,
        name: "Areka Palmiyesi",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Areka+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Areka+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Areka+3",
        ],
        price: "₺399,99",
        shortFeatures: "Hava temizleyici, büyük boy, dekoratif saksı",
        fullFeatures: `
                  <ul>
                      <li><strong>Tür:</strong> Areca Palm (Dypsis lutescens)</li>
                      <li><strong>Yükseklik:</strong> 100-120 cm</li>
                      <li><strong>Özellik:</strong> Hava temizleme özelliği</li>
                      <li><strong>Saksı:</strong> Dekoratif plastik veya seramik saksı</li>
                      <li><strong>Bakım:</strong> Orta seviye, bakım talimatları dahil</li>
                  </ul>
              `,
      },
      {
        id: 8,
        name: "Lilyum Buketi",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Lilyum+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Lilyum+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Lilyum+3",
        ],
        price: "₺279,99",
        shortFeatures: "Kokulu çiçekler, zarif görünüm, özel ambalaj",
        fullFeatures: `
                  <ul>
                      <li><strong>İçerik:</strong> 7 dal beyaz veya pembe lilyum</li>
                      <li><strong>Koku:</strong> Doğal hoş koku</li>
                      <li><strong>Ambalaj:</strong> Özel tasarım lüks kağıt</li>
                      <li><strong>Aksesuar:</strong> Yeşillikler ve dekoratif çiçekler</li>
                      <li><strong>Teslimat:</strong> Aynı gün teslimat (saat 14:00'e kadar)</li>
                  </ul>
              `,
      },
      {
        id: 9,
        name: "Antoryum Bitkisi",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Antoryum+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Antoryum+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Antoryum+3",
        ],
        price: "₺329,99",
        shortFeatures: "Kırmızı çiçekli, uzun ömürlü, şık saksı",
        fullFeatures: `
                  <ul>
                      <li><strong>Tür:</strong> Anthurium andraeanum</li>
                      <li><strong>Renk:</strong> Parlak kırmızı çiçekler</li>
                      <li><strong>Yükseklik:</strong> 40-50 cm</li>
                      <li><strong>Saksı:</strong> Seramik dekoratif saksı</li>
                      <li><strong>Özellik:</strong> Yıl boyu çiçek açar</li>
                      <li><strong>Bakım:</strong> Kolay bakım, talimatlar dahil</li>
                  </ul>
              `,
      },
      {
        id: 10,
        name: "Barış Çiçeği",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Baris+Cicegi+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Baris+Cicegi+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Baris+Cicegi+3",
        ],
        price: "₺189,99",
        shortFeatures: "Hava temizleyici, kolay bakım, şık görünüm",
        fullFeatures: `
                  <ul>
                      <li><strong>Tür:</strong> Spathiphyllum wallisii</li>
                      <li><strong>Yükseklik:</strong> 50-60 cm</li>
                      <li><strong>Çiçek:</strong> Beyaz çiçekli</li>
                      <li><strong>Özellik:</strong> Hava temizleme özelliği</li>
                      <li><strong>Saksı:</strong> Seramik veya plastik saksı</li>
                      <li><strong>Bakım:</strong> Kolay bakım, su göstergesi dahil</li>
                  </ul>
              `,
      },
    ]
  
    const pots = [
      {
        id: 1,
        name: "Seramik Saksı Seti",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Seramik+Saksi+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Seramik+Saksi+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Seramik+Saksi+3",
        ],
        price: "₺199,99",
        shortFeatures: "3'lü set, farklı boylar, şık tasarım",
        fullFeatures: `
                  <ul>
                      <li><strong>İçerik:</strong> 3 farklı boyda seramik saksı</li>
                      <li><strong>Malzeme:</strong> Yüksek kalite seramik</li>
                      <li><strong>Boyutlar:</strong> Küçük (10cm), Orta (15cm), Büyük (20cm)</li>
                      <li><strong>Renk:</strong> Beyaz, gri veya toprak tonları</li>
                      <li><strong>Özellik:</strong> Drenaj delikli, tabak dahil</li>
                  </ul>
              `,
      },
      {
        id: 2,
        name: "Ahşap Saksı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Ahsap+Saksi+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Ahsap+Saksi+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Ahsap+Saksi+3",
        ],
        price: "₺249,99",
        shortFeatures: "Doğal ahşap, su geçirmez kaplama, ayaklı",
        fullFeatures: `
                  <ul>
                      <li><strong>Malzeme:</strong> Doğal ahşap</li>
                      <li><strong>Kaplama:</strong> Su geçirmez özel vernik</li>
                      <li><strong>Boyut:</strong> 30cm çap, 40cm yükseklik</li>
                      <li><strong>Özellik:</strong> Ayaklı tasarım, iç saksı dahil</li>
                      <li><strong>Kullanım:</strong> İç mekan</li>
                  </ul>
              `,
      },
      {
        id: 3,
        name: "Beton Saksı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Beton+Saksi+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Beton+Saksi+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Beton+Saksi+3",
        ],
        price: "₺179,99",
        shortFeatures: "Modern tasarım, dayanıklı, iç ve dış mekan",
        fullFeatures: `
                  <ul>
                      <li><strong>Malzeme:</strong> Hafif beton karışımı</li>
                      <li><strong>Boyut:</strong> 25cm çap, 20cm yükseklik</li>
                      <li><strong>Kullanım:</strong> İç ve dış mekan</li>
                      <li><strong>Özellik:</strong> Drenaj deliği, su geçirmez</li>
                      <li><strong>Renk:</strong> Gri beton</li>
                  </ul>
              `,
      },
      {
        id: 4,
        name: "Terracotta Saksı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Terracotta+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Terracotta+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Terracotta+3",
        ],
        price: "₺149,99",
        shortFeatures: "Klasik tasarım, nefes alan malzeme, doğal görünüm",
        fullFeatures: `
                  <ul>
                      <li><strong>Malzeme:</strong> Doğal terracotta kil</li>
                      <li><strong>Boyut:</strong> 25cm çap, 22cm yükseklik</li>
                      <li><strong>Özellik:</strong> Nefes alan yapı, bitki sağlığı için ideal</li>
                      <li><strong>Kullanım:</strong> İç ve dış mekan</li>
                      <li><strong>Tabak:</strong> Uyumlu terracotta tabak dahil</li>
                  </ul>
              `,
      },
      {
        id: 5,
        name: "Metal Saksı Standı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Metal+Stand+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Metal+Stand+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Metal+Stand+3",
        ],
        price: "₺229,99",
        shortFeatures: "Modern tasarım, ayaklı, saksı dahil",
        fullFeatures: `
                  <ul>
                      <li><strong>Malzeme:</strong> Siyah metal</li>
                      <li><strong>Yükseklik:</strong> 70cm</li>
                      <li><strong>Saksı:</strong> 20cm çaplı beyaz seramik saksı dahil</li>
                      <li><strong>Kullanım:</strong> İç mekan</li>
                      <li><strong>Montaj:</strong> Kolay montaj, kurulum kılavuzu dahil</li>
                  </ul>
              `,
      },
      {
        id: 6,
        name: "Hasır Saksı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Hasir+Saksi+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Hasir+Saksi+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Hasir+Saksi+3",
        ],
        price: "₺159,99",
        shortFeatures: "Doğal hasır, bohem tarz, iç saksı dahil",
        fullFeatures: `
                  <ul>
                      <li><strong>Malzeme:</strong> Doğal hasır örgü</li>
                      <li><strong>Boyut:</strong> 30cm çap, 28cm yükseklik</li>
                      <li><strong>İç Saksı:</strong> Plastik iç saksı dahil</li>
                      <li><strong>Kullanım:</strong> İç mekan</li>
                      <li><strong>Stil:</strong> Bohem, doğal</li>
                  </ul>
              `,
      },
      {
        id: 7,
        name: "Duvar Saksısı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Duvar+Saksi+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Duvar+Saksi+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Duvar+Saksi+3",
        ],
        price: "₺189,99",
        shortFeatures: "Duvara monte, modern tasarım, bitki dahil değil",
        fullFeatures: `
                  <ul>
                      <li><strong>Malzeme:</strong> Metal ve ahşap</li>
                      <li><strong>Boyut:</strong> 25cm çap, 15cm derinlik</li>
                      <li><strong>Montaj:</strong> Duvara monte, montaj seti dahil</li>
                      <li><strong>Kullanım:</strong> İç mekan</li>
                      <li><strong>Kapasite:</strong> Küçük ve orta boy bitkiler için uygun</li>
                  </ul>
              `,
      },
      {
        id: 8,
        name: "Cam Teraryum",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Cam+Teraryum+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Cam+Teraryum+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Cam+Teraryum+3",
        ],
        price: "₺219,99",
        shortFeatures: "Geometrik tasarım, el yapımı cam, sukulentler için ideal",
        fullFeatures: `
                  <ul>
                      <li><strong>Malzeme:</strong> El yapımı cam</li>
                      <li><strong>Boyut:</strong> 20cm yükseklik, 15cm genişlik</li>
                      <li><strong>Şekil:</strong> Geometrik prizma</li>
                      <li><strong>Kullanım:</strong> Sukulentler ve kaktüsler için ideal</li>
                      <li><strong>İçerik:</strong> Bitki dahil değil</li>
                  </ul>
              `,
      },
      {
        id: 9,
        name: "Asılabilir Saksı",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Asilabilir+Saksi+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Asilabilir+Saksi+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Asilabilir+Saksi+3",
        ],
        price: "₺139,99",
        shortFeatures: "Makrome askılı, seramik saksı, tavan veya duvar montajlı",
        fullFeatures: `
                  <ul>
                      <li><strong>Malzeme:</strong> El yapımı makrome ip ve seramik saksı</li>
                      <li><strong>Saksı Boyutu:</strong> 15cm çap</li>
                      <li><strong>Toplam Uzunluk:</strong> 90cm</li>
                      <li><strong>Montaj:</strong> Tavan veya duvar kancası (dahil)</li>
                      <li><strong>Kullanım:</strong> İç mekan, sarkan bitkiler için ideal</li>
                  </ul>
              `,
      },
      {
        id: 10,
        name: "Bahçe Saksı Seti",
        images: [
          "https://via.placeholder.com/400/475F45/FFFFFF?text=Bahce+Saksi+1",
          "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Bahce+Saksi+2",
          "https://via.placeholder.com/400/343D33/FFFFFF?text=Bahce+Saksi+3",
        ],
        price: "₺349,99",
        shortFeatures: "5'li set, dayanıklı plastik, dış mekan kullanımı",
        fullFeatures: `
                  <ul>
                      <li><strong>İçerik:</strong> 5 farklı boyda bahçe saksısı</li>
                      <li><strong>Malzeme:</strong> UV korumalı dayanıklı plastik</li>
                      <li><strong>Boyutlar:</strong> 15cm'den 40cm'ye kadar çeşitli boylar</li>
                      <li><strong>Renk:</strong> Antrasit gri veya kahverengi</li>
                      <li><strong>Kullanım:</strong> Dış mekan, bahçe, teras</li>
                      <li><strong>Özellik:</strong> Drenaj delikli, hafif ve dayanıklı</li>
                  </ul>
              `,
      },
    ]
  
    // Ürünleri sayfaya ekle
    function renderProducts(productArray, containerId) {
      const container = document.querySelector(`#${containerId} .product-grid`)
      if (!container) return // Container bulunamazsa işlemi durdur
  
      container.innerHTML = ""
  
      productArray.forEach((product) => {
        const productCard = document.createElement("div")
        productCard.className = "product-card"
        productCard.innerHTML = `
                  <div class="product-header">
                      <h2 class="product-title">${product.name}</h2>
                  </div>
                  <div class="product-content">
                      <div class="slider-container" data-product-id="${product.id}">
                          <div class="slider">
                              ${product.images
                                .map(
                                  (image, index) => `
                                  <div class="slider-item">
                                      <img src="${image}" alt="${product.name} - Resim ${index + 1}" class="product-image">
                                  </div>
                              `,
                                )
                                .join("")}
                          </div>
                          <div class="slider-dots">
                              ${product.images
                                .map(
                                  (_, index) => `
                                  <button class="slider-dot ${index === 0 ? "active" : ""}" data-index="${index}"></button>
                              `,
                                )
                                .join("")}
                          </div>
                          <button class="slider-nav slider-prev"><i class="fas fa-chevron-left"></i></button>
                          <button class="slider-nav slider-next"><i class="fas fa-chevron-right"></i></button>
                          <button class="fullscreen-button" data-product-id="${product.id}" aria-label="Tam ekran görüntüle">
                              <i class="fas fa-expand"></i>
                          </button>
                      </div>
                      
                      <div class="product-details">
                          <p class="product-price">${product.price}</p>
                          
                          <div class="product-features-container">
                              <p class="product-features">${product.shortFeatures}</p>
                              <div class="product-features-full" id="features-${product.id}">
                                  ${product.fullFeatures}
                              </div>
                              <button class="features-toggle" data-target="features-${product.id}">
                                  <i class="fas fa-plus-circle"></i> Daha fazla özellik göster
                              </button>
                          </div>
                      </div>
                  </div>
                  <div class="product-footer">
                      <button class="whatsapp-button" data-product="${product.name}" data-image="${product.images[0]}">
                          <i class="fab fa-whatsapp"></i>
                          <span>Bilgi almak için tıklayın</span>
                          <i class="fas fa-arrow-right arrow"></i>
                      </button>
                  </div>
              `
        container.appendChild(productCard)
      })
  
      // Slider işlevselliğini ekle
      initializeSliders(containerId)
  
      // Ürün özellikleri toggle işlevselliği
      initializeFeatureToggles(containerId)
    }
  
    // Ürün özellikleri toggle işlevselliği
    function initializeFeatureToggles(containerId) {
      const toggleButtons = document.querySelectorAll(`#${containerId} .features-toggle`)
  
      toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const targetId = button.getAttribute("data-target")
          const targetElement = document.getElementById(targetId)
  
          if (targetElement.classList.contains("expanded")) {
            targetElement.classList.remove("expanded")
            button.innerHTML = '<i class="fas fa-plus-circle"></i> Daha fazla özellik göster'
          } else {
            targetElement.classList.add("expanded")
            button.innerHTML = '<i class="fas fa-minus-circle"></i> Daha az göster'
          }
        })
      })
    }
  
    // Slider işlevselliği
    function initializeSliders(containerId) {
      const sliders = document.querySelectorAll(`#${containerId} .slider-container`)
  
      sliders.forEach((slider) => {
        const sliderElement = slider.querySelector(".slider")
        const dots = slider.querySelectorAll(".slider-dot")
        const prevButton = slider.querySelector(".slider-prev")
        const nextButton = slider.querySelector(".slider-next")
        let currentIndex = 0
  
        // Noktalara tıklama işlevi
        dots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            currentIndex = index
            updateSlider()
          })
        })
  
        // Önceki ve sonraki butonları
        prevButton.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + dots.length) % dots.length
          updateSlider()
        })
  
        nextButton.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % dots.length
          updateSlider()
        })
  
        // Slider'ı güncelle
        function updateSlider() {
          sliderElement.style.transform = `translateX(-${currentIndex * 100}%)`
          dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex)
          })
        }
      })
    }
  
    // Tab değiştirme işlevi - Basitleştirilmiş ve düzeltilmiş
    const tabButtons = document.querySelectorAll(".category-tab")
    const tabContents = document.querySelectorAll(".tab-content")
  
    // Her bir tab butonuna tıklama olayı ekle
    document.getElementById("tab-btn-1").addEventListener("click", function () {
      showTab("tab-content-1", this)
      renderProducts(artificialProducts, "tab-content-1")
    })
  
    document.getElementById("tab-btn-2").addEventListener("click", function () {
      showTab("tab-content-2", this)
      renderProducts(liveFlowers, "tab-content-2")
    })
  
    document.getElementById("tab-btn-3").addEventListener("click", function () {
      showTab("tab-content-3", this)
      renderProducts(pots, "tab-content-3")
    })
  
    // Tab gösterme fonksiyonu
    function showTab(tabId, button) {
      // Tüm tabları gizle ve butonların aktif sınıfını kaldır
      tabContents.forEach((tab) => tab.classList.remove("active"))
      tabButtons.forEach((btn) => btn.classList.remove("active"))
  
      // Seçilen tabı göster ve butonu aktif yap
      document.getElementById(tabId).classList.add("active")
      button.classList.add("active")
  
      // Seçilen taba kaydır
      document.getElementById(tabId).scrollIntoView({ behavior: "smooth" })
    }
  
    // WhatsApp butonları için olay dinleyicileri - Fotoğraf ile birlikte
    document.addEventListener("click", (e) => {
      if (e.target.closest(".whatsapp-button")) {
        const button = e.target.closest(".whatsapp-button")
        const productName = button.getAttribute("data-product")
        const productImage = button.getAttribute("data-image")
        const message = `Merhaba, ${productName} hakkında bilgi almak istiyorum. Ürün görseli: ${productImage}`
        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/+905300725529?text=${encodedMessage}`, "_blank")
      }
    })
  
    // Tam ekran görüntüleme
    const fullscreenContainer = document.getElementById("fullscreen-container")
    const fullscreenSliderContainer = document.getElementById("fullscreen-slider-container")
    const fullscreenDots = document.getElementById("fullscreen-dots")
    const fullscreenPrev = document.getElementById("fullscreen-prev")
    const fullscreenNext = document.getElementById("fullscreen-next")
    const closeFullscreenButton = document.getElementById("close-fullscreen")
    let currentFullscreenProduct = null
    let currentFullscreenIndex = 0
  
    // Tam ekran butonlarına tıklama
    document.addEventListener("click", (e) => {
      if (e.target.closest(".fullscreen-button")) {
        const button = e.target.closest(".fullscreen-button")
        const productId = button.getAttribute("data-product-id")
        const tabContent = button.closest(".tab-content")
        let productArray
  
        // Hangi ürün dizisini kullanacağımızı belirle
        if (tabContent.id === "tab-content-1") productArray = artificialProducts
        else if (tabContent.id === "tab-content-2") productArray = liveFlowers
        else if (tabContent.id === "tab-content-3") productArray = pots
  
        // Ürünü bul
        const product = productArray.find((p) => p.id.toString() === productId)
        if (!product) return
  
        // Slider içindeki mevcut aktif resmi bul
        const sliderContainer = button.closest(".slider-container")
        const activeDotIndex = Array.from(sliderContainer.querySelectorAll(".slider-dot")).findIndex((dot) =>
          dot.classList.contains("active"),
        )
  
        // Tam ekran modunu ayarla
        setupFullscreenSlider(product, activeDotIndex >= 0 ? activeDotIndex : 0)
        fullscreenContainer.classList.add("active")
  
        // Sayfanın kaydırılmasını engelle
        document.body.classList.add("no-scroll")
      }
    })
  
    // Tam ekran slider'ı ayarla
    function setupFullscreenSlider(product, initialIndex) {
      currentFullscreenProduct = product
      currentFullscreenIndex = initialIndex
  
      // Slider içeriğini oluştur
      fullscreenSliderContainer.innerHTML = ""
      product.images.forEach((image, index) => {
        const item = document.createElement("div")
        item.className = "fullscreen-slider-item"
        item.innerHTML = `<img src="${image}" alt="${product.name} - Resim ${index + 1}">`
        fullscreenSliderContainer.appendChild(item)
      })
  
      // Noktaları oluştur
      fullscreenDots.innerHTML = ""
      product.images.forEach((_, index) => {
        const dot = document.createElement("button")
        dot.className = `fullscreen-dot ${index === initialIndex ? "active" : ""}`
        dot.setAttribute("data-index", index)
        dot.addEventListener("click", () => {
          currentFullscreenIndex = index
          updateFullscreenSlider()
        })
        fullscreenDots.appendChild(dot)
      })
  
      // Slider'ı güncelle
      updateFullscreenSlider()
    }
  
    // Tam ekran slider'ı güncelle
    function updateFullscreenSlider() {
      fullscreenSliderContainer.style.transform = `translateX(-${currentFullscreenIndex * 100}%)`
      const dots = fullscreenDots.querySelectorAll(".fullscreen-dot")
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentFullscreenIndex)
      })
    }
  
    // Önceki ve sonraki butonları
    fullscreenPrev.addEventListener("click", () => {
      if (!currentFullscreenProduct) return
      currentFullscreenIndex =
        (currentFullscreenIndex - 1 + currentFullscreenProduct.images.length) % currentFullscreenProduct.images.length
      updateFullscreenSlider()
    })
  
    fullscreenNext.addEventListener("click", () => {
      if (!currentFullscreenProduct) return
      currentFullscreenIndex = (currentFullscreenIndex + 1) % currentFullscreenProduct.images.length
      updateFullscreenSlider()
    })
  
    // Tam ekranı kapat
    closeFullscreenButton.addEventListener("click", () => {
      fullscreenContainer.classList.remove("active")
      // Sayfanın kaydırılmasını tekrar etkinleştir
      document.body.classList.remove("no-scroll")
    })
  
    fullscreenContainer.addEventListener("click", (e) => {
      if (e.target === fullscreenContainer) {
        fullscreenContainer.classList.remove("active")
        // Sayfanın kaydırılmasını tekrar etkinleştir
        document.body.classList.remove("no-scroll")
      }
    })
  
    // Sayfa yüklendiğinde tüm kategorileri yükle
    // Bu kısmı kaldırıyorum çünkü iç içe DOMContentLoaded olayı var
    // document.addEventListener("DOMContentLoaded", () => {
    //   // İlk tab'ı göster
    //   document.getElementById("tab-btn-1").click()
    //
    //   // Diğer kategorileri de arka planda yükle
    //   renderProducts(liveFlowers, "tab-content-2")
    //   renderProducts(pots, "tab-content-3")
    // })
  
    // Sayfa yüklendiğinde ilk tab'ı göster
    document.getElementById("tab-btn-1").click()
  })