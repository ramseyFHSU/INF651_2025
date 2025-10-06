// Base Cart Object
let Cart = {
  items: [],

  // Method to add an item to the cart
  addItem(item) {
    this.items.push(item);
  },

  // Method to display items in the cart
  displayItems() {
    let cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = ""; // Clear previous content

    this.items.forEach((item) => {
      let itemElement = document.createElement("p");
      itemElement.textContent = `${item.name} - ${item.quantity} units @ $${item.price} each`;
      cartItemsDiv.appendChild(itemElement);
    });
  },

  // Method to calculate the total cost
  calculateTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  },
};

// Inherited Discounted Cart
let DiscountedCart = Object.create(Cart);

// Add a discount property and override the calculateTotal method
DiscountedCart.discount = 0.1; // 10% discount
DiscountedCart.calculateTotal = function () {
  let total = Cart.calculateTotal.call(this);
  return total * (1 - this.discount);
};

// Handle adding item to the cart via UI
document.getElementById("add-item-btn").addEventListener("click", function () {
  let itemName = document.getElementById("item-name").value;
  let itemPrice = parseFloat(document.getElementById("item-price").value);
  let itemQuantity = parseInt(document.getElementById("item-quantity").value);

  if (itemName && itemPrice > 0 && itemQuantity > 0) {
    let newItem = {
      name: itemName,
      price: itemPrice,
      quantity: itemQuantity,
    };

    // Add the item to the Cart (no need to add separately to DiscountedCart)
    Cart.addItem(newItem);

    // Display the updated cart
    Cart.displayItems();

    // Update the total cost and the discounted total
    document.getElementById("total-cost").textContent =
      Cart.calculateTotal().toFixed(2);
    document.getElementById("discounted-total").textContent =
      DiscountedCart.calculateTotal().toFixed(2);

    // Clear input fields
    document.getElementById("item-name").value = "";
    document.getElementById("item-price").value = "";
    document.getElementById("item-quantity").value = "";
  } else {
    alert("Please enter valid item details.");
  }
});
