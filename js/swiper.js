//Initialize Swiper -->


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      423: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      680: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      920: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1240: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    } 
  });