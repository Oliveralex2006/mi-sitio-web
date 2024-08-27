let currentIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;
    
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 100; // 100% para mover al siguiente slide
    
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
