// Initialize an empty array to store tasks
let tasks = [];

// Function to add a new task to the list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    // Add the new task to the tasks array
    tasks.push(task);

    // Display the updated task list
    renderTasks();

    // Clear the input field
    taskInput.value = "";
  }
}

// Function to display tasks
function renderTasks() {
  const tasksList = document.getElementById("tasks");
  tasksList.innerHTML = "";
  // Use a simple for loop to iterate over tasks and display them
  for (let i = 0; i < tasks.length; i++) {
    tasksList.innerHTML +=
      "<li>" +
      tasks[i] +
      ' <button onclick="removeTask(' +
      i +
      ')">Remove</button></li>';
  }
}

// Function to remove a task
function removeTask(index) {
  tasks.splice(index, 1);
  //splice(1,1)
  renderTasks();
}
