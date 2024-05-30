import RestaurantDrawing from "./images/restaurantout.png";

function loadHomePage() {
  const containerHome = document.querySelector("#content");
  containerHome.innerHTML = "";

  const restaurantName = document.createElement("h1");
  restaurantName.innerHTML = "JOJO CAFÉ";
  containerHome.appendChild(restaurantName);

  const restaurantPng = document.createElement("img");
  restaurantPng.src = RestaurantDrawing;
  restaurantPng.classList.add("home-image");
  containerHome.appendChild(restaurantPng);
}

export default loadHomePage;
