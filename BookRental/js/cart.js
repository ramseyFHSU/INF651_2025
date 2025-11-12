let cart = [];

export function addToCart(book) {
  const existing = cart.find((item) => item.id === book.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...book, quantity: 1 });
  }
  updateCartUI();
}

export function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCartUI();
}

export function setupCart() {
  document.getElementById("checkout").addEventListener("click", checkout);
}

function updateCartUI() {
  const cartList = document.getElementById("cart-list");
  const totalEl = document.getElementById("total");

  if (!cartList) return;

  // Render each book in cart
  cartList.innerHTML = cart
    .map(
      (item) => `
      <li>
        ${item.title} - $${item.price} (${item.quantity})
        <button class="remove" data-id="${item.id}">x</button>
      </li>
    `
    )
    .join("");

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalEl.textContent = `Total: $${total}`;

  // Handle remove button click
  cartList.querySelectorAll(".remove").forEach((btn) => {
    btn.addEventListener("click", () =>
      removeFromCart(parseInt(btn.dataset.id))
    );
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert(`You have rented ${cart.length} books.`);
  cart = [];
  updateCartUI();
}
