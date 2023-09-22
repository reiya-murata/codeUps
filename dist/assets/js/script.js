"use strict";

jQuery(function ($) {// この中であればWordpressでも「$」が使用可能になる
});

// burger menu
var burger = document.querySelector(".hamburger ");
var nav = document.querySelector(".nav");
var navItems = document.querySelectorAll(".nav__items li");
var header = document.querySelectorAll(".header");
burger.addEventListener("click", function () {
  nav.classList.toggle("active");
  navItems.forEach(function (link, index) {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      // console.log(index);
      link.style.animation = "navItemsFade 0.5s ease forwards ".concat(index / 7 + 0.4, "s");
    }
  });
  //burger animataion
  burger.classList.toggle("active");
  header.forEach(function (headerElement) {
    headerElement.classList.toggle("active");
  });
});

// swiper メインビュー
var main__swiper = new Swiper(".main__swiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    }
  }
});

//スライダー 
var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  centeredSlides: true,
  breakpoints: {
    767: {
      slidesPerView: 4
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});