const hamburgerBtn = document.querySelector(".ham_btn");
const hamburgerMenu = document.querySelector(".hamburger_menu");

function hamburgerOn(event) {
  event.preventDefault;
  hamburgerMenu.style.display = "block";
}

hamburgerBtn.addEventListener("click", hamburgerOn);
