// Var, Let, Const - ES6 specification introduced let and const in 2015
// The example below illustrates the behavior of 'var' and hoisting

// Declare a global variable using 'var'
// This variable has global scope because it's declared outside any function
var libraryName = "Hays Library";

function checkBookAvailability() {
  // First, we log the global variable 'libraryName'
  console.log("Welcome to the ", libraryName); // Output: Welcome to the Hays Library

  // 'var' is function-scoped, not block-scoped, so it will be hoisted to the top of the function
  if (true) {
    // Declared inside 'if' block, but accessible throughout the function due to function scope
    var bookTitle = "Harry Potter";
  }

  // Even though 'bookTitle' is declared inside the 'if' block, it's available here due to 'var' function scoping
  console.log("Checking availability of: ", bookTitle); // Output: Checking availability of: Harry Potter

  // Reassign the global 'libraryName' variable
  var libraryName = "Wichita Library"; // Changes the global variable 'libraryName' from "Hays Library" to "Wichita Library"
  console.log(libraryName); // Output: Wichita Library

  /* Hoisting refers to the process where the interpreter moves the declaration 
  of functions, variables, or classes to the top of their scope before the code is executed. 
  However, for variables declared with 'var', the declaration is hoisted but not the initialization. */

  // The following demonstrates 'hoisting' with 'var'
  // Even though 'author' is declared below, it is hoisted to the top of the function, but only the declaration is hoisted, not the assignment.
  console.log("Author: ", author); // Output: undefined (because 'var' declarations are hoisted, but the initialization 'author = "Sam"' hasn't happened yet)

  // Now we assign a value to 'author'
  var author = "Sam"; // 'author' is assigned a value
  console.log("Author: ", author); // Output: Author: Sam
}

console.log(libraryName);
// Call the function to execute the code
checkBookAvailability();
console.log(libraryName);
