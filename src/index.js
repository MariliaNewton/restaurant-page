import "./style.css";
import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadAboutPage from "./about";

const btnHome = document.querySelector(".home");
const btnMenu = document.querySelector(".menu");
const btnAbout = document.querySelector(".about");

btnHome.addEventListener("click", loadHomePage);
btnMenu.addEventListener("click", loadMenuPage);
btnAbout.addEventListener("click", loadAboutPage);

loadHomePage();
