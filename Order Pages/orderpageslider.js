let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Reset index if it goes out of bounds
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Move the slides container
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Change slide on button click
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto change slide every 3 seconds (optional)
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);




