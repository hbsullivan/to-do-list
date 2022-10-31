function Task(chore, completed) {
  this.chore = chore;
  this.completed = completed;
}

Task.prototype.taskCompleted = function() {
  this.completed = true;
}
