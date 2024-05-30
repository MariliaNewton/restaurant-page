import "./style.css";
import loadHomePage from "./home";

const btnHome = document.querySelector(".home");
const btnMenu = document.querySelector(".menu");

btnHome.addEventListener("click", homePage);
btnHome.addEventListener("click", function () {
  console.log("hey");
});
