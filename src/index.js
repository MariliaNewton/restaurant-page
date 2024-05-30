import "./style.css";
import loadHomePage from "./home";
import loadMenuPage from "./menu";

const btnHome = document.querySelector(".home");
const btnMenu = document.querySelector(".menu");

btnHome.addEventListener("click", loadHomePage);
btnMenu.addEventListener("click", loadMenuPage);

loadHomePage();
