/*
0 - jan
1 - feb
2 - mar
3 - april
4 - may
*/

/* Splice - modifies the original array by removing, replacing, or adding elements. 
The syntax can be confusing because it allows for multiple operations with a single method.*/

let months = ["jan", "mar", "april"];

months.splice(1, 0, "feb");

months.push("apple");

console.log(months);

months.splice(5, 2, "may", "june");
console.log(months);

// Slice Example (does not modify original array)
let slicedMonths = months.slice(1, 3); // Creates a new array from index 1 to 3 (excluding 3)
console.log(slicedMonths); // ['Feb', 'March']
console.log(months);

let rev = months.reverse();
console.log(rev);

months.unshift("jan");
console.log(months);

console.log(months.indexOf("jan"));
console.log(months.lastIndexOf("jan"));

console.log(months.sort());

let numbers = [12, 5, 31, 6, 44, 90];
// console.log(numbers.sort());

// console.log(
//   numbers.sort(function (a, b) {
//     return a - b;
//   })
// );

// console.log(
//   numbers.sort((a, b) => {
//     a - b;
//   })
// );

console.log(months.join(", "));

let merged = [...months, ...numbers];
console.log(merged);

let newMonths = months;
newMonths.push("test");
console.log(months);

let clonedArray = [...months];
console.log(clonedArray);

clonedArray.push("test2");
console.log(clonedArray);
console.log(months);

// Spreading a string into an array
let str = "HelloWorld!";
let chars = [...str];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

for (i = 0; i < months.length; i++) {
  console.log(months[i]);
}

months.forEach((element, index) => {
  console.log(`index of ${element} is ${index}`);
});

let a = numbers.forEach((item) => item * 3);

console.log(a);

let b = numbers.map((item) => item * 3); // map() returns a new array
console.log(b);

b.sort((a, b) => a - b);

console.log(b);

let numbers2 = [1, 2, 3, 4, 5];
let evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
