'use strict';

// console.log(`obj1`);
let burger = document.querySelector(`.header__burger`);
let headerMenu = document.querySelector(`.header__menu`);
let header = document.querySelector(`.header`);
let body = document.querySelector(`.page__body`);

burger.addEventListener(`click`, function (evt) {
  // evt.preventDefault();
  burger.classList.toggle(`header__burger--active`);
  headerMenu.classList.toggle(`header__burger--active`);
  header.classList.toggle(`header__burger--active`);
  body.classList.toggle(`lock`);
});

$(function(){
  $('.feedbacks-slider').slick({

  });
});
