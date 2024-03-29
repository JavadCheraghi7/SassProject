const btnBurger = document.querySelector(".btnBurger");
const burger = document.querySelector(".btnBurger__btn");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");

let showMenu = false;

btnBurger.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		burger.classList.add("open");
		nav.classList.add("open");
		menuNav.classList.add("open");
		navItem.forEach(item => item.classList.add("open"));

		showMenu = true;
	} else {
		burger.classList.remove("open");
		nav.classList.remove("open");
		menuNav.classList.remove("open");
		navItem.forEach(item => item.classList.remove("open"));

		showMenu = false;
	}
}
