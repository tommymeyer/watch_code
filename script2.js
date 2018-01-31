var todoList = {
  todos: [],

  addTodo: function(todoText) {
    // Every item in the todos array is an object that has text as well as a boolean state for determining completeness.
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

    toggle.completed = !toggle.completed;
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
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  }
};


var handlers = {
  addTodo: function() {
    var addTodoText = document.getElementById("add-todo-text");

    todoList.addTodo(addTodoText.value);

    addTodoText.value = "";

    view.displayTodos();
  },

  changeTodo: function() {
    var changeTodoPosition = document.getElementById("change-todo-position");
    var changeTodoText = document.getElementById("change-todo-text");

    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);

    changeTodoPosition.value = "";
    changeTodoText.value = "";

    view.displayTodos();
  },

  toggleCompleted: function() {
    var toggleCompletedPosition = document.getElementById("toggle-completed-position");

    todoList.toggleCompleted(toggleCompletedPosition.value);

    toggleCompletedPosition.value = "";

    view.displayTodos();
  },

  toggleAll: function() {
    todoList.toggleAll();

    view.displayTodos();
  },

  deleteTodo: function() {
    var deleteTodoPosition = document.getElementById("delete-todo-position");

    todoList.deleteTodo(deleteTodoPosition.value);

    deleteTodoPosition.value = "";

    view.displayTodos();
  }
};


var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul"),
        todosH3 = document.querySelector("h3");

    todosUl.textContent = "";

    if (todoList.todos.length === 0) {
      todosH3.textContent = "\"What's next?\" ~ President Josiah Bartlet";
    } else {
      todosH3.textContent = "The List";
    }

    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li"),
          todo = todoList.todos[i];

      if (todo.completed === false) {
        todoLi.textContent = "[ ] " + todo.todoText;
      } else {
        todoLi.textContent = "[X] " + todo.todoText;
      }

      todosUl.appendChild(todoLi);
    }

    // for (var i = 0; i < todoList.todos.length; i++) {
    //   var todo = todoList.todos[i],
    //     todoLi = document.createElement("li"),
    //     todoTextWithCompletion = "";

    //   if (todo.completed === false) {
    //     todoTextWithCompletion = "[ ] " + todo.todoText;
    //   } else {
    //     todoTextWithCompletion = "[X] " + todo.todoText;
    //   }

    //   todoLi.textContent = todoTextWithCompletion;
    //   todosUl.appendChild(todoLi);
    // }
  }
};