console.dir(document);
console.dir(document.URL);
console.dir(document.head);
console.dir(document.body);
console.dir(document.title);

document.title = "TaskManager";
console.dir(document.title);

console.log(document.querySelectorAll("*"));
console.log(document.querySelectorAll("*")[5]);

document.querySelectorAll("*")[5].textContent = "TsMngr";
console.dir(document.title);

//Get Element by ID
let ht = document.getElementById("header-title");
console.log(ht);

//textContent: Best for working with plain text, including hidden text, without any HTML tags.
//innerHTML: Allows for HTML content manipulation, including tags and structure.
//innerText: Retrieves or sets only the visible text, affected by CSS styles like display and visibility.

ht.textContent = " Hello";
ht.innerHTML = "<h3>World</h3>";
ht.innerText = "Class";

ht.style.borderBottom = "solid 3px #000";

//Get element by className
let items = document.getElementsByClassName("list-group-item");
// Get elements by tag names
let tags = document.getElementsByClassName("li");
console.log(items);
items[1].textContent = "Task Completed";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "teal";
items[1].style.fontWeight = "bold";

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "yellow";
}

//Query Selector
let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #000";

let input = document.querySelector("input");
input.value = "Enter the task";

let submit = document.querySelector('input[type="submit"]');
submit.value = "send";

let header2 = document.querySelector(".list-group-item");
header2.style.color = "red";

let header3 = document.querySelector(".list-group-item:last-child");
header3.style.color = "green";

let header4 = document.querySelector(".list-group-item:nth-child(2)");
header4.style.color = "blue";

// Query Selector all
let titles = document.querySelectorAll(".title");
console.log(titles);

titles[0].textContent = "Add Task to the list";

// Traversing Dom
let itemList = document.querySelector("#items");
console.log(itemList.parentNode.parentNode);

itemList.parentNode.style.backgroundColor = "#f4f4f4";

//parentNode: Returns the immediate parent node, which can be of any type (element, text, document, etc.).
//It is more general-purpose and works with various node types.

//parentElement: Only returns the parent if it is an HTML element. If the parent is not an element, it returns null
let itemList2 = document.querySelector("#items");
console.log(itemList2.parentElement.parentElement);
itemList.parentElement.style.backgroundColor = "grey";

let childNodes = itemList.childNodes;
console.log(childNodes);
console.log(itemList.children);
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "task Completed";
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "task Completed";
console.log(itemList.lastChild);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
console.log(itemList.previousSibling);

let newDiv = document.createElement("div");
newDiv.className = "Test";

console.log(newDiv);
newDiv.id = "test";
newDiv.setAttribute("title", "test div");

let newDivText = document.createTextNode("this is a test");
newDiv.appendChild(newDivText);
console.log(newDiv);

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);
