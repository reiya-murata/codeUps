"use strict";

jQuery(function ($) {// この中であればWordpressでも「$」が使用可能になる
});

// burger menu
var burger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
var header = document.querySelectorAll(".header");
var header__inner = document.querySelectorAll(".header__inner");
burger.addEventListener("click", function () {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    $("body").css("overflow", "hidden");
    setTimeout(function () {
      nav.style.height = "100vh"; // 100vhまでの高さに変化
    }, 0); // 50ミリ秒後に実行（適宜調整してください）

    // header__inner に active クラスを付与
    header__inner.forEach(function (headerInnerElement) {
      headerInnerElement.classList.add("active");
    });
  } else {
    nav.style.height = "0"; // 高さを0に変化させて非表示
    $("body").css("overflow", "auto");

    // header__inner から active クラスを削除
    header__inner.forEach(function (headerInnerElement) {
      headerInnerElement.classList.remove("active");
    });
  }

  // burger animation
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

//swiper__campaign 
var swiper = new Swiper(".swiper__campaign", {
  loop: true,
  loopedSlides: 2,
  slidesPerView: "auto",
  spaceBetween: 40,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    enabled: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

// color-box
function checkInView() {
  $('.color').each(function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    // 要素が画面内にあるかどうかを判定
    if (elementBottom > viewportTop && elementTop < viewportBottom) {
      // 画面内にある場合の処理を記述
      // 例: 背景色が画面に現れたら何か処理をする
      $(this).trigger('inview');
    }
  });
}

// スクロールやリサイズ時に実行する関数
$(window).on('scroll resize', function () {
  checkInView();
});

// ページのロード時にも実行する
$(document).ready(function () {
  checkInView();
});

//要素の取得とスピードの設定
var box = $('.colorbox'),
  speed = 700;

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function () {
  $(this).append('<div class="color"></div>');
  var color = $(this).find($('.color')),
    image = $(this).find('img');
  var counter = 0;
  image.css('opacity', '0');
  color.css('width', '0%');
  //inviewを使って背景色が画面に現れたら処理をする
  color.on('inview', function () {
    if (counter == 0) {
      $(this).delay(200).animate({
        'width': '100%'
      }, speed, function () {
        image.css('opacity', '1');
        $(this).css({
          'left': '0',
          'right': 'auto'
        });
        $(this).animate({
          'width': '0%'
        }, speed);
      });
      counter = 1;
    }
  });
});