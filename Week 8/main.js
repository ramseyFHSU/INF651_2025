"use strict";

variable = "ramsey";
console.log(variable);

const myName = "John doe";
myName = "Jane Doe";

// Syntax Errors
// function sayHello() {
// console.log("Hello, world!";
//   }
// SyntaxError: missing ) after argument list

const number = 5;
if ((number = 5)) {
  // Using = instead of ===
  console.log("Number is five.");
}
// SyntaxError: Invalid left-hand side in assignment

function add(a, b) {
  return a + b;
}
// If you forget the closing bracket of the function, you'll get a SyntaxError.

//  Reference Error
console.log(nonExistentVariable);
// ReferenceError: nonExistentVariable is not defined

const num = 10;
num.toUpperCase();
// TypeError: num.toUpperCase is not a function, as toUpperCase is a String method

fetch("https://example.com/doesnotexist")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
// This will result in a network error if the URL is invalid

// <----------------- Logical Errors -------------->

let count = 10;
while (count > 0) {
  console.log(count);
  // forgot to decrease count, so it will run forever
}
// The program will be stuck in an infinite loop because `count` is never decremented.

// Example 2: Incorrect Conditional Logic
function isEven(num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4)); // Returns false, but the logic is incorrect because 4 is even.
// The correct condition should be `num % 2 === 0`.

// Example 3: Incorrect Variable Assignment
function calculateDiscount(price) {
  let discount = 0.1; // 10% discount
  price = price - discount; // Forgot to multiply by price, incorrect logic
  return price;
}
console.log(calculateDiscount(100)); // Expected 90 but got 99.9

function toUppercase(string) {
  if (typeof string !== "string") {
    throw TypeError("Wrong type given, expected a string");
  }
  return string.toUpperCase();
}

function myFunction() {
  const j = 70;
  try {
    allert("The value of j is : " + j);
  } catch (error) {
    alert("Error: " + error.message);
  }
}
console.log(average);

function myFunction() {
  const j = 70;
  try {
    alert("The value of j is : " + j);
  } catch (error) {
    alert("Error: " + error.message);
  } finally {
    alert("Finally: Finally gets executed");
  }
}

function toUpperCase(string) {
  if (typeof string !== string) {
    throw TypeError("Wrong type given, expected a string");
  }
  return string.toUpperCase();
}
toUpperCase(42);

throw 23;
throw "String";

const myError = () => {
  try {
    const myName = "Ramsey";
    myName = "Sam";
  } catch (error) {
    console.log(error);
    console.error(error);
    console.message(error);
    console.table(error);
    console.name(error);
    console.warn(error);
    console.stack(error);
  }
};

myError();
console.log(2 + 3);

function customError(message) {
  this.message = message;
  this.name = "Custom Error";
  this.stack = `${this.name} ${this.message}`;
}

const myError2 = () => {
  try {
    throw new customError("this is a custom error");
  } catch (error) {
    console.log(error);
  }
};

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

throw new CustomError("This is a custom error");

//   function calculateArea(radius)
//     let area = 3.14 * radious * radious;
//     consol.log('The area of the circle is: ' + area);
//     return area;
//   }

calculateAre(5);

function findLargestElement(array) {
  let largest = 0;
  for (let i = 1; i < array.lenght; i++) {
    if (array[i] > largest) {
      largest == array[i];
    }
  }
  //   console.log('Largest element is: ' largest);
  return largest;
}

findLargestElement([2, 3, 10, 6, 4, 8, 1]);
