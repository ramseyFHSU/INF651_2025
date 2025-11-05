// callback
// function firstFun(parameters, callback) {
//   //do something
//   callback();
// }

// //AKA callback hell
// firstFun(parameters, function () {
//   //do something
//   secondFun(parameters, function () {
//     //do something
//     thirdFun(parameters, function () {
//       //do something
//     });
//   });
// });

// promises
// Resolve, reject, pending
// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes resolved the promise!");
//   } else {
//     reject("No rejected the promise");
//   }
// });

// console.log(myPromise);

// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const anotherPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("My another promise resolved");
//   }, 3000);
// });

// anotherPromise.then((value) => console.log(value));

// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     //   console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

// Async/Await
const myUsers = {
  usersList: [],
};

const coolFun = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const anotherFun = async () => {
  const data = await coolFun();
  console.log(data);
  myUsers.usersList = data;
  console.log(myUsers.usersList);
};

anotherFun();
