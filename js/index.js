'use strict';

const contacts = document.querySelector('.contacts');
const slider = document.querySelector('.slider');
const servicesSlider = document.querySelector('.services__slider');
const merchList = document.querySelector('.catalog-merchandise__list');
const buyElem = document.querySelector('.site-header__basket');
const buyCountElem = buyElem
  .querySelector('.site-header__basket-count');
const bookmarksElem = document
  .querySelector('.site-header__bookmarks');
const bookmarksCountElem = bookmarksElem
  .querySelector('.site-header__bookmarks-count');

document.addEventListener('keyup', (evt) => {
  if (evt.code === 'Escape') {
    document.querySelectorAll('.modal')
      .forEach((elem) => {
        if (!elem.classList.contains('modal--hide')) {
          elem.firstElementChild.classList.add('modal--zoomOut');
        }
      });
  }
});

document.addEventListener('click', (evt) => {
  if (evt.target.matches('.modal-close') ||
    evt.target.matches('.modal-add-product__link--shop')) {
    evt.preventDefault();
    evt.target.closest('.modal-block').classList.add('modal--zoomOut');
  }

  if (evt.target.matches('.modal')) {
    evt.target.firstElementChild.classList.add('modal--zoomOut');
  }
});

document.addEventListener('animationend', (evt) => {
  if (evt.target.matches('.modal--zoomOut')) {
    evt.target.closest('.modal').classList.add('modal--hide');
    evt.target.classList.remove('modal--zoomOut');
  }
});

if (contacts) {
  contacts.addEventListener('click', (evt) => {
    if (evt.target.closest('.contacts__link')) {
      evt.preventDefault();
      document.querySelector('.modal--feedback').classList
        .remove('modal--hide');
    }

    if (evt.target.closest('.contacts__map-link')) {
      evt.preventDefault();
      document.querySelector('.modal--map').classList
        .remove('modal--hide');
    }
  });
}

if (slider) {
  slider.addEventListener('click', (evt) => {
    if (evt.target.closest('.slider__arrow-left') ||
      evt.target.closest('.slider__arrow-right') ||
      (evt.target.closest('.slider__dot') &&
        !evt.target.closest('.slider__dot').classList
        .contains('slider__dot--active'))) {
      slider.querySelectorAll('.slider__slide').forEach((elem) => elem.classList.toggle('slider__slide--none'));
      slider.querySelectorAll('.slider__dot').forEach((elem) => elem.classList.toggle('slider__dot--active'));
    }
  });
}

if (servicesSlider) {
  const servicesSlides = [...servicesSlider.querySelectorAll('.services__slide')];
  const servicesButtons = [...servicesSlider.querySelectorAll('.services__button')];
  let activeSlideIndex = servicesButtons
    .indexOf(servicesSlider.querySelector('.services__button--active'));

  servicesSlider.addEventListener('click', (evt) => {
    if (evt.target.closest('.services__button') &&
      !evt.target.closest('.services__button').classList
      .contains('services__button--active')) {
      servicesSlides[activeSlideIndex].classList
        .remove('services__slide--active');
      servicesButtons[activeSlideIndex].classList
        .remove('services__button--active');
      activeSlideIndex = servicesButtons
        .indexOf(evt.target.closest('.services__button'));
      servicesSlides[activeSlideIndex].classList
        .add('services__slide--active');
      servicesButtons[activeSlideIndex].classList
        .add('services__button--active');
    }
  });
}

if (merchList && buyElem && buyCountElem &&
  bookmarksElem && bookmarksCountElem) {
  merchList.addEventListener('click', (evt) => {
    if (evt.target.closest('.merchandise__buy-link')) {
      evt.preventDefault();
      buyElem.classList.add('site-header__basket--active');
      buyCountElem.textContent = +buyCountElem.textContent + 1 + '';
      document.querySelector('.modal--add-product').classList
        .remove('modal--hide');
    }

    if (evt.target.closest('.merchandise__bookmark')) {
      bookmarksElem.classList.add('site-header__bookmarks--active');
      bookmarksCountElem.textContent = +bookmarksCountElem.textContent + 1 + '';
    }
  });
}
