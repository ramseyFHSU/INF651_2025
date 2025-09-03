// Prices for menu items
const burgerPrice = 5.99;
const pizzaPrice = 8.99;
const saladPrice = 6.99;
const drinkPrice = 1.99;

// Function to calculate the order total
function calculateOrder() {
  // Initialize total cost
  let total = 0;

  // Check which items are selected and add their prices
  if (document.getElementById("burger").checked) {
    total += burgerPrice;
  }

  if (document.getElementById("pizza").checked) {
    total += pizzaPrice;
  }

  if (document.getElementById("salad").checked) {
    total += saladPrice;
  }

  if (document.getElementById("drink").checked) {
    total += drinkPrice;
  }

  // Display total before discount
  document.getElementById(
    "totalBeforeDiscount"
  ).innerText = `Total before discount: $${total.toFixed(2)}`;

  // Get discount code
  let discountCode = document.getElementById("discountCode").value.trim();
  let finalTotal = total;
  let discountMessage = "No discount applied.";

  // Apply discount based on code
  if (discountCode === "SAVE10") {
    finalTotal = total * 0.9;
    discountMessage = "10% discount applied.";
  } else if (discountCode === "SAVE20") {
    finalTotal = total * 0.8;
    discountMessage = "20% discount applied.";
  }

  // Display final total and discount message
  document.getElementById(
    "finalTotal"
  ).innerText = `Final Total: $${finalTotal.toFixed(2)}`;
  document.getElementById("discountApplied").innerText = discountMessage;
}
