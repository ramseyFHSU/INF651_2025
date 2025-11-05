import hello, { howdy as h, namaste as n } from "./greeting.js";
import { posts } from "./posts.js";
import User from "./user.js";
// import * as Greetings from "./greeting.js";

// console.log(Greetings.hello());
// console.log(Greetings.howdy());

console.log(hello());
console.log(h());
console.log(n());

const user1 = new User("user1@gmail.com", "John Doe");
console.log(user1);
console.log(user1.greeting());

// Higher Order functions
/* 
- takes one or more functions as an argument
- returns a function as a result
*/

//Foreach
posts.forEach((post) => {
  console.log(post);
});
console.clear();

//Filter
const filterPosts = posts.filter((post) => {
  return post.userId === 5;
});

console.log(filterPosts);
//Map
const mappedPosts = filterPosts.map((post) => {
  return post.id * 10;
});

console.log(mappedPosts);

//Reducer
const reducePostValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});

console.log(reducePostValue);
