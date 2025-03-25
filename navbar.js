// Mobil menü işlevselliği
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle")
  const navMenu = document.getElementById("nav-menu")
  const menuOverlay = document.getElementById("menu-overlay")
  const body = document.body

  // Menü açma/kapama işlevi
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      navMenu.classList.toggle("active")
      menuOverlay.classList.toggle("active")
      body.classList.toggle("menu-open") // Menü açıkken body'e sınıf ekle

      // Menü açıkken sayfanın kaydırılmasını engelle
      if (navMenu.classList.contains("active")) {
        body.style.overflow = "hidden"
      } else {
        body.style.overflow = ""
      }
    })
  }

  // Overlay'e tıklandığında menüyü kapat
  if (menuOverlay) {
    menuOverlay.addEventListener("click", () => {
      menuToggle.classList.remove("active")
      navMenu.classList.remove("active")
      menuOverlay.classList.remove("active")
      body.classList.remove("menu-open") // Menü kapandığında body'den sınıfı kaldır
      body.style.overflow = ""
    })
  }

  // Menü öğelerine tıklandığında menüyü kapat
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active")
      navMenu.classList.remove("active")
      menuOverlay.classList.remove("active")
      body.classList.remove("menu-open") // Menü kapandığında body'den sınıfı kaldır
      body.style.overflow = ""
    })
  })

  // Aktif menü öğesini işaretle
  const currentLocation = window.location.href
  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href")
    if (currentLocation.includes(linkHref) && linkHref !== "#") {
      link.classList.add("active")
    }
  })
})

