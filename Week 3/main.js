let credit = 1000;

credit = credit - 500;

console.log(credit);

// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is a square root of " + theNumber * theNumber);

// let theNumber2 = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber2))
//   console.log("Your number is a square root of " + theNumber2 * theNumber2);
// else console.log("Hey. why didn't you give me a number?");

// let num = Number(prompt("Pick a number"));

// if (num < 10) console.log("small");
// else if (num < 100) console.log("Medium");
// else console.log("Large");

let age = Number(prompt("Enter your age"));

if (age < 16) console.log("You are young to work");
else if (age < 70) console.log("You are eligible to work");
else if (age >= 70 && age <= 100) console.log("You are not eligible to work");
