'use strict';

let slider = document.querySelector('.slider');

slider.addEventListener('click', e => {
  if (e.target.closest('.slider__arrow-left') ||
    e.target.closest('.slider__arrow-right') ||
    (e.target.closest('.slider__dot') &&
      !e.target.classList.contains('slider__dot--active'))) {
    slider.querySelectorAll('.slider__slide').forEach(elem => elem.classList.toggle('slider__slide--change'));
    slider.querySelectorAll('.slider__dot').forEach(elem => elem.classList.toggle('slider__dot--active'));
  }
});
