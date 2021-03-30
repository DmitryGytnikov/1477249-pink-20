'use strict';

// console.log(`obj1`);
let burger = document.querySelector(`.header__burger`);
let headerMenu = document.querySelector(`.header__menu`);
let header = document.querySelector(`.header`);
let body = document.querySelector(`.page__body`);

burger.addEventListener(`click`, function (evt) {
  // evt.preventDefault();
  burger.classList.toggle(`active`);
  headerMenu.classList.toggle(`active`);
  header.classList.toggle(`active`);
  body.classList.toggle(`lock`);
});
