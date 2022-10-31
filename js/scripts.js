// Initialize global "todo"
let todo = new ToDo();

// Business Logic
function createNewTask(task) {
  let newTask = new Task(task, false) ;
  return newTask;
};

function Task(chore, completed) {
  this.chore = chore;
  this.completed = completed;
}

Task.prototype.taskCompleted = function() {
  this.completed = true;
};

function ToDo() {
  this.tasks = {};
  this.currentId = 0;
}

ToDo.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
};

ToDo.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

ToDo.prototype.removeTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
};

// User Interface Logic

function handleTaskAdd() {
  // Retrieve input
  const task = document.getElementById("toDoInput").value;
  // Create task
  todo.addTask(createNewTask(task));
  // Display task
  const todoArea = document.getElementById("todo-list");
  // const ul = document.createElement("ul");
  const li = document.createElement("li");
  const index = todo.currentId;
  // Add task name to li
  li.append(todo.tasks[index].chore);
  // Add item to list
  todoArea.append(li);
  // add list to todo div
  // todoArea.append(ul);
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function() {
    event.preventDefault();
    handleTaskAdd();
  });
})