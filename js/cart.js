document.addEventListener("DOMContentLoaded", () => {

  var menu = {
    'burger': 8.99,
    'pizza': 11.99,
    'ribs': 14.99,
    'ice_cream': 7.99
  }

  var cartTotal = 0
  var taxVal = 0
  var totalVal = 0
  let sub = document.getElementById('subtotal')
  let subtext = document.createTextNode('') //)
  sub.appendChild(subtext);
  let taxText = document.createTextNode('') //taxVal)
  let tax = document.getElementById('tax')
  tax.appendChild(taxText)
  let total = document.getElementById('total')
  let totalText = document.createTextNode('') //totalVal)
  total.appendChild(totalText)

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function putInCart(event) {
    let selectedItem = event.target.getAttribute('id')
    let newItem = document.createTextNode(capitalize(selectedItem)) //itemtext
    let newPrice = document.createTextNode(menu[selectedItem]) //pricetext
    let body = document.getElementsByTagName("tbody")[0]
    let tr = document.createElement('tr')
    let tdi = document.createElement('td')
    let tdii = document.createElement('td')
    newItem = tdi.appendChild(newItem)
    newPrice = tdii.appendChild(newPrice)
    tr.appendChild(tdi)
    tr.appendChild(tdii)
    //tdii = tdii.setAttribute("class", "right")
    body.appendChild(tr)
    let p = parseFloat(menu[selectedItem])
    updateTotals(p);
  }

  function updateTotals(inputPrice) {
    let inp = 0
    inp = inputPrice
    console.log(typeof inp)
    cartTotal += inputPrice
    console.log(typeof cartTotal)
    sub.innerHTML = cartTotal.toFixed(2)
    taxVal = (parseFloat(taxVal) + parseFloat(inp * .029)).toFixed(2)
    console.log("why is my taxVal a ", typeof taxVal)
    tax.innerHTML = taxVal
    totalVal = cartTotal + parseFloat(taxVal)
    console.log(typeof totalVal)
    total.innerHTML = totalVal.toFixed(2)
  }

  let burgerBtn = document.getElementById("burger")
  burgerBtn.addEventListener("click", putInCart)
  let iceCreamBtn = document.getElementById("ice_cream")
  iceCreamBtn.addEventListener("click", putInCart)
  let pizzaBtn = document.getElementById("pizza")
  pizzaBtn.addEventListener("click", putInCart)
  let ribsBtn = document.getElementById("ribs")
  ribsBtn.addEventListener("click", putInCart)



  function displayTotal() {

  }
})
