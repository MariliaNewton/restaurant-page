import CoffeBean from "./images/coffee-bean.png";

function loadAboutPage() {
  // Creates a container div
  const containerAbout = document.createElement("div");
  containerAbout.classList.add("container-about");

  // Select and Clean page content
  const containerPage = document.querySelector("#content");
  containerPage.innerHTML = "";

  // Sets page title
  const restaurantName = document.createElement("h1");
  const about = document.createElement("span");
  about.innerHTML = "About&nbsp";
  restaurantName.appendChild(about);
  restaurantName.insertAdjacentText("beforeend", "JOJO");

  const coffeePng = document.createElement("img");
  coffeePng.src = CoffeBean;
  coffeePng.classList.add("coffee-image");

  const textAbout = document.createElement("p");
  textAbout.innerHTML = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Necessitatibus mollitia distinctio earum voluptatem, laborum quisquam
  inventore corporis? Fugit, vitae iste alias quasi doloremque porro
  deleniti animi unde quae, beatae quisquam? Lorem ipsum dolor sit amet
  consectetur, adipisicing elit. Natus quod quisquam dicta sunt enim
  voluptatum magnam repudiandae modi corrupti asperiores quibusdam
  voluptates, nemo corporis optio autem vel inventore quaerat in, nemo corporis optio autem vel inventore quaerat in.`;

  containerAbout.appendChild(coffeePng);
  containerAbout.appendChild(textAbout);

  // Append to page
  containerPage.appendChild(restaurantName);
  containerPage.appendChild(containerAbout);
}

export default loadAboutPage;
