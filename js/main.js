const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4,
      },
      1100: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      },
    
    },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

const recomended = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
   breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 2,
      },
      
      
    },



  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

 
});

const drinkslider = new Swiper('.drink-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4,
      },
      1100: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      },
    
    },
  



  // Navigation arrows
  navigation: {
    nextEl: '.food-button-next',
    prevEl: '.food-button-prev',
  },

 
});

const searchBtm = document.querySelector('.mobile__search');
const mobileSearch = document.querySelector('.input-group');
searchBtm.addEventListener('click', () => {
mobileSearch.classList.toggle('is-open');

});

if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  recomended.destroy();
  drinkslider.destroy();
}
