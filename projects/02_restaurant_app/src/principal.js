window.addEventListener("load", populate);
let foodType = document.querySelector(".chose_products_type");
async function populate() {
  let result = await fetch(
    "https://6256f0c76ea703700542743f.mockapi.io/principal"
  );
  let food = await result.json();
  let foodCardsString = food
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
  foodType.innerHTML = foodCardsString;
}
