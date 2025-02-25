$(function () {
  $(".ham_btn").on("click", function (e) {
    e.preventDefault();
    $(".hamburger_menu").toggleClass("on");
    $(".container .dimmed").toggleClass("on");
  });

  $(".hamburger_menu > a").on("click", function (e) {
    e.preventDefault();
    $(".hamburger_menu").toggleClass("on");
    $(".container .dimmed").toggleClass("on");
  });

  // 화면 크기가 변경될 때 메뉴 자동 닫기
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      $(".hamburger_menu").removeClass("on");
      $(".container .dimmed").removeClass("on");
    }
  });

  $(".menu a").on({
    mouseenter: function () {
      let idx = $(this).index(); // 현재 a 태그의 index 가져오기
      $(".submenu").eq(idx).addClass("on");
    },
    mouseleave: function () {
      let idx = $(this).index();
      $(".submenu").eq(idx).removeClass("on");
    },
  });

  $(".submenu").on({
    mouseenter: function () {
      $(this).addClass("on");
    },
    mouseleave: function () {
      $(this).removeClass("on");
    },
  });
});
