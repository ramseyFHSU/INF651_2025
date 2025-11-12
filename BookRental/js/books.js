export async function getBooks() {
  const response = await fetch("./data/books.json");
  const data = await response.json();
  return data;
}
