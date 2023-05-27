import Swiper, {
  Navigation,
  Pagination,
  FreeMode,
  EffectFade,
  Controller,
  Thumbs,
} from 'swiper';
import { gsap } from 'gsap/dist/gsap.js';
import AOS from 'aos';

// (gist - b47008824b0175d587f9acbc51892319)

export const anchors = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export const burger = () => {
  if (document.querySelector('.header-body__burger')) {
    const openBtn = document.querySelector('.header-body__burger');
    const header = document.querySelector('.header');
    const menu = document.querySelector('.header-body__menu');
    const body = document.querySelector('body');

    let toggleBurger = () => {
      if (openBtn.classList.contains('active')) {
        openBtn.classList.remove('active');
        menu.classList.remove('active');
        header.classList.remove('active');
        body.classList.remove('lock');
      } else {
        openBtn.classList.add('active');
        menu.classList.add('active');
        header.classList.add('active');
        body.classList.add('lock');
      }
    };

    openBtn.addEventListener('click', toggleBurger);
  }
};

export const indexMainSlider = () => {
  if (document.querySelector('#main-slider')) {
    const swiperBg = new Swiper('#main-slider', {
      modules: [Navigation, Controller],
      spaceBetween: 0,
      slidesPerView: 1,
      speed: 800,
      loop: true,
    });
    const swiperLink = new Swiper('#main-slider-link', {
      modules: [Navigation, EffectFade, Controller],
      spaceBetween: 0,
      slidesPerView: 1,
      effect: 'fade',
      allowTouchMove: false,
      speed: 800,
      loop: true,
    });
    const swiperText = new Swiper('#main-slider-text', {
      modules: [Navigation, EffectFade, Controller],
      spaceBetween: 50,
      slidesPerView: 1,
      effect: 'fade',
      autoHeight: true,
      speed: 800,
      loop: true,
      navigation: {
        prevEl: '.main-body__btns-prev',
        nextEl: '.main-body__btns-next',
      },
    });

    swiperText.controller.control = swiperBg;
    swiperBg.controller.control = swiperLink;
  }
};

export const indexWeCreateSlider = () => {
  if (document.querySelector('#wecreate-slider')) {
    const swiper = new Swiper('#wecreate-slider', {
      modules: [Navigation],
      spaceBetween: 24,
      slidesPerView: 'auto',
      speed: 800,
      loop: false,
      autoHeight: true,
      navigation: {
        prevEl: '.wecreate-body__navigation-prev',
        nextEl: '.wecreate-body__navigation-next',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1280: {
          spaceBetween: 110,
        },
      },
    });
  }
};

export const indexPartnersSlider = () => {
  if (document.querySelector('.partners-body__slider')) {
    const swiper = new Swiper('#partners-slider-1', {
      modules: [Navigation],
      spaceBetween: 4,
      slidesPerView: 'auto',
      speed: 800,
      loop: false,
      autoHeight: true,
      navigation: {
        prevEl: '.partners-slider-1-prev',
        nextEl: '.partners-slider-1-next',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });
    const swiper2 = new Swiper('#partners-slider-2', {
      modules: [Navigation],
      spaceBetween: 4,
      slidesPerView: 'auto',
      speed: 800,
      loop: false,
      autoHeight: true,
      navigation: {
        prevEl: '.partners-slider-2-prev',
        nextEl: '.partners-slider-2-next',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });
  }
};

export const indexPartnersTrustSlider = () => {
  if (document.querySelector('#partners-slider-trust')) {
    const swiper = new Swiper('#partners-slider-trust', {
      modules: [Navigation],
      spaceBetween: 4,
      slidesPerView: 'auto',
      speed: 800,
      loop: false,
      autoHeight: true,
      navigation: {
        prevEl: '.partners-trust-prev',
        nextEl: '.partners-trust-next',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });
  }
};

export const indexPartnersTabs = () => {
  var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    });
  });
};

export const indexHistorySlider = () => {
  if (document.querySelector('.history-body__info')) {
    let swiperYears = new Swiper('.history-body__years', {
      modules: [Navigation, Thumbs],
      spaceBetween: 20,
      slidesPerView: 'auto',
      speed: 400,
      loop: false,
      autoHeight: true,
      watchSlidesProgress: true,

      breakpoints: {
        1200: {
          spaceBetween: 30,
        },
      },
    });
    let swiper = new Swiper('.history-body__info', {
      modules: [Navigation, Thumbs],
      spaceBetween: 40,
      slidesPerView: 1,
      speed: 400,
      loop: false,
      autoHeight: true,
      navigation: {
        prevEl: '.history-body__info-prev',
        nextEl: '.history-body__info-next',
      },
      thumbs: {
        swiper: swiperYears,
      },
    });
  }
};

export const indexPartnersLogosSlider = () => {
  if (document.querySelector('.partners-logos__slider-con')) {
    let swiper = new Swiper('.partners-logos__slider-con', {
      modules: [Navigation, Thumbs],
      spaceBetween: 0,
      slidesPerView: 1,
      speed: 400,
      loop: false,
      watchSlidesProgress: true,

      navigation: {
        prevEl: '.partners-logos__slider-prev',
        nextEl: '.partners-logos__slider-next',
      },

      breakpoints: {
        767: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  }
};

export const aboutMissionSlider = () => {
  if (document.querySelector('#about-mission-slider')) {
    const swiper = new Swiper('#about-mission-slider', {
      modules: [Navigation],
      spaceBetween: 24,
      slidesPerView: 'auto',
      speed: 800,
      loop: false,
      autoHeight: true,
      navigation: {
        prevEl: '.mission-body__navigation-prev',
        nextEl: '.mission-body__navigation-next',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 78,
        },
      },
    });
  }
};

export const aboutCompanySlider = () => {
  if (document.querySelector('.about_company-projects__img')) {
    let swiperYears = new Swiper('.about_company-projects__years', {
      modules: [Navigation, Thumbs],
      spaceBetween: 20,
      slidesPerView: 'auto',
      speed: 400,
      loop: false,
      autoHeight: true,
      watchSlidesProgress: true,

      breakpoints: {
        850: {
          spaceBetween: 32,
        },
        1200: {
          spaceBetween: 72,
        },
      },
    });
    let swiper = new Swiper('.about_company-projects__img', {
      modules: [Navigation, Thumbs],
      spaceBetween: 5,
      slidesPerView: 1,
      speed: 400,
      loop: false,
      navigation: {
        prevEl: '.about_company-nav__arrows-prev',
        nextEl: '.about_company-nav__arrows-next',
      },
      thumbs: {
        swiper: swiperYears,
      },
    });
  }
};

export const aboutValuesSlider = () => {
  if (document.querySelector('.about_values-body__text-slider')) {
    let swiper = new Swiper('.about_values-body__text-slider', {
      modules: [Navigation],
      spaceBetween: 40,
      slidesPerView: 1,
      speed: 400,
      loop: false,
      autoHeight: true,
      navigation: {
        prevEl: '.about_values-body__nav-prev',
        nextEl: '.about_values-body__nav-next',
      },
    });
  }
};

export const teamTeamSlider = () => {
  if (document.querySelector('.team_team-body')) {
    const prevBtn = document.querySelector('.team_team-slider-mobile-prev');
    const nextBtn = document.querySelector('.team_team-slider-mobile-next');

    const checkAllowBtn = (swiper) => {
      if (swiper.activeIndex === 0) {
        prevBtn.classList.add('_lock');
      } else {
        prevBtn.classList.remove('_lock');
      }

      if (swiper.isEnd) {
        nextBtn.classList.add('_lock');
      } else {
        nextBtn.classList.remove('_lock');
      }
    };

    let swiper = new Swiper('.team_team-body', {
      modules: [Navigation],
      spaceBetween: 24,
      slidesPerView: 1,
      speed: 400,
      loop: false,
      autoHeight: true,
      navigation: {
        prevEl: '.team_team-slider-desktop-prev',
        nextEl: '.team_team-slider-desktop-next',
      },
      breakpoints: {
        600: {
          spaceBetween: 24,
          slidesPerView: 2,
        },
        767: {
          spaceBetween: 24,
          slidesPerView: 3,
        },
        992: {
          spaceBetween: 24,
          slidesPerView: 4,
        },
        1200: {
          spaceBetween: 58,
          slidesPerView: 4,
        },
      },
      on: {
        init: (swiper) => {
          checkAllowBtn(swiper);
        },
        slideChange: (swiper) => {
          checkAllowBtn(swiper);
        },
      },
    });

    prevBtn.addEventListener('click', () => {
      swiper.slidePrev();
    });
    nextBtn.addEventListener('click', () => swiper.slideNext());
  }
};

export const preloader = () => {
  if (document.querySelector('.preloader')) {
    let preloader = document.querySelector('.preloader');
    let body = document.querySelector('body');
    body.classList.add('lock');

    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        body.classList.remove('lock');
      }, 1500);
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 2800);
      function counter(ms, className) {
        let counter = 0;
        let interval = setInterval(() => {
          document.querySelector(className).innerHTML = `${++counter} %`;
          counter === 100 ? clearInterval(interval) : false;
        }, ms);
      }
      counter(10, '.preloader-body__percents');

      gsap.to('.preloader-body__percents', { color: '#131411', duration: 1.5 });
      gsap.to('.preloader-body__logo-light', {
        width: '100%',
        opacity: 1,
        duration: 1.5,
        delay: -1.5,
      });
      gsap.to('.preloader-body__logo-light', {
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.1,
        delay: 0.35,
      });
      gsap.to('.preloader', {
        scale: 6,
        duration: 2.5,
        delay: 1.5,
      });
      gsap.to('.preloader', {
        opacity: 0,
        duration: 0.8,
        delay: 1.5,
      });
    });
  }
};

export const callbackModal = () => {
  if (document.querySelector('.callback_modal')) {
    const openBtn = document.querySelectorAll('.callback_modal-open-btn');
    const modal = document.querySelector('.callback_modal');
    const modalClose = document.querySelector('.callback_modal-body__close');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.classList.remove('lock');
        if (window.innerWidth > 1199) {
          content.forEach((item) => {
            item.style.maxWidth = `1356px`;
            item.style.padding = ` 0 30px`;
          });
        }
        if (window.innerWidth > 991 && window.innerWidth < 1200) {
          content.forEach((item) => {
            item.style.maxWidth = `1356px`;
            item.style.padding = ` 0 28px`;
          });
        }
      } else {
        modal.classList.add('active');
        body.classList.add('lock');
        if (window.innerWidth > 1199) {
          content.forEach((item) => {
            item.style.maxWidth = `${1356 + scrollWidth}px`;
            item.style.padding = ` 0 ${scrollWidth + 30}px 0 30px`;
          });
        }
        if (window.innerWidth > 992 && window.innerWidth < 1200) {
          content.forEach((item) => {
            item.style.maxWidth = `${1356 + scrollWidth}px`;
            item.style.padding = ` 0 ${scrollWidth + 28}px 0 28px`;
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalClose.addEventListener('click', toggleModal);
  }
};

export const AOSanim = () => {
  AOS.init({
    once: true,
  });
};
