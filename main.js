document.addEventListener("DOMContentLoaded", () => {
  // Slider işlevselliği
  const slider = document.getElementById("slider")
  const slides = document.querySelectorAll(".slide")
  const dotsContainer = document.getElementById("slider-dots")

  let currentIndex = 0
  let startX
  let touchStartTime
  let touchEndTime

  // Slider noktalarını oluştur
  slides.forEach((_, index) => {
    const dot = document.createElement("div")
    dot.classList.add("dot")
    if (index === 0) dot.classList.add("active")
    dot.addEventListener("click", () => goToSlide(index))
    dotsContainer.appendChild(dot)
  })

  const dots = document.querySelectorAll(".dot")

  // Slider navigation arrows
  const prevButton = document.getElementById("slider-prev")
  const nextButton = document.getElementById("slider-next")

  // Add click events to arrows
  prevButton.addEventListener("click", () => {
    clearInterval(slideInterval)
    prevSlide()
    slideInterval = setInterval(nextSlide, 5000)
  })

  nextButton.addEventListener("click", () => {
    clearInterval(slideInterval)
    nextSlide()
    slideInterval = setInterval(nextSlide, 5000)
  })

  // Add hover effect to pause auto-sliding
  slider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval)
  })

  slider.addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 5000)
  })

  // Slider'ı belirli bir slide'a götür
  function goToSlide(index) {
    currentIndex = index
    slider.style.transform = `translateX(-${currentIndex * 100}%)`
    updateDots()
  }

  // Slider noktalarını güncelle
  function updateDots() {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active")
      } else {
        dot.classList.remove("active")
      }
    })
  }

  // Sonraki slide'a geç
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length
    goToSlide(currentIndex)
  }

  // Önceki slide'a geç
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    goToSlide(currentIndex)
  }

  // Otomatik slider
  let slideInterval = setInterval(nextSlide, 5000)

  // Dokunmatik olayları
  slider.addEventListener(
    "touchstart",
    (e) => {
      clearInterval(slideInterval)
      startX = e.touches[0].clientX
      touchStartTime = new Date().getTime()
    },
    { passive: true },
  )

  slider.addEventListener(
    "touchmove",
    (e) => {
      if (!startX) return

      const currentX = e.touches[0].clientX
      const diff = startX - currentX
      const slideWidth = slider.clientWidth

      // Kaydırma sırasında slider'ı hareket ettir (sınırlı miktarda)
      const translateX = -currentIndex * 100 - (diff / slideWidth) * 100

      // Sınırları kontrol et
      if (translateX <= 0 && translateX >= -((slides.length - 1) * 100)) {
        slider.style.transform = `translateX(${translateX}%)`
      }
    },
    { passive: true },
  )

  slider.addEventListener(
    "touchend",
    (e) => {
      if (!startX) return

      touchEndTime = new Date().getTime()
      const touchDuration = touchEndTime - touchStartTime

      const currentX = e.changedTouches[0].clientX
      const diff = startX - currentX
      const slideWidth = slider.clientWidth

      // Hızlı kaydırma için daha az mesafe gerekir
      const threshold = touchDuration < 250 ? slideWidth * 0.1 : slideWidth * 0.3

      if (diff > threshold) {
        nextSlide()
      } else if (diff < -threshold) {
        prevSlide()
      } else {
        // Eşik değerini geçmezse mevcut slide'a geri dön
        goToSlide(currentIndex)
      }

      startX = null
      slideInterval = setInterval(nextSlide, 5000)
    },
    { passive: true },
  )

  // Fare olayları
  slider.addEventListener("mousedown", (e) => {
    clearInterval(slideInterval)
    startX = e.clientX
    touchStartTime = new Date().getTime()

    // Sürükleme sırasında metin seçimini engelle
    e.preventDefault()
  })

  slider.addEventListener("mousemove", (e) => {
    if (!startX) return

    const currentX = e.clientX
    const diff = startX - currentX
    const slideWidth = slider.clientWidth

    // Kaydırma sırasında slider'ı hareket ettir (sınırlı miktarda)
    const translateX = -currentIndex * 100 - (diff / slideWidth) * 100

    // Sınırları kontrol et
    if (translateX <= 0 && translateX >= -((slides.length - 1) * 100)) {
      slider.style.transform = `translateX(${translateX}%)`
    }
  })

  slider.addEventListener("mouseup", (e) => {
    if (!startX) return

    touchEndTime = new Date().getTime()
    const touchDuration = touchEndTime - touchStartTime

    const currentX = e.clientX
    const diff = startX - currentX
    const slideWidth = slider.clientWidth

    // Hızlı kaydırma için daha az mesafe gerekir
    const threshold = touchDuration < 250 ? slideWidth * 0.1 : slideWidth * 0.3

    if (diff > threshold) {
      nextSlide()
    } else if (diff < -threshold) {
      prevSlide()
    } else {
      // Eşik değerini geçmezse mevcut slide'a geri dön
      goToSlide(currentIndex)
    }

    startX = null
    slideInterval = setInterval(nextSlide, 5000)
  })

  // Fare sürüklemesi sırasında sayfadan çıkılırsa
  document.addEventListener("mouseup", () => {
    if (startX) {
      goToSlide(currentIndex)
      startX = null
      slideInterval = setInterval(nextSlide, 5000)
    }
  })

  // WhatsApp sipariş butonları için dinamik ürün bilgisi
  const whatsappButtons = document.querySelectorAll(".product-card .btn-whatsapp-small")

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Ürün kartını bul
      const productCard = this.closest(".product-card")

      // Ürün adını ve fiyatını al
      const productName = productCard.querySelector("h3").textContent
      const productPrice = productCard.querySelector(".price").textContent

      // Ürün görselinin URL'sini al
      const productImageUrl = productCard.querySelector(".product-image img").src

      // WhatsApp mesajını oluştur
      const message = `${productName} ürünü hakkında bilgi almak istiyorum. Fiyat: ${productPrice}. Görsel: ${productImageUrl}`

      // Mevcut href'i al ve mesaj kısmını güncelle
      const currentHref = this.getAttribute("href")
      const baseUrl = currentHref.split("?")[0]
      const newHref = `${baseUrl}?text=${encodeURIComponent(message)}`

      // Yeni href'i ayarla
      this.setAttribute("href", newHref)
    })
  })

  // Back to Top Button
  const backToTopButton = document.getElementById("back-to-top")

  // Sayfa kaydırıldığında butonun opaklığını dinamik olarak ayarla
  window.addEventListener("scroll", () => {
    // Sayfanın ne kadar aşağı kaydırıldığını al
    const scrollPosition = window.pageYOffset

    // Maksimum scroll değeri (sayfanın yüksekliği - görünür pencere yüksekliği)
    const maxScroll = document.body.scrollHeight - window.innerHeight

    // Scroll pozisyonuna göre opaklık hesapla (0.2 ile 1 arasında)
    // Minimum 0.2 opaklık veriyoruz ki tamamen kaybolmasın
    let opacity = 0.2 + scrollPosition / 1000

    // Opaklığı 1'den fazla olmaması için sınırla
    opacity = Math.min(opacity, 1)

    if (scrollPosition > 100) {
      // Butonu görünür yap ve opaklığını ayarla
      backToTopButton.classList.add("visible")
      backToTopButton.style.opacity = opacity
    } else {
      // Scroll pozisyonu çok yukarıdaysa butonu gizle
      backToTopButton.classList.remove("visible")
    }
  })

  // Butona tıklandığında sayfanın en üstüne kaydır
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Scroll Reveal Animasyonları
  // Intersection Observer API kullanarak elementlerin görünür olup olmadığını kontrol ediyoruz
  const observerOptions = {
    root: null, // viewport'u kullan
    rootMargin: "0px",
    threshold: 0.15, // elementin %15'i görünür olduğunda tetikle
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element görünür olduğunda active sınıfını ekle
        entry.target.classList.add("active")
        // Bir kez göründükten sonra gözlemlemeyi bırak
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Animasyon uygulanacak tüm elementleri seç ve observer'a ekle
  const revealElements = document.querySelectorAll(".reveal-section, .reveal-left, .reveal-right, .reveal-scale")
  revealElements.forEach((element) => {
    observer.observe(element)
  })
})

