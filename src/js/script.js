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
