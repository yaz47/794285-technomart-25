'use strict';

let contacts = document.querySelector('.contacts');
let slider = document.querySelector('.slider');
let servicesSlider = document.querySelector('.services__slider');
let merchList = document.querySelector('.catalog-merchandise__list');
let buyElem = document.querySelector('.site-header__basket');
let buyCountElem = buyElem
  .querySelector('.site-header__basket-count');
let bookmarksElem = document
  .querySelector('.site-header__bookmarks');
let bookmarksCountElem = bookmarksElem
  .querySelector('.site-header__bookmarks-count');

document.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    document.querySelectorAll('.modal')
      .forEach(elem => elem.classList.add('modal--hide'));
  }
});

document.addEventListener('click', e => {
  if (e.target.matches('.modal') ||
    e.target.matches('.modal-close') ||
    e.target.matches('.modal-add-product__link--shop')) {
    e.target.closest('.modal').classList.add('modal--hide');
  }
});

if (contacts) {
  contacts.addEventListener('click', e => {
    if (e.target.closest('.contacts__link')) {
      document.querySelector('.modal--feedback').classList
        .remove('modal--hide');
      e.preventDefault();
    }
    if (e.target.closest('.contacts__map-link')) {
      document.querySelector('.modal--map').classList
        .remove('modal--hide');
      e.preventDefault();
    }
  });
}

if (slider) {
  slider.addEventListener('click', e => {
    if (e.target.closest('.slider__arrow-left') ||
      e.target.closest('.slider__arrow-right') ||
      (e.target.closest('.slider__dot') &&
        !e.target.closest('.slider__dot').classList
        .contains('slider__dot--active'))) {
      slider.querySelectorAll('.slider__slide').forEach(elem => elem.classList.toggle('slider__slide--change'));
      slider.querySelectorAll('.slider__dot').forEach(elem => elem.classList.toggle('slider__dot--active'));
    }
  });
}

if (servicesSlider) {
  let servicesSlides = [...servicesSlider.querySelectorAll('.services__slide')];
  let servicesButtons = [...servicesSlider.querySelectorAll('.services__button')];
  let activeSlideIndex = servicesButtons
    .indexOf(servicesSlider.querySelector('.services__button--active'));

  servicesSlider.addEventListener('click', e => {
    if (e.target.closest('.services__button') &&
      !e.target.closest('.services__button').classList
      .contains('services__button--active')) {
      servicesSlides[activeSlideIndex].classList
        .remove('services__slide--active');
      servicesButtons[activeSlideIndex].classList
        .remove('services__button--active');
      activeSlideIndex = servicesButtons
        .indexOf(e.target.closest('.services__button'));
      servicesSlides[activeSlideIndex].classList
        .add('services__slide--active');
      servicesButtons[activeSlideIndex].classList
        .add('services__button--active');
    }
  });
}

if (merchList && buyElem && buyCountElem &&
  bookmarksElem && bookmarksCountElem) {
  merchList.addEventListener('click', e => {
    if (e.target.closest('.merchandise__buy-link')) {
      buyElem.classList.add('site-header__basket--active');
      buyCountElem.textContent = +buyCountElem.textContent + 1 + '';
      document.querySelector('.modal--add-product').classList
      .remove('modal--hide');
      e.preventDefault();
    }
    if (e.target.closest('.merchandise__bookmark')) {
      bookmarksElem.classList.add('site-header__bookmarks--active');
      bookmarksCountElem.textContent = +bookmarksCountElem.textContent + 1 + '';
    }
  });
}
