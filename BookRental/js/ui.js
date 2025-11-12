import { addToCart } from "./cart.js";

let allBooks = [];

export function renderBooks(books) {
  allBooks = books;
  const container = document.getElementById("book-list");
  container.innerHTML = "";

  books.forEach((book) => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <img src="${book.cover}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>$${book.price}/week</p>
      <button ${!book.available ? "disabled" : ""} data-id="${book.id}">
        ${book.available ? "Rent" : "Unavailable"}
      </button>
    `;
    container.appendChild(div);
  });

  container.onclick = (e) => {
    if (e.target.tagName === "BUTTON" && e.target.dataset.id) {
      const id = parseInt(e.target.dataset.id);
      const selectedBook = allBooks.find((b) => b.id === id);
      addToCart(selectedBook);
    }
  };

  setupSearch();
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  searchInput.oninput = () => {
    const query = searchInput.value.toLowerCase();
    const filtered = allBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    displayFilteredBooks(filtered);
  };
}

function displayFilteredBooks(books) {
  const container = document.getElementById("book-list");
  container.innerHTML = "";

  books.forEach((book) => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <img src="${book.cover}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>$${book.price}/week</p>
      <button ${!book.available ? "disabled" : ""} data-id="${book.id}">
        ${book.available ? "Rent" : "Unavailable"}
      </button>
    `;
    container.appendChild(div);
  });
}
