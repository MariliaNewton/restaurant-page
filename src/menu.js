function loadMenuPage() {
  // Create a container for the menu
  const containerMenu = document.createElement("div");

  // Select and Clean page content
  const containerPage = document.querySelector("#content");
  containerPage.innerHTML = "";

  // Create page title
  const restaurantName = document.createElement("h1");
  const restaurantMenu = document.createElement("span");
  restaurantName.innerHTML = "JOJO";
  restaurantMenu.innerHTML = "Menu";
  restaurantName.appendChild(restaurantMenu);

  // Create restaurant hours
  const restaurantHours = document.createElement("h3");
  restaurantHours.innerHTML = "Everyday 9am - 5pm";

  // Create coffe list
  const coffee = document.createElement("h2");
  coffee.innerHTML = "COFFEE";
  const coffeeList = document.createElement("div");
  coffeeList.classList.add("menu-list");

  appendItemList(coffeeList, "Espresso", "$ 5.00");
  appendItemList(coffeeList, "Latte", "$ 5.00");
  appendItemList(coffeeList, "Macchiato", "$ 7.00");
  appendItemList(coffeeList, "Flat White", "$ 9.00");
  appendItemList(coffeeList, "Capuccino", "$ 10.00");

  containerMenu.appendChild(coffee);
  containerMenu.appendChild(coffeeList);

  // Create non-coffe list
  const nonCoffee = document.createElement("h2");
  nonCoffee.innerHTML = "NON-COFFEE";
  const nonCoffeeList = document.createElement("div");
  nonCoffeeList.classList.add("menu-list");

  appendItemList(nonCoffeeList, "Espresso", "$ 5.00");
  appendItemList(nonCoffeeList, "Latte", "$ 5.00");
  appendItemList(nonCoffeeList, "Macchiato", "$ 7.00");
  appendItemList(nonCoffeeList, "Flat White", "$ 9.00");
  appendItemList(nonCoffeeList, "Capuccino", "$ 10.00");

  containerMenu.appendChild(nonCoffee);
  containerMenu.appendChild(nonCoffeeList);

  // Create tea list
  const tea = document.createElement("h2");
  tea.innerHTML = "TEA";
  const teaList = document.createElement("div");
  teaList.classList.add("menu-list");

  appendItemList(teaList, "Lemon", "$ 4.00");
  appendItemList(teaList, "Jasmine", "$ 4.00");
  appendItemList(teaList, "Green", "$ 4.00");
  appendItemList(teaList, "Black", "$ 4.00");
  appendItemList(teaList, "Mint", "$ 4.00");

  containerMenu.appendChild(tea);
  containerMenu.appendChild(teaList);

  // Create non-coffe list
  const desserts = document.createElement("h2");
  desserts.innerHTML = "DESSERTS";
  const dessertsList = document.createElement("div");
  dessertsList.classList.add("menu-list");

  appendItemList(dessertsList, "Brownie", "$ 3.00");
  appendItemList(dessertsList, "Cinnamon Roll", "$ 3.00");
  appendItemList(dessertsList, "Chocolate Muffin", "$ 5.00");
  appendItemList(dessertsList, "Strawberry Waffle", "$ 7.00");
  appendItemList(dessertsList, "Lemon pie", "$ 7.00");
  appendItemList(dessertsList, "Cheesecake", "$ 10.00");
  appendItemList(dessertsList, "Nutela Croissant<", "$ 10.00");

  containerMenu.appendChild(desserts);
  containerMenu.appendChild(dessertsList);

  // Apend to page container
  containerPage.appendChild(restaurantName);
  containerPage.appendChild(restaurantHours);
  containerPage.appendChild(containerMenu);
}

function appendItemList(list, item, price) {
  const food = document.createElement("div");
  food.innerHTML = item;
  list.appendChild(food);

  const foodPrice = document.createElement("div");
  foodPrice.classList.add("price");
  foodPrice.innerHTML = price;
  list.appendChild(foodPrice);
}

export default loadMenuPage;
