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
    fade: true,
    prevArrow: '<svg class="slick-left" width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M2.0413 20.5035L21.7483 1.4144C21.8281 1.3379 21.8914 1.24683 21.9346 1.14646C21.9778 1.04608 22 0.938398 22 0.829635C22 0.720871 21.9778 0.613187 21.9346 0.512814C21.8914 0.41244 21.8281 0.321369 21.7483 0.24487C21.6686 0.167255 21.5738 0.105671 21.4694 0.0636507C21.365 0.0216304 21.2532 0 21.1401 0C21.0271 0 20.9153 0.0216304 20.8109 0.0636507C20.7065 0.105671 20.6117 0.167255 20.532 0.24487L0.252535 19.9088C0.17249 19.9862 0.108978 20.0781 0.0656429 20.1793C0.0223074 20.2805 0 20.389 0 20.4985C0 20.6081 0.0223074 20.7166 0.0656429 20.8178C0.108978 20.919 0.17249 21.0109 0.252535 21.0883L20.532 40.7621C20.6967 40.9157 20.9167 41.001 21.1453 41C21.3139 40.9985 21.4783 40.9488 21.6181 40.8572C21.7578 40.7656 21.8666 40.6362 21.9309 40.485C21.9952 40.3339 22.0122 40.1677 21.9797 40.0072C21.9473 39.8467 21.8668 39.6991 21.7483 39.5827L2.0413 20.5035Z" fill="#283645"/></svg>',
    nextArrow: '<svg class="slick-right" width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M19.9587 20.4965L0.251671 39.5856C0.171938 39.6621 0.108643 39.7532 0.065443 39.8535C0.0222435 39.9539 0 40.0616 0 40.1704C0 40.2791 0.0222435 40.3868 0.065443 40.4872C0.108643 40.5876 0.171938 40.6786 0.251671 40.7551C0.33144 40.8327 0.426224 40.8943 0.530588 40.9363C0.634953 40.9784 0.746847 41 0.859852 41C0.972857 41 1.08475 40.9784 1.18911 40.9363C1.29348 40.8943 1.38826 40.8327 1.46803 40.7551L21.7475 21.0912C21.8275 21.0138 21.891 20.9219 21.9344 20.8207C21.9777 20.7195 22 20.611 22 20.5015C22 20.3919 21.9777 20.2834 21.9344 20.1822C21.891 20.081 21.8275 19.9891 21.7475 19.9117L1.46803 0.237877C1.30326 0.0842934 1.08329 -0.00102615 0.85474 7.62939e-06C0.6861 0.00154114 0.52166 0.0511971 0.381939 0.14278C0.24222 0.234364 0.133411 0.363811 0.069088 0.51498C0.00476646 0.666149 -0.0122204 0.83234 0.0202503 0.992809C0.052721 1.15328 0.133209 1.30093 0.251671 1.41732L19.9587 20.4965Z" fill="#283645"/></svg>',
    dots: false,
    responsive: [
      {
        breakpoint: 979,
        settings: {
          arrows: false,
          dots: true,
        }
      },
    ]
  });
});
