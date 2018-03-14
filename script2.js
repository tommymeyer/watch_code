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
    var todo = this.todos[position];

    todo.completed = !todo.completed;
  },

  toggleAll: function() {
    var todo = this.todos,
        completedTodos = 0,
        totalTodos = this.todos.length;

    for (var i = 0; i < totalTodos; i++) {
      if (todo[i].completed === true) {
        completedTodos++;
      }
    }

    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        todo[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        todo[i].completed = true;
      }
    }
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  }
};


var handlers = {
  addTodo: function() {
    var addTodoInput = document.getElementById("add-todo-text");

    todoList.addTodo(addTodoInput.value);

    addTodoInput.value = "";

    view.displayTodos();
  },

  changeTodo: function() {
    var changeTodoPosition = document.getElementById("change-todo-position");
    var changeTodoText = document.getElementById("change-todo-text");

    todoList.changeTodo(Number(changeTodoPosition.value), changeTodoText.value);
    
    changeTodoPosition.value = "";
    changeTodoText.value = "";

    view.displayTodos();
  },

  toggleCompleted: function () {
    var toggleCompletedPosition = document.getElementById("toggle-completed-position");

    if (toggleCompletedPosition.value.length > 0) {
      todoList.toggleCompleted(Number(toggleCompletedPosition.value));
    }

    toggleCompletedPosition.value = "";

    view.displayTodos();
  },

  toggleAll: function () {
    todoList.toggleAll();

    view.displayTodos();
  },

  deleteTodo: function(position) {
    todoList.deleteTodo(position);

    view.displayTodos();
  }
};


var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    var todosH3 = document.querySelector("h3");
    
    todosUl.innerText = "";

    if (todoList.todos.length === 0) {
      todosH3.textContent = "What's next?";
    } else {
      todosH3.textContent = "Todo List";
    }

    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      todoLi.textContent = todo.todoText;

      if (todo.completed === false) {
        todoLi.textContent = "[ ] " + todo.todoText + " ";
      } else if (todo.completed === true) {
        todoLi.textContent = "[X] " + todo.todoText + " ";
      }

      todoLi.id = i;
      todoLi.appendChild(view.createDeleteBtn());
      todosUl.appendChild(todoLi);
    }
  },

  createDeleteBtn: function() {
    var deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Exterminate!";

    deleteBtn.className = "delete_btn";

    return deleteBtn;
  },

  setUpEventListeners: function() {
    var todosUl = document.querySelector("ul");
    var addTodoTextInput = document.getElementById("add-todo-text");
    var todoLi = document.createElement("li");
    
    todosUl.addEventListener("click", function (e) {
      var eleClicked = e.target;

      if (eleClicked.className === "delete_btn") {
        handlers.deleteTodo(parseInt(eleClicked.parentNode.id));
      }
    });


    function inputLength() {
      return addTodoTextInput.value.length;
    };

    function createListEl() {
      todoList.addTodo(addTodoTextInput.value);

      addTodoTextInput.value = "";

      view.displayTodos();
    };

    function addListAfterClick() {
      if (inputLength() > 0) {
        createListEl();
      }
    };

    function addListAfterKeyPress(e) {
      if (inputLength() > 0 && e.which === 13) {
        createListEl();
      }
    };

    addTodoTextInput.addEventListener("keyup", addListAfterKeyPress);
  }
}

view.setUpEventListeners();



