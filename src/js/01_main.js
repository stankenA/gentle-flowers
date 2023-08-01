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

// Product

export const thumbsSwiper = new Swiper('.product__thumbs', {
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 5,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 24,
    }
  },
});

export const productSwiper = new Swiper('.product__swiper', {
  grabCursor: true,
  watchSlidesProgress: true,
  thumbs: {
    swiper: thumbsSwiper,
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

  _chooseAll() {
    this._itemAll.classList.add('feedback__service-item_active');
  }

  _chooseYandex() {
    this._itemYandex.classList.add('feedback__service-item_active');
  }

  _chooseGoogle() {
    this._itemGoogle.classList.add('feedback__service-item_active');
  }

  _clear() {
    this._itemAll.classList.remove('feedback__service-item_active');
    this._itemYandex.classList.remove('feedback__service-item_active');
    this._itemGoogle.classList.remove('feedback__service-item_active');
  }

  _checkBg(item, percentage) {
    if (item.classList.contains('feedback__service-item_active')) {
      this._bg.style.left = `${percentage}`;
    }
  }

  setEventListeners() {
    this._itemAll.addEventListener('click', () => {
      this._clear();
      this._chooseAll();
      this._checkBg(this._itemAll, '16%');
    });

    this._itemYandex.addEventListener('click', (evt) => {
      this._clear();
      this._chooseYandex();
      this._checkBg(this._itemYandex, '50%');
    });

    this._itemGoogle.addEventListener('click', () => {
      this._clear();
      this._chooseGoogle();
      this._checkBg(this._itemGoogle, '84%');
    });
  }
}

if (document.querySelector('.feedback__service-list')) {
  const feedbackTabs = new FeedbackTabs('.feedback__service-list');
  feedbackTabs.setEventListeners();
}

class Header {
  constructor(headerSelector) {
    this._header = document.querySelector(headerSelector);
    this._hamburger = this._header.querySelector('.header__hamburger');
    this._catalog = this._header.querySelector('.header__nav-item_catalog');
    this._catalogArrow = this._catalog.querySelector('.header__nav-item-arrow');
    this._dropdown = this._header.querySelector('.header__dropdown');
    this._timeout = undefined;
  }

  _toggleHeader() {
    this._header.classList.toggle('header_opened');
    this._hamburger.classList.toggle('header__hamburger_opened');
  }

  _toggleCatalog() {
    this._dropdown.classList.toggle('header__dropdown_opened');
    this._catalogArrow.classList.toggle('header__nav-item-arrow_opened');

    if (!this._dropdown.classList.contains('header__dropdown_opened')) {
      this._dropdown.style.height = '0px';
    } else {
      this._dropdown.style.height = `${this._dropdown.scrollHeight}px`;
    }
  }

  toggleHover() {
    if (window.innerWidth <= 1023) {
      this._catalog.classList.remove('header__nav-item_hover');
    } else {
      this._catalog.classList.add('header__nav-item_hover');
    }
  }

  setEventListeners() {
    this._hamburger.addEventListener('click', () => {
      this._toggleHeader();
    });

    this._catalogArrow.addEventListener('click', () => {
      this._toggleCatalog();
    })

    window.addEventListener('resize', () => {
      clearTimeout(this._timeout);

      this._timeout = setTimeout(() => {
        this.toggleHover();
      }, 500)
    })
  }
}

const header = new Header('.header');
header.setEventListeners();
header.toggleHover();

class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeBtn = this._popup.querySelector('.popup__close');
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
  }

  _closePopup() {
    this._popup.classList.remove('popup_opened');
  }

  setEventListeners() {
    this._closeBtn.addEventListener('click', () => {
      this._closePopup();
    });

    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this._closePopup();
      }
    })
  }
}

const popup = new Popup('.popup');
popup.setEventListeners();

const allPopupOpenBtns = document.querySelectorAll('.popup-btn');
allPopupOpenBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    popup.openPopup();
  });
});
