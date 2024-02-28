"use strict";

jQuery(function ($) {// この中であればWordpressでも「$」が使用可能になる
});

// burger menu
const burger=document.querySelector(".hamburger ");
const nav=document.querySelector(".nav");
const navItems=document.querySelectorAll(".nav__items li");
const header = document.querySelectorAll(".header");

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
  //burger animation
  burger.classList.toggle("active");
  header.forEach((headerElement) => {
    headerElement.classList.toggle("active");
  });
});




// swiper メインビュー
const main__swiper = new Swiper(".main__swiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
     // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  },
  
});


//スライダー 
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   centeredSlides: true, 
//   breakpoints:{
// 767:{
//   slidesPerView:4
// },
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
  
// });

    var swiper = new Swiper(".swiper__campaign", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 53,
      centeredSlides: true,
      breakpoints: {
        650: {
          slidesPerView: 4,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        enabled:true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',  
      }
    });
  



