var todoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("What's next?");
    } else {
      console.log("My todos:");

      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === false) {
          console.log("[ ] " + this.todos[i].todoText);
        } else if (this.todos[i].completed === true) {
          console.log("[X] " + this.todos[i].todoText);
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
    var todo = this.todos[position];

    todo.completed = !todo.completed;

    this.displayTodos();
  },

  toggleAll: function() {
    var todo = this.todos;

    for (var i = 0; i < todo.length; i++) {
      if (todo[i].completed === true) {
        todo[i].completed = false;
      } else {
        todo[i].completed = true;
      }
    }

    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};


var handlers = {
  addTodo: function() {
    var addTodoInput = document.getElementById("add-todo-text");

    todoList.addTodo(addTodoInput.value);

    addTodoInput.value = "";
  },

  changeTodo: function() {
    var changeTodoPosition = document.getElementById("change-todo-position");
    var changeTodoText = document.getElementById("change-todo-text");

    todoList.changeTodo(Number(changeTodoPosition.value), changeTodoText.value);

    changeTodoPosition.value = "";
    changeTodoText.value = "";
  },

  toggleCompleted: function() {
    var toggleCompletedPosition = document.getElementById("toggle-completed-position");
    
    if (toggleCompletedPosition.value.length > 0) {
      todoList.toggleCompleted(Number(toggleCompletedPosition.value));
    }

    toggleCompletedPosition.value = "";
  },

  toggleAll: function () {
    todoList.toggleAll();
  },

  deleteTodo: function() {
    var deleteTodoPosition = document.getElementById("delete-todo-position");

    todoList.deleteTodo(Number(deleteTodoPosition.value));

    deleteTodoPosition.value = "";
  }
};


var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");

    todosUl.innerText = "";

    for (var i = 0; i < todoList.todos.length; i++) {
      var todo = todoList.todos[i];
      var todoLi = document.createElement("li");
      var todoCompletion = "";

      if (todo.completed === true) {
        
      }

      todoLi.textContent = todoList.todos[i].todoText;
      todosUl.appendChild(todoLi);
    }
  }
}