const myObj = {
  name: "John Doe",
  email: "john@gmail.com",
  greeting() {
    console.log(`Hello class this is ${this.name}`);
  },
};

myObj.greeting();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);

// Function to fetch user data
function fetchUserData(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      // Check if the response is okay, then parse JSON
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to fetch data");
    })
    .then((data) => {
      displayUserData(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // API endpoint URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const userCardsContainer = document.getElementById("user-cards");

  // Fetch user data from the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        // Create card element for each user
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            
            <h3>Address</h3>
            <p><strong>Street:</strong> ${user.address.street}</p>
            <p><strong>Suite:</strong> ${user.address.suite}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
            <p><strong>Zipcode:</strong> ${user.address.zipcode}</p>
            
            <h3>Contact</h3>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            
            <h3>Company</h3>
            <p><strong>Company Name:</strong> ${user.company.name}</p>
            <p><strong>Catch Phrase:</strong> ${user.company.catchPhrase}</p>
            <p><strong>Business:</strong> ${user.company.bs}</p>
          `;

        // Append the card to the container
        userCardsContainer.appendChild(userCard);
      });
    })
    .catch((error) => console.error("Error fetching user data:", error));
});
