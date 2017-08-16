document.addEventListener("DOMContentLoaded", () => {

var menu = {
  'burger': 8.99,
  'pizza': 11.99,
  'ribs': 14.99,
  'ice_cream': 7.99
}
let cart = document.getElementById("shoppingCart") //this is the UL we add li to
let newItemLi = ''
let cartTotal = 0
let shoppingCart =[] //this is where we'll push ordered items; each arr element will be a key value pair?
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function putInCart(event){
  let selectedItem = event.target.getAttribute('id')
  newItemLi = document.createElement('li')
  cart = document.getElementById("shoppingCart")
  newItemLi = cart.appendChild(newItemLi)
  cartTotal += menu[selectedItem]
  let text = document.createTextNode(capitalize(selectedItem))
  newItemLi.appendChild(text)
  newItemLi.setAttribute("class", "collection-item")
  let price = document.createElement('div')
  newItemLi.appendChild(price)
  price.setAttribute("class", "secondary-content")
  let priceText = document.createTextNode(menu[selectedItem])
  price.appendChild(priceText)
  console.log(newItemLi)
}

let burgerBtn = document.getElementById("burger")
burgerBtn.addEventListener("click", putInCart)
let iceCreamBtn= document.getElementById("ice_cream")
iceCreamBtn.addEventListener("click", putInCart)
let pizzaBtn = document.getElementById("pizza")
pizzaBtn.addEventListener("click", putInCart)
let ribsBtn = document.getElementById("ribs")
ribsBtn.addEventListener("click", putInCart)






// function getTotal() {
//   for (let i=0; i<shoppingCart.length; i++) {
//     for (var k in shoppingCart[i]) {
//     cartTotal += shoppingCart[i][k] | 0
//     }
//   }
// }

function displayTotal() {

}
})
