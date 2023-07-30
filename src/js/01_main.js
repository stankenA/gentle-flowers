// class Header {
//   constructor(headerSelector) {
//     this._header = document.querySelector(headerSelector);
//     this._menu = this._header.querySelector('.header__bottom');
//     this._hamburger = this._header.querySelector('.header__hamburger');
//     this._closeBtn = this._header.querySelector('.header__close');
//   }

//   _toggleMenu() {
//     this._menu.classList.toggle('header__bottom_opened');
//   }

//   _closeMenu() {
//     this._menu.classList.remove('header__bottom_opened');
//   }

//   setEventListeners() {
//     this._hamburger.addEventListener('click', () => {
//       this._toggleMenu();
//     });

//     this._closeBtn.addEventListener('click', () => {
//       this._closeMenu();
//     });
//   }
// }

// const header = new Header('.header');
// header.setEventListeners();

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const promoSwiper = new Swiper('.promo__swiper', {
  slidesPreView: 1,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".promo__swiper-pagination",
    clickable: true,
  },
});

const serviceSwiper = new Swiper('.service__swiper', {
  slidesPreView: 1,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".service__swiper-pagination",
    clickable: true,
  },
});

class FeedbackTabs {
  constructor(tabsSelector) {
    this._tabs = document.querySelector(tabsSelector);
    this._itemAll = this._tabs.querySelector('.feedback__service-item_all');
    this._itemYandex = this._tabs.querySelector('.feedback__service-item_yandex');
    this._itemGoogle = this._tabs.querySelector('.feedback__service-item_google');
    this._bg = this._tabs.querySelector('.feedback__bg');
  }

  _clearBg() {
    this._bg.classList.remove('feedback__bg_all');
    this._bg.classList.remove('feedback__bg_yandex');
    this._bg.classList.remove('feedback__bg_google');
  }

  _moveBgAll() {
    this._clearBg();
    this._bg.classList.add('feedback__bg_all');
  }

  _moveBgYandex() {
    this._clearBg();
    this._bg.classList.add('feedback__bg_yandex');
  }

  _moveBgGoogle() {
    this._clearBg();
    this._bg.classList.add('feedback__bg_google');
  }

  setEventListeners() {
    this._itemAll.addEventListener('click', () => {
      this._moveBgAll();
    });

    this._itemYandex.addEventListener('click', () => {
      this._moveBgYandex();
    });

    this._itemGoogle.addEventListener('click', () => {
      this._moveBgGoogle();
    });
  }
}

const feedbackTabs = new FeedbackTabs('.feedback__service-list');
feedbackTabs.setEventListeners();