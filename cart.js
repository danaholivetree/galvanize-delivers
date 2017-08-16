document.addEventListener("DOMContentLoaded", () => {

var menu = {
  'burger': 8.99,
  'pizza': 11.99,
  'ribs': 14.99,
  'ice_cream': 7.99
}
//let cart = document.getElementById("shoppingCart") //this is the UL we add li to
let cartTotal= 0.0
let taxVal = 0
let totalVal = 0
let sub = document.getElementById('subtotal')
let subtext = document.createTextNode('')//)
sub.appendChild(subtext);
let taxText = document.createTextNode('')//taxVal)
let tax= document.getElementById('tax')
tax.appendChild(taxText)
let total = document.getElementById('total')
let totalText = document.createTextNode('')//totalVal)
total.appendChild(totalText)

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function putInCart(event){
  let selectedItem = event.target.getAttribute('id')
  let newItem = document.createTextNode(capitalize(selectedItem)) //itemtext
  let newPrice = document.createTextNode(menu[selectedItem]) //pricetext
  let body = document.getElementsByTagName("tbody")[0]
  let tr = document.createElement('tr')
  let tdi = document.createElement('td')
  let tdii = document.createElement('td')
  tdii.setAttribute("class", "right")
  newItem = tdi.appendChild(newItem)
  newPrice = tdii.appendChild(newPrice)
  tr.appendChild(tdi)
  tr.appendChild(tdii)
  body.appendChild(tr)
  let p = parseFloat(menu[selectedItem])
  updateTotals(p);
}

function updateTotals(inputPrice) {

  cartTotal += inputPrice
  sub.innerHTML = cartTotal
  taxVal = (parseFloat(taxVal) + parseFloat((inputPrice*.029))).toFixed(2)
  tax.innerHTML = taxVal
  totalVal = (cartTotal + parseFloat(taxVal)).toFixed(2)
  total.innerHTML = totalVal
}

// function putInCart(event){
//   let selectedItem = event.target.getAttribute('id')
//   newItem = document.createTextNode(capitalize(selectedItem))
//   slot = document.getElementById("first-item")
//   newItem = slot.appendChild(newItem)
//   cartTotal += menu[selectedItem]
//   priceSlot = document.getElementById("first-item-price")
//   price = document.createTextNode(menu[selectedItem])
//   price = priceSlot.appendChild(price)
//   console.log(newItem)
// }

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
