import Swiper from 'swiper';
import { Navigation, Pagination, Parallax } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Parallax]); // 👈 Add Parallax here

export default function initSwiperSlider() {
    var portfolioSwiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 600,
        navigation: {
          nextEl: '.portfolio__next',
          prevEl: '.portfolio__prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        keyboard: {
          enabled: true,
        },
        mousewheel: {
          enabled: false,
        },
        grabCursor: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        effect: 'slide',
        parallax: true,
      });

    var testimonials_slider  = new Swiper('.swiper-slider-testimonials-slider', {
      direction: 'horizontal',
      slidesPerView: 2.8,
      spaceBetween: 30,
      navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        enabled: false,
      },
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: 'slide',
      parallax: true,
    });
}
