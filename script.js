// Logo slider
const logoSlider = function () {
  const sliderLogoContainer = document.querySelector(".slider__wrapper");
  const slidesLogos = document.querySelectorAll(".slide-logo");
  const btnNextLogo = document.querySelector(".btn-slider-logo--next");
  const btnPrevLogo = document.querySelector(".btn-slider-logo--prev");

  const slideLogosArr = Array.from(slidesLogos);
  const firstProduct = slideLogosArr[0];
  const firstElStyle = window.getComputedStyle(firstProduct);
  const elMarginRight = parseInt(firstElStyle.marginRight, 10);
  const elWidth = firstProduct.getBoundingClientRect().width;
  const firstProductWidth = elWidth + elMarginRight;

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
};
logoSlider();

// testimonial slider
const sliderTestimonial = function () {
  const slideTestimonials = Array.from(
    document.querySelectorAll(".testimonial-img")
  );
  const btnNextTestimonial = document.querySelector(
    ".btn-slider-testimonial--next"
  );
  const btnPrevTestimonial = document.querySelector(
    ".btn-slider-testimonial--prev"
  );

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

const handleMobileNav = function () {
  // Navigation btns
  const headerMobNavBtn = document.querySelector(".nav-header__icon");
  const footerMobNavBtn = document.querySelector(".footer__nav-icon");

  // header nav
  headerMobNavBtn.addEventListener("click", function () {
    document
      .querySelector(".nav-header__list")
      .classList.toggle("active-nav-header");
  });

  // footer nav
  footerMobNavBtn.addEventListener("click", function () {
    document
      .querySelector(".footer__nav-list")
      .classList.toggle("active-nav-footer");
  });
};
handleMobileNav();

const expertiseVideoHandler = function () {
  const expertiseVidContainer = document.querySelector(".expertise__video-box");
  const modalContainer = document.querySelector(".modal-outer");
  const modalBtn = document.querySelector(".modal__btn");
  const modalVideo = document.querySelector(".modal__video iframe");
  const modalTitle = document.querySelector(".modal__title");

  const removeActive = function () {
    modalContainer.classList.remove("modal-outer--active");
    modalVideo.src = "";
  };

  modalBtn.addEventListener("click", removeActive);

  const modalHandler = function (e) {
    modalContainer.classList.add("modal-outer--active");

    const videoThumb = e.target.closest(".expertise__video");
    const videoTitle = videoThumb.querySelector(
      ".expertise__video-title"
    ).textContent;

    const premiumVideo =
      "https://player.vimeo.com/video/332541254?h=72cfa9c4a4&title=0&byline=0&portrait=0";

    const onLocationVideo =
      "https://player.vimeo.com/video/219714938?h=b10f1ef9d2&title=0&byline=0&portrait=0";

    const animationVideo =
      "https://player.vimeo.com/video/542740225?h=0d4be914ae&title=0&byline=0&portrait=0";

    const editOnlyVideo =
      "https://player.vimeo.com/video/435851889?h=bfcbe32e87&title=0&byline=0&portrait=0";

    const studioMembershipsVideo =
      "https://player.vimeo.com/video/266212936?h=627b13cdb1&title=0&byline=0&portrait=0";

    const liveStreamsVideo =
      "https://player.vimeo.com/video/391046579?h=95dc9684cb&title=0&byline=0&portrait=0";

    if (videoThumb) {
      if (videoTitle === "Premium") {
        modalTitle.textContent = "Premium";
        modalVideo.src = premiumVideo;
      }
      if (videoTitle === "On-Location") {
        modalTitle.textContent = "On-Location";
        modalVideo.src = onLocationVideo;
      }
      if (videoTitle === "Animation") {
        modalTitle.textContent = "Animation";
        modalVideo.src = animationVideo;
      }
      if (videoTitle === "Edit-Only") {
        modalTitle.textContent = "Edit-Only";
        modalVideo.src = editOnlyVideo;
      }
      if (videoTitle === "Studio Memberships") {
        modalTitle.textContent = "Studio Memberships";
        modalVideo.src = studioMembershipsVideo;
      }
      if (videoTitle === "Livestreams") {
        modalTitle.textContent = "livestreams";
        modalVideo.src = liveStreamsVideo;
      }
    }
  };

  expertiseVidContainer.addEventListener("click", modalHandler);
};
expertiseVideoHandler();
