// Auto-rotating hero slideshow with dot navigation
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let current = 0;
let sliderTimer;

function goToSlide(idx) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = idx;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function nextSlide() {
  goToSlide((current + 1) % slides.length);
}

function startSlider() {
  sliderTimer = setInterval(nextSlide, 5000);
}

// Manual dot click pauses and restarts auto-advance
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(sliderTimer);
    goToSlide(parseInt(dot.dataset.idx));
    startSlider();
  });
});

startSlider();
