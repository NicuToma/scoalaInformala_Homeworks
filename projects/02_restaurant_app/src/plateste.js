let total = 0;
let noItems = 0;
let cos = JSON.parse(localStorage.getItem("cos"));

window.addEventListener("load", () => {
  // if empty cart return shopping
  if (cos.length == 0) {
    document.querySelector(
      ".produse-cos"
    ).innerHTML = ` <div class:"backHome"><img src="./logo/restaurant.png" alt="logo"
    /><a  href="index.html" 
    >Cosul este gol:<strong style="color:red"> Inapoi la magazin</strong></a></div>`;
  }

  //calculate total price
  if (cos) {
    cos.forEach((food) => {
      total = total + Number(food.price) * food.itemNo;
      noItems = noItems + food.itemNo;
    });
    const foodCard = cos
      .map(
        (food) =>
          `<div class="cart-item-card" >
          <div class="imgName">
              <a href="detail.html?id=${food.id}"><img src=${food.imageURL} alt="image missing" /></a>
              <h6 class="productName">${food.name}</h6>
          </div>
              
              <div class="quantity">
                <button item-id=${food.id} class="decreaseNoOfProducts"> - </button>
                    <span  class="count-products">${food.itemNo}</span>
                <button item-id=${food.id} class="increaseNoOfProducts "> + </button>
              </div>          
              <div item-id=${food.id} class="priceValue"> <span> Pret: ${food.price}</span></div>  
                   
              <button item-id=${food.id} class="deleteItem btn btn-outline-secondary"><i item-id=${food.id} class="fas fa-trash-alt">sterge</i></button>                     
          </div> `
      )
      .join("");
    document.querySelector(".lista_plata").innerHTML = foodCard;

    let totalPrice = ` ${total}`;

    document.querySelector(".total").innerHTML = totalPrice;
    document.querySelector(".noOfItemsInCart").innerHTML = noItems;
  }
});

const produse_din_cos = document.querySelector(".lista_plata");
produse_din_cos.addEventListener("click", actiuniCos);

// cart actions
function actiuniCos(event) {
  const targetButton = event.target;

  let cos = JSON.parse(localStorage.getItem("cos"));

  let itemInCart = cos.find(
    (itemFromCart) => itemFromCart.id == targetButton.getAttribute("item-id")
  );
  let quantityParagraph = targetButton.parentNode.parentNode;

  // increase or decrease quantity
  if (targetButton.classList.contains("increaseNoOfProducts")) {
    itemInCart.itemNo++;
  } else if (targetButton.classList.contains("decreaseNoOfProducts")) {
    if (itemInCart.itemNo > 1) {
      itemInCart.itemNo--;
    }
    //delete product
  } else if (targetButton.classList.contains("fa-trash-alt")) {
    itemInCart.itemNo = 0;
    cos = cos.filter((food) => food.id != itemInCart.id);
    targetButton.parentNode.parentNode.remove();
  }

  //if cart becomes empty return to home page
  localStorage.setItem("cos", JSON.stringify(cos));
  if (cos.length == 0) {
    document.querySelector(
      ".produse-cos"
    ).innerHTML = ` <div class:"backHome"><img src="./logo/restaurant.png" alt="logo"
    /><a  href="index.html" 
    >Cosul este gol: <strong style="color:red"> Inapoi la magazin</strong></a></div>`;
    document.querySelector(".noOfItemsInCart").innerHTML = 0;
  }

  //total price update & update number of items in cart
  if (itemInCart) {
    quantityParagraph.querySelector(".count-products").innerHTML =
      itemInCart.itemNo;

    let noItems = 0;
    let total = 0;
    cos.forEach((food) => {
      total = total + Number(food.price) * food.itemNo;
      noItems = noItems + food.itemNo;
    });
    let totalPrice = ` ${total}`;
    document.querySelector(".total").innerHTML = totalPrice;
    document.querySelector(".noOfItemsInCart").innerHTML = noItems;
  }
  document.querySelector(".pay").addEventListener("click", plateste);
  function plateste() {
    alert("VETI FI REDIRECTIONAT CATRE PAGINA DE PLATA! ");
  }
}
