// Declare a global variable using 'let' with block scope
let festivalName = "October Fest"; // Block-scoped global variable

function buyTickets() {
  // Access the global variable 'festivalName' inside the function
  console.log(`Welcome to ${festivalName} ticket counter`); // Output: Welcome to October Fest ticket counter

  // 'let' is block-scoped, so 'ticketPrice' is only accessible within the 'if' block
  if (true) {
    let ticketPrice = 50; // Block-scoped variable inside 'if' block
    console.log(`Standard ticket price: $${ticketPrice}`); // Output: Standard ticket price: $50
  }

  // Reassign the global variable 'festivalName'
  festivalName = "Thanks Giving"; // Changes the value of the global 'festivalName'

  // Trying to access 'ticketPrice' here would result in an error because it is block-scoped
  // Uncommenting the next line would throw a ReferenceError: ticketPrice is not defined
  console.log(ticketPrice); // Error: ticketPrice is not accessible outside the 'if' block

  // Accessing 'festivalName' after reassignment
  console.log(festivalName); // Output: Thanks Giving

  // Uncommenting the next line would result in an error because 'bandName' is not hoisted
  console.log(bandName); // Error: Cannot access 'bandName' before initialization

  let bandName = "The RockStars"; // Block-scoped variable
  console.log(`Band performed is: ${bandName}`); // Output: Band performed is: The RockStars
}

// Log the global 'festivalName' before the function is called
console.log(festivalName); // Output: October Fest

// Call the function to execute the code
buyTickets();
console.log(festivalName);
