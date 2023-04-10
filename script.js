const sliderLogoContainer = document.querySelector(".slider__wrapper");
const slidesLogos = document.querySelectorAll(".slide-logo");
const btnNextLogo = document.querySelector(".btn-slider-logo--next");
const btnPrevLogo = document.querySelector(".btn-slider-logo--prev");

const slideLogosArr = Array.from(slidesLogos);
const firstProduct = slideLogosArr[0];
const firstProductWidth = 222;
console.dir(firstProduct);
console.log(firstProductWidth);

function scrollSlider(forward) {
  if (forward) {
    sliderLogoContainer.scrollLeft += firstProductWidth;
    if (
      sliderLogoContainer.scrollLeft + sliderLogoContainer.clientWidth >=
      sliderLogoContainer.scrollWidth
    ) {
      sliderLogoContainer.scrollLeft = 0; // scroll back to the first slide logo
    }
  } else {
    sliderLogoContainer.scrollLeft -= firstProductWidth;
    if (sliderLogoContainer.scrollLeft <= 0) {
      sliderLogoContainer.scrollLeft =
        sliderLogoContainer.scrollWidth - sliderLogoContainer.clientWidth; // scroll to the last slide logo
    }
  }
}

btnNextLogo.addEventListener("click", function () {
  scrollSlider(true);
});

btnPrevLogo.addEventListener("click", function () {
  scrollSlider(false);
});

const sliderTestimonialContainer = document.querySelector(
  ".testimonials__wrapper"
);
const slideTestimonials = Array.from(
  document.querySelectorAll(".testimonial-img")
);
const btnNextTestimonial = document.querySelector(
  ".btn-slider-testimonial--next"
);
const btnPrevTestimonial = document.querySelector(
  ".btn-slider-testimonial--prev"
);

// navigation buttons
const headerMobNavBtn = document.querySelector(".nav-header__icon");
const footerMobNavBtn = document.querySelector(".footer__nav-icon");

// logo slider
const slider = function () {
  let currentSlide = 0;
  const maxSlide = slidesLogos.length;

  /////////////functions

  //default slide
  const goToSlide = function (slide) {
    slidesLogos.forEach(function (s, index) {
      s.style.transform = `translateX(${50 * (index - slide)}%)`;
    });
  };

  //going next slide
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
  };

  //going prev slide
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
  };

  goToSlide(0);

  //Event handlers
  btnNextLogo.addEventListener("click", nextSlide);
  btnPrevLogo.addEventListener("click", prevSlide);
};
// slider();

// testimonial slider
const sliderTestimonial = function () {
  let currentSlide = 0;
  const maxSlide = slideTestimonials.length;

  /////////////functions

  //default slide
  const goToSlide = function (slide) {
    slideTestimonials.forEach(function (s, index) {
      s.style.transform = `translateX(${100 * (index - slide)}%)`;
    });
  };

  //going next slide
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
  };

  //going prev slide
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
  };

  goToSlide(0);

  //Event handlers
  btnNextTestimonial.addEventListener("click", nextSlide);
  btnPrevTestimonial.addEventListener("click", prevSlide);
};
sliderTestimonial();

// mobile navigation bar handling
headerMobNavBtn.addEventListener("click", function () {
  document
    .querySelector(".nav-header__list")
    .classList.toggle("active-nav-header");
});
footerMobNavBtn.addEventListener("click", function () {
  document
    .querySelector(".footer__nav-list")
    .classList.toggle("active-nav-footer");
});
