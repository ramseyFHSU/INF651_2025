// Array to hold contacts
let contacts = [];

// Function to add a contact
function addContact() {
  const nameInput = document.getElementById("name").value.trim();

  if (nameInput !== "") {
    contacts.push({ name: nameInput });
    document.getElementById("name").value = ""; // Clear input fields
    renderContacts();
  } else {
    alert("Both name and phone number are required.");
  }
}

// Function to remove a contact
function removeContact(index) {
  contacts.splice(index, 1); // Remove the contact at the given index
  renderContacts(); // Refresh the displayed list
}

// Function to search for contacts by name
function searchContacts() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue)
  );
  renderContacts(filteredContacts); // Render only filtered contacts
}

// Function to sort contacts alphabetically by name
function sortContacts() {
  contacts.sort((a, b) => a.name.localeCompare(b.name));
  renderContacts();
}

// Function to render (display) contacts
function renderContacts(contactList = contacts) {
  const contactListElement = document.getElementById("contact-list");
  contactListElement.innerHTML = ""; // Clear the list

  contactList.forEach((contact, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${contact.name}
      <button onclick="removeContact(${index})">Remove</button>
    `;
    contactListElement.appendChild(li); // Append contact to list
  });
}
