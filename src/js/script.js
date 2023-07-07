"use strict";

jQuery(function ($) {// この中であればWordpressでも「$」が使用可能になる
});

const burger=document.querySelector(".hamburger ");
const nav=document.querySelector(".nav");
const navItems=document.querySelectorAll(".nav__items li");

burger.addEventListener("click",()=>{
  nav.classList.toggle("active");

  navItems.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      // console.log(index);
      link.style.animation = `navItemsFade 0.5s ease forwards ${
        index / 7 + 0.4
      }s`;
    }
  });
  //burger animataion
  burger.classList.toggle("active");
});
// burger menu

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints:{
767:{
  slidesPerView:3
},
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
