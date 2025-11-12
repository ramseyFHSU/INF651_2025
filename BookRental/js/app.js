import { getBooks } from "./books.js";
import { renderBooks } from "./ui.js";
import { setupCart } from "./cart.js";

document.addEventListener("DOMContentLoaded", async () => {
  const books = await getBooks();
  renderBooks(books);
  setupCart();
});
