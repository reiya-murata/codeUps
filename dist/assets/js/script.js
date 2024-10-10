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

//home非表示
var heroContents = document.querySelector('.js-hero-contents');
var headerHeight = heroContents.clientHeight * 1 / 5;
var headerHome = document.querySelector('.js-header-home');
window.addEventListener("scroll", function () {
  // hero__contents が表示されているかどうかを確認
  var scrollPosition = document.documentElement.scrollTop;
  // スクロールに合わせて要素をヘッダーの高さ分だけ移動（表示域から隠したり表示したり）
  if (window.scrollY > headerHeight) {
    headerHome.style.display = "flex";
  }
  if (window.scrollY < headerHeight) {
    headerHome.style.display = "none";
  }
});

// swiper メインビュー
var hero__swiper = new Swiper(".js-hero-swiper", {
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

//campaign__swiper
var swiper = new Swiper(".js-campaign__swiper", {
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
    nextEl: '.campaign__swiper-next',
    prevEl: '.campaign__swiper-prev'
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

// campaign-pageタブ
document.addEventListener('DOMContentLoaded', function () {
  // タブボタンをすべて取得
  var tabButtons = document.querySelectorAll('.js-tab-menu1');
  // タブボタンにクリックイベントを追加
  tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // 全てのタブコンテンツを非表示にする（activeクラスを削除）
      var allTabBodies = document.querySelectorAll('.js-campaign-tabbody');
      allTabBodies.forEach(function (tabBody) {
        tabBody.classList.remove('active'); // 全てのタブコンテンツから active クラスを削除
      });

      // 対応するタブコンテンツを表示する（activeクラスを追加）
      var targetId = this.getAttribute('data-target'); // クリックされたボタンの data-target 属性を取得
      var targetTabBody = document.getElementById(targetId); // 該当するタブコンテンツを取得
      if (targetTabBody) {
        targetTabBody.classList.add('active'); // 該当するタブコンテンツに active クラスを追加
      }

      // クリックされたボタンをアクティブ状態にする
      tabButtons.forEach(function (btn) {
        return btn.classList.remove('active');
      }); // 全ボタンのアクティブ状態を解除
      this.classList.add('active'); // クリックされたボタンをアクティブに
    });
  });
});

// galleryモーダル
document.addEventListener('DOMContentLoaded', function () {
  // モーダルの要素を取得
  var modal = document.getElementById('imageModal');
  var modalImage = document.getElementById('modalImage');
  // すべての画像を取得
  var galleryImages = document.querySelectorAll('.js-gallery-img1, .js-gallery-img2, .js-gallery-img3, .js-gallery-img4, .js-gallery-img5, .js-gallery-img6');

  // 各画像にクリックイベントを追加
  galleryImages.forEach(function (img) {
    img.addEventListener('click', function () {
      modal.style.display = "block"; // モーダルを表示
      modalImage.src = this.src; // クリックされた画像をモーダルに表示
    });
  });
  // モーダル外をクリックすると閉じる
  modal.addEventListener('click', function (event) {
    // クリックされた要素がモーダル自身であれば閉じる
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// information-pageタブ
document.addEventListener('DOMContentLoaded', function () {
  // タブボタンをすべて取得
  var tabButtons2 = document.querySelectorAll('.js-tab-menu2');

  // タブボタンにクリックイベントを追加
  tabButtons2.forEach(function (button) {
    button.addEventListener('click', function () {
      // 全てのタブコンテンツを非表示にする（activeクラスを削除）
      var informationTabBodies = document.querySelectorAll('.js-information-tabbody');
      informationTabBodies.forEach(function (tabBody) {
        tabBody.classList.remove('active'); // 全てのタブコンテンツから active クラスを削除
      });

      // 対応するタブコンテンツを表示する（activeクラスを追加）
      var targetId = this.getAttribute('data-target'); // クリックされたボタンの data-target 属性を取得
      var targetTabBody = document.getElementById(targetId); // 該当するタブコンテンツを取得
      if (targetTabBody) {
        targetTabBody.classList.add('active'); // 該当するタブコンテンツに active クラスを追加
      }

      // クリックされたボタンをアクティブ状態にする
      tabButtons2.forEach(function (btn) {
        return btn.classList.remove('active');
      }); // 全ボタンのアクティブ状態を解除
      this.classList.add('active'); // クリックされたボタンをアクティブに
    });
  });
});

// js-sidevar-archiveクラスの要素を取得
var sidevarArchive1 = document.querySelector('.js-sidevar-archive1');
var sidevarArchive2 = document.querySelector('.js-sidevar-archive2');
// 要素がクリックされたときにopenクラスをトグル（開閉機能）
sidevarArchive1.addEventListener('click', function () {
  sidevarArchive1.classList.toggle('open'); // クラスを追加/削除
});
sidevarArchive2.addEventListener('click', function () {
  sidevarArchive2.classList.toggle('open'); // クラスを追加/削除
});