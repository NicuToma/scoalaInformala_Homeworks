function myFunction() {
  let x = document.querySelector(".links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    x.style.gap = "10%";
  }
}
let ciorbe = document.querySelector(".ciorbe");
ciorbe.addEventListener("click", populate);
let food_card = document.querySelector(".chose_products_type");
async function populate() {
  let result = await fetch("./restaurant_json/ciorbe.json");
  let food = await result.json();
  console.log(food);
  console.log(food.name);

  let productCardsString = food
    .map(
      (food) =>
        `<div class="food-card">
        <h6 id="name">${food.name}</h6>
        <img src=${food.imageURL} alt="image missing" />
        <span class="priceOf">Price: </span>
        <span class="priceValue">${food.price}</span>
        <button class="details btn btn-outline-secondary"><a href="detail.html?id=${food.id}">Details</a></button>
    </div>
       `
    )
    .join("");
  food_card.innerHTML = productCardsString;
}
// fetch("./restaurant_json/ciorbe.json")
//   .then((response) => response.json())
//   .then()
//   .then((json) => console.log(json));
// <h6 id="name">${food.name}</h6>
// <img src=${food.imageURL} alt="image missing" />
// <div class="price">
//     <span class="priceOf">Price: </span>
//     <span class="priceValue">${food.price}</span>
// </div>
// <button class="details"><a href="detail.html?id=${food.id}">Details</a></button>
