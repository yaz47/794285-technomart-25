'use strict';

let slider = document.querySelector('.slider');
let merchList = document.querySelector('.merchandise');
let buyElem = document.querySelector('.site-header__basket');
let buyCountElem = document.querySelector('.site-header__basket-count');
let bookmarksElem = document.querySelector('.site-header__bookmarks');
let bookmarksCountElem = document.querySelector('.site-header__bookmarks-count');
let servicesSlider = document.querySelector('.services__slider');

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

if (merchList) {
  merchList.addEventListener('click', e => {
    if (e.target.closest('.merchandise__buy-link')) {
      buyElem.classList.add('site-header__basket--active');
      buyCountElem.textContent = +buyCountElem.textContent + 1 + '';
      e.preventDefault();
    }
    if (e.target.closest('.merchandise__bookmark')) {
      bookmarksElem.classList.add('site-header__bookmarks--active');
      bookmarksCountElem.textContent = +bookmarksCountElem.textContent + 1 + '';
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
