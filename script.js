var todoList = {
  todos: [],

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },

  toggleCompleted: function(position) {
    var toggle = this.todos[position];
    toggle.completed = !toggle.completed; // SAME AS this.todos[position] = !this.todos[position]; // method (completed) shouldn't be saved in variable expression
  },

  deleteTodo: function(position) {
    this.todos.splice((position), 1);
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
  }
};


// Called handlers because we want this object to hold functions that will handle different events.
var handlers = {
  inputReset: function(reset) {
    reset.value = "";
  },

  addTodo: function() {
    var addTodoTextInput = document.getElementById("add-todo-text-input");

    todoList.addTodo(addTodoTextInput.value);

    this.inputReset(addTodoTextInput);

    view.displayTodos();
  },

  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("change-todo-position-input");
    var changeTodoTextInput = document.getElementById("change-todo-text-input");

    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);

    this.inputReset(changeTodoPositionInput);
    this.inputReset(changeTodoTextInput);

    view.displayTodos();
  },

  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById("delete-todo-position-input");

    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);

    this.inputReset(deleteTodoPositionInput);

    view.displayTodos();
  },

  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggle-completed-position-input");

    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);

    this.inputReset(toggleCompletedPositionInput);

    view.displayTodos();
  },

  toggleAll: function () {
    todoList.toggleAll();

    view.displayTodos();
  }
};


var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";

    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      var todoTextWithCompletion = "";

      if (todo.completed === true) {
        todoTextWithCompletion = "[X] " + todo.todoText;
      } else {
        todoTextWithCompletion = "[ ] " + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};