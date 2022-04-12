window.addEventListener("load", populate);
let soup = document.querySelector(".chose_products_type");
async function populate() {
  let result = await fetch("./restaurant_json/principal.json");
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
  soup.innerHTML = productCardsString;
}
