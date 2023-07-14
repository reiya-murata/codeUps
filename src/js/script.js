"use strict";

jQuery(function ($) {// この中であればWordpressでも「$」が使用可能になる
});

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
  //burger animataion
  burger.classList.toggle("active");
  header.forEach((headerElement) => {
    headerElement.classList.toggle("active");

  });
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
  centeredSlides: true, 
  breakpoints:{
767:{
  slidesPerView:4
},
  },
  

});


  const mainswiper = new Swiper(".mainswiper", {
  
    effect: "fade",
    loop:true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });