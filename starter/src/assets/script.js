/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/*declares products*/
const products = [
  {
    name: 'Cherries',
    price: 4,
    quantity: 0,
    productId: 100,
    image: "./images/cherry.jpg",
  },

 {
    name: 'Oranges',
    price: 3,
    quantity: 0,
    productId: 101,
    image: "./images/orange.jpg",
  },

  {
    name: 'Strawberries',
    price: 5,
    quantity: 0,
    productId: 102,
    image: "./images/strawberry.jpg",
  }
]
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];
let totalPaid = 0;

/*helper function to replace repeated code and find a product by its ID*/
function findProductById(productId) {
  return products.find(item => item.productId === productId);
}

function findCartItemById(productId) {
  return cart.find(item => item.productId === productId);
}


/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/*if the product is in the cart, increase its quantity. else add it to the cart*/
function addProductToCart(productId) {
  const product = findProductById(productId);
  const cartItem = findCartItemById(productId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
   }
  }
  



/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/*if the product is in the cart, increase its quantity*/
function increaseQuantity(productId) {
  const cartItem = findCartItemById(productId);
  if (cartItem) {
    cartItem.quantity += 1;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/*if the function decreases the quantity to 0, remove the item from the cart*/
function decreaseQuantity(productId) {
  const cartItem = findCartItemById(productId);
  if (cartItem) {
    cartItem.quantity -= 1;
    if (cartItem.quantity === 0) {
      const product = findProductById(productId);
      if (product) {
        product.quantity = 0;
      }
      const index = cart.indexOf(cartItem);
      if (index !== -1) {
        cart.splice(index, 1);
      }
    }
  }
}


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/


/*if the cart quantity is 0, remove the item from the cart, resets quantity in product for testing*/
function removeProductFromCart(productId) {
  const cartItem = findCartItemById(productId);
  if (cartItem) {
    cartItem.quantity = 0;
    const product = findProductById(productId);
    if (product) {
      product.quantity = 0;
    }
    const index = cart.indexOf(cartItem);
    if (index !== -1) {
      cart.splice(index,1);
    }
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

/*calculates cart total by multiplying price and quantity of each item in the cart*/
function cartTotal() {
  let total = 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }

  return total;
}

/* Create a function called emptyCart that empties the products from the cart */
/* Reset product quantities in the products array*/
function emptyCart() {
  for (let item of cart) {
    item.quantity = 0;
  }
  for (let product of products) {
    product.quantity = 0;
  }
  cart.length = 0;
  totalPaid = 0;
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/


/* Accumulates payments, calculates the difference from the cart total, and checks if the balance is paid */
function pay(amount) {
  totalPaid += amount; 
  const difference = totalPaid - cartTotal();
  if (difference >= 0) {
    totalPaid = 0;
  }
  return difference;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
