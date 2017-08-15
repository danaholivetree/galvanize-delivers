document.addEventListener("DOMContentLoaded", () => {

var menu = {
  'burger': 8.99,
  'pizza': 11.99,
  'ribs': 14.99,
  'ice_cream': 7.99
}

function putInCart(event){
  let selectedItem = event.target.getAttribute('id')
  // console.log("clicked " + selectedItem)
  console.log(`clicked ${selectedItem} which costs ${menu[selectedItem]}`)

  shoppingCart.push(selectedItem)
  console.log(shoppingCart)
  cartTotal += menu[selectedItem]
}

let shoppingCart =[] //this is where we'll push ordered items; each arr element will be a key value pair?
let cartTotal = 0
let burgerBtn = document.getElementById("burger")
console.log(burgerBtn)
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
