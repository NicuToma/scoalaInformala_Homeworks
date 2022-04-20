window.addEventListener("load", async () => {
  let searchParamString = window.location.search;
  const searchParam = new URLSearchParams(searchParamString);
  const foodId = searchParam.get("id");
  const foodURL = `https://6256f0c76ea703700542743f.mockapi.io/foodMenu/${foodId}`;
  const result = await fetch(foodURL);
  const food = await result.json();

  const foodCard = `
        <div class="cardFood">
            <div class="fotoFoodCard">
                <h3>${food.name}</h3>
                <img src=${food.imageURL} alt="image missing" class="foodImg"/>                                     
                <div class="pret">
                    <p id="productPrice">Pret: <p id="productPriceValue">${food.price}</p></p>
                    
                </div>  
                <button item-id=${food.id} class="add-to-cart btn btn-outline-secondary  ">Cumpara</button>                           
            </div>   
                                
            <div class="foodDescription">
                  <h3>Ingrediente / gramaj</h3>
                    <p>${food.ingredients}</p>
                    <p>${food.cantitate}</p>
                    
            </div>
              
        </div>        
    `;
  document.querySelector(".food_detail").innerHTML = foodCard;

  //no of items in cart on page load
  let noItems = 0;
  let cos = JSON.parse(localStorage.getItem("cos"));
  if (cos) {
    cos.forEach((food) => {
      noItems = noItems + food.itemNo;
    });
    document.querySelector(".noOfItemsInCart").innerHTML = noItems;
  }
});

//add to cart product
document.querySelector(".food_detail").addEventListener("click", addToCart);
async function addToCart(event) {
  const addToCartBtn = event.target;
  if (addToCartBtn.classList.contains("add-to-cart")) {
    let foodId = addToCartBtn.getAttribute("item-id");

    const foodURL = `https://6256f0c76ea703700542743f.mockapi.io/foodMenu/${foodId}`;
    const result = await fetch(foodURL);
    const food = await result.json();

    let cos = [];
    if (localStorage.getItem("cos") == null) {
      cos.push({ ...product, itemNo: 1 });
    } else {
      cos = JSON.parse(localStorage.getItem("cos"));
      const addedItem = cos.find((itemInCart) => itemInCart.id == food.id);

      if (addedItem != undefined) {
        addedItem.itemNo++;
        location.reload();
        window.alert("Produsul a fost adaugat cu succes!");
      } else {
        const itemToAdd = { ...food, itemNo: 1 };
        cos.push(itemToAdd);
      }
    }

    if (cos.length > 0) localStorage.setItem("cos", JSON.stringify(cos));
  }
}
