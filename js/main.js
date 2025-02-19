// const hamburgerBtn = document.querySelector(".ham_btn");
const hamburgerMenu = document.querySelector(".hamburger_menu");

// function hamburgerOn(event) {
//   event.preventDefault();
//   if (hamburgerMenu.style.display === "none") {
//     hamburgerMenu.style.display = "block";
//   } else {
//     hamburgerMenu.style.display = "none";
//   }
// }

// hamburgerBtn.addEventListener("click", hamburgerOn);

$(function () {
  $(".ham_btn").on("click", function (e) {
    e.preventDefault();
    $(".hamburger_menu").slideToggle(400);
  });
});

// 화면 크기가 변경될 때 메뉴 자동 닫기
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    hamburgerMenu.style.display = "none";
  }
});
