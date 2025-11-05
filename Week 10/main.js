/* 
Not part of DOM - refers to window API 
Available to JS via global variable called "Window"
*/

// window.alert("Hello World");
// alert("Hello World");
// alert(window.location);

const myObj = {
  name: "John doe",
  hobbies: ["eat", "sleep", "code"],
  logName() {
    console.log(this.name);
  },
};

// //Session Storage
// sessionStorage.setItem("MySessionStore", JSON.stringify(myObj));
// const mySessionData = sessionStorage.getItem("MySessionStore");
// console.log(JSON.parse(mySessionData));

// Local Storage
localStorage.setItem("myLocalStore", JSON.stringify(myObj));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);
const key = localStorage.key(0);
console.log(key);
const key1 = localStorage.length;
console.log(key1);
localStorage.clear();
localStorage.removeItem("myLocalStore");
