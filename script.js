var todoList = {
  todos: [],
  displayTodos: function() {
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

  addTodo: function(todoText) {
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
    toggle.completed = !toggle.completed; // SAME AS this.todos[position] = !this.todos[position]; // method (completed) shouldn't be saved in variable expression
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice((position), 1);
    this.displayTodos();
  },

  toggleAll: function() {
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

// Called handlers because we want this object to hold functions that will handle different events.
var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },

  toggleAll: function() {
    todoList.toggleAll();
  },

  addTodo: function() {
    var addTodoTextInput = document.getElementById("add-todo-text-input");

    todoList.addTodo(addTodoTextInput.value);

    addTodoTextInput.value = "";
  },

  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("change-todo-position-input");
    var changeTodoTextInput = document.getElementById("change-todo-text-input");

    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);

    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
  }
};