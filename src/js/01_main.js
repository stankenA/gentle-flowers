class Header {
  constructor(headerSelector) {
    this._header = document.querySelector(headerSelector);
    this._menu = this._header.querySelector('.header__bottom');
    this._hamburger = this._header.querySelector('.header__hamburger');
    this._closeBtn = this._header.querySelector('.header__close');
  }

  _toggleMenu() {
    this._menu.classList.toggle('header__bottom_opened');
  }

  _closeMenu() {
    this._menu.classList.remove('header__bottom_opened');
  }

  setEventListeners() {
    this._hamburger.addEventListener('click', () => {
      this._toggleMenu();
    });

    this._closeBtn.addEventListener('click', () => {
      this._closeMenu();
    });
  }
}

const header = new Header('.header');
header.setEventListeners();
