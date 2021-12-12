document.addEventListener('DOMContentLoaded', function() {
  const offersSwiper = document.querySelector('.section-offers__slider');

  const swiper = new Swiper(offersSwiper, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5.3,
    slidesPerGroup: 2,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})
