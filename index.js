var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor( (Math.random() * 100) + 1) 
 var itemObj = {itemName: item, itemPrice: price}
 cart.push(itemObj)
 return item + " has been added to your cart."
 
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var s = "In your cart, you have"
  if(cart.length === 1) {
    s += " " + cart[i].itemName + " at $" + cart[i].itemPrice + "."
    return s
  }
  for(var i = 0; i < cart.length; i++) {
    if(i != cart.length - 1) {
      s += " " + cart[i].itemName + " at $" + cart[i].itemPrice + ","
    }
    else {
      s += " and " + cart[i].itemName + " at $" + cart[i].itemPrice + "."
    }
  }
  return s
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
