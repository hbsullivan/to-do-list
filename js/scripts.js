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