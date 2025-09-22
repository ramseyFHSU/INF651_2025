// Using an array literal
let fruits = ["apple", "banana", "cherry"];

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// Not a good idea using const
const fruits2 = ["apple", "banana", "orange"];

let mixedData = ["String", 23, null, true, [1, 2, 3, 4, 5]];

let seaCreatures = ["squid", "shark", "seahorse", "shark"];

console.log(seaCreatures[2]);
console.log(mixedData[4][2]);

console.log(oceans.length);
console.log(mixedData.length);

console.log(fruits[0]); // Outputs: "apple"
console.log(numbers[3]); // Outputs: 4

fruits[1] = "blueberry";
console.log(fruits); // Outputs: ["apple", "blueberry", "cherry"]

console.log(fruits.length); // Outputs: 3

// Using push (to the end)
fruits.push("date");
console.log(fruits); // Outputs: ["apple", "blueberry", "cherry", "date"]

// Using unshift (to the beginning)
fruits.unshift("avocado");
console.log(fruits); // Outputs: ["avocado", "apple", "blueberry", "cherry", "date"]

// Using pop (from the end)
fruits.pop();
console.log(fruits); // Outputs: ["avocado", "apple", "blueberry", "cherry"]

// Using shift (from the beginning)
fruits.shift();
console.log(fruits); // Outputs: ["apple", "blueberry", "cherry"]

let index = fruits.indexOf("blueberry");
console.log(index); // Outputs: 1

// Using a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using a for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// Using forEach method
fruits.forEach(function (fruit) {
  console.log(fruit);
});
