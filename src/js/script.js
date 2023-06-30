"use strict";

jQuery(function ($) {// この中であればWordpressでも「$」が使用可能になる
});

const burger=document.querySelector(".hamburger");
const nav=document.querySelector(".nav");
const navLinks=document.querySelectorAll(".nav-links li");

burger.addEventListener("click",()=>{
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      // console.log(index);
      link.style.animation = `navLinksFade 0.5s ease forwards ${
        index / 7 + 0.4
      }s`;
    }
  });
  //burger animataion
  burger.classList.toggle("toggle");
});
// burger menu
