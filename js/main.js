const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,



  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

 
});

new Swiper('.drink-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,



  // Navigation arrows
  navigation: {
    nextEl: '.food-button-next',
    prevEl: '.food-button-prev',
  },

 
});

