var todoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("What's next?");
    } else {
      console.log("My todos:");

      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === false) {
          console.log("[ ]", this.todos[i].todoText);
        } else {
          console.log("[X]", this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    // Every item in the todos array is an object that has text as well as a boolean state for determining completeness.
    this.todos.push({
      todoText: todoText,
      completed: false
    });

    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;

    this.displayTodos();
  },

  toggleCompleted: function(position) {
    var toggle = this.todos[position];

    toggle.completed = !toggle.completed;

    this.displayTodos();
  },

  toggleAll: function() {
    var completedTodos = 0;
    var totalTodos = this.todos.length;

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) { // This being a true comparison instead of false is important for the experience. If this were a false comparison, when some of the items were true then toggleAll would make everything false instead of true. We want to toggle all to true if any of the items are true and then, secondarily, if all items are false then toggleAll will make them true.
        completedTodos++;
      }
    }
    // Case 1: If everything is true, make everything false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Case 2: Else make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1);

    this.displayTodos();
  }
};

var displayTodosBtn = document.getElementById("display-todos-btn");
var toggleAllBtn = document.getElementById("toggle-all-btn");

displayTodosBtn.addEventListener("click", function() {
  todoList.displayTodos();
});

toggleAllBtn.addEventListener("click", function() {
  todoList.toggleAll();
});