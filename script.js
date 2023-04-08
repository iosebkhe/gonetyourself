// const sliderWrapper = document.querySelector(".slider__wrapper");
// const sliderButtonPrev = document.querySelector(".slider__button-prev");
// const sliderButtonNext = document.querySelector(".slider__button-next");
// const slideWidth = sliderWrapper.clientWidth / 3; // adjust for number of visible slides
// let currentSlide = 0;

// function moveSlider() {
//   sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
// }

// function nextSlide() {
//   currentSlide++;
//   if (currentSlide >= sliderWrapper.children.length - 2) {
//     // adjust for number of visible slides
//     currentSlide = 0;
//   }
//   moveSlider();
// }

// function prevSlide() {
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = sliderWrapper.children.length - 3; // adjust for number of visible slides
//   }
//   moveSlider();
// }

// sliderButtonNext.addEventListener("click", nextSlide);
// sliderButtonPrev.addEventListener("click", prevSlide);

// setInterval(nextSlide, 2000);
