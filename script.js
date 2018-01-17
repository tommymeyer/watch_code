var todoList = {
  todos: [],
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log("What's next?");
    } else {
      console.log("My Todos:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("[X]", this.todos[i].todoText);
        } else {
          console.log("[ ]", this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  toggleCompleted: function (position) {
    var toggle = this.todos[position];
    toggle.completed = !toggle.completed; // SAME AS this.todos[position] = !this.todos[position]; // method (completed) shouldn't be saved in variable expression
    this.displayTodos();
  },

  deleteTodo: function (position) {
    this.todos.splice((position), 1);
    this.displayTodos();
  },

  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // If everything is true, make everything false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

var displayTodosBtn = document.getElementById("displayTodosBtn");
var toggleAllBtn = document.getElementById("toggleAllBtn");

displayTodosBtn.addEventListener("click", function () {
  todoList.displayTodos();
});

toggleAllBtn.addEventListener("click", function () {
  todoList.toggleAll();
});