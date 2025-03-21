// Ürünlerin her kategorisi için veriler
const liveFlowers = [
    { image: "1.jpg", title: "Canlı Çiçek 1", description: "Canlı çiçek 1 hakkında detaylı bilgi burada olacak." },
    { image: "1.jpg", title: "Canlı Çiçek 2", description: "Canlı çiçek 2 hakkında detaylı bilgi burada olacak." },
    { image: "1.jpg", title: "Canlı Çiçek 3", description: "Canlı çiçek 2 hakkında detaylı bilgi burada olacak." },
    { image: "1.jpg", title: "Canlı Çiçek 4", description: "Canlı çiçek 2 hakkında detaylı bilgi burada olacak." },
    { image: "1.jpg", title: "Canlı Çiçek 5", description: "Canlı çiçek 2 hakkında detaylı bilgi burada olacak." },
    { image: "1.jpg", title: "Canlı Çiçek 6", description: "Canlı çiçek 2 hakkında detaylı bilgi burada olacak." },
    { image: "1.jpg", title: "Canlı Çiçek 7", description: "Canlı çiçek 2 hakkında detaylı bilgi burada olacak." },
    { image: "1.jpg", title: "Canlı Çiçek 8", description: "Canlı çiçek 2 hakkında detaylı bilgi burada olacak." },
    { image: "1.jpg", title: "Canlı Çiçek 9", description: "Canlı çiçek 2 hakkında detaylı bilgi burada olacak." },
    { image: "1.jpg", title: "Canlı Çiçek 10", description: "Canlı çiçek 3 hakkında detaylı bilgi burada olacak." }
];

const pots = [
    { image: "img/saksi1.jpg", title: "Saksı 1", description: "Saksı 1 hakkında detaylı bilgi burada olacak." },
    { image: "img/saksi2.jpg", title: "Saksı 2", description: "Saksı 2 hakkında detaylı bilgi burada olacak." },
    { image: "img/saksi3.jpg", title: "Saksı 3", description: "Saksı 3 hakkında detaylı bilgi burada olacak." }
];

const artificialFlowers = [
    { image: "img/yapay1.jpg", title: "Yapay Çiçek 1", description: "Yapay çiçek 1 hakkında detaylı bilgi burada olacak." },
    { image: "img/yapay2.jpg", title: "Yapay Çiçek 2", description: "Yapay çiçek 2 hakkında detaylı bilgi burada olacak." },
    { image: "img/yapay3.jpg", title: "Yapay Çiçek 3", description: "Yapay çiçek 3 hakkında detaylı bilgi burada olacak." }
];

// Div açma
function openTab(tabIndex) {
    document.querySelectorAll(".flowers-y").forEach((div) => div.classList.remove("active"));
    const targetDiv = document.getElementById(`flowers-${tabIndex}`);
    targetDiv.classList.add("active");

    // İlgili div'e kaydırma işlemi
    targetDiv.scrollIntoView({ behavior: "smooth" });
}

// Ürünleri yükleme
function loadProducts(products, containerId) {
    const container = document.getElementById(containerId);
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" class="product-image" alt="${product.title}">
                <div class="fullscreen-icon" onclick="openFullscreen('${product.image}')"></div>
                <div class="watsapp-icon" onclick="sendToWhatsApp('${product.title}')"></div>
            </div>
            <div class="product-title">${product.title}</div>
            <div class="product-description">${product.description}</div>
            <button class="show-more">Devamını Gör</button>
        `;

        const showMoreButton = productCard.querySelector('.show-more');
        showMoreButton.addEventListener('click', () => {
            productCard.classList.toggle('expanded');
            showMoreButton.textContent = productCard.classList.contains('expanded') ? 'Gizle' : 'Devamını Gör';
        });

        container.appendChild(productCard);
    });
}

// WhatsApp mesajı gönderme
function sendToWhatsApp(productTitle) {
    const message = `Merhaba, ${productTitle} adlı ürün hakkında bilgi almak istiyorum.`;
    const whatsappLink = `https://wa.me/1122334455?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

// Tam ekran görünüme alma
function openFullscreen(imageSrc) {
    const fullscreen = document.createElement('div');
    fullscreen.classList.add('fullscreen');
    fullscreen.innerHTML = `
        <img src="${imageSrc}" alt="Fullscreen Image">
        <button onclick="closeFullscreen()" style="position: absolute; top: 10px; right: 10px; background: rgba(255, 0, 0, 0.7); color: white; border: none; border-radius: 50%; padding: 10px; cursor: pointer;">X</button>
    `;
    document.body.appendChild(fullscreen);

    // Ekran kaydırmayı engelle
    document.body.style.overflow = 'hidden';
}

// Tam ekranı kapatma
function closeFullscreen() {
    document.querySelector('.fullscreen').remove();
    document.body.style.overflow = ''; // Kaydırmayı tekrar etkinleştir
}

// Başlangıçta ürünleri yükleme
document.addEventListener('DOMContentLoaded', () => {
    loadProducts(liveFlowers, 'products-container-1');
    loadProducts(pots, 'products-container-2');
    loadProducts(artificialFlowers, 'products-container-3');
});
