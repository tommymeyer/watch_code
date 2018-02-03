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
    var completedTodos = 0,
        totalTodos = this.todos.length;

    this.todos.forEach(function(todo) {
      if (todo.completed === true) { // This being a true comparison instead of false is important for the experience. If this were a false comparison, when some of the items were true then toggleAll would make everything false instead of true. Initially, we want to toggle all the items to true if any of the items are true and then, secondarily, if all items are false then toggleAll will make them true.
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
      ((completedTodos === totalTodos) ? (todo.completed = false) : (todo.completed = true));
    });
    // Case 1: If everything is true, make everything false.
    // if (completedTodos === totalTodos) {
    //   todos.forEach(function(todo) {
    //     todo.completed = false;
    //   });
    // // Case 2: Else make everything true.
    // } else {
    //   todos.forEach(function (todo) {
    //     todo.completed = true;
    //   });
    // }
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
    var changeTodoPosition = document.getElementById("change-todo-position"),
        changeTodoText = document.getElementById("change-todo-text");

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

  deleteTodo: function(position) {
    todoList.deleteTodo(position);

    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul"),
        todosH3 = document.querySelector("h3");

    todosUl.textContent = "";
    todosH3.textContent = "";

    // if (todoList.todos.length === 0) {
    //   todosH3.textContent = "What's next?";
    // } else {
    //   todosH3.textContent = "The List"
    // }

    ((todoList.todos.length === 0) ? (todosH3.textContent = "What's next?") : (todosH3.textContent = "The List"));

    // for (var i = 0; i < todoList.todos.length; i++) {
    //   var todoLi = document.createElement("li");
    //   var todo = todoList.todos[i];

    //   if (todo.completed === false) {
    //     todoLi.textContent = "[ ] " + todo.todoText + " ";
    //   } else {
    //     todoLi.textContent = "[X] " + todo.todoText + " ";
    //   }

    //   todoLi.id = [i];
    //   todoLi.appendChild(this.createDeleteBtn());
    //   todosUl.appendChild(todoLi);
    // }

    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement("li");

      ((todo.completed === false) ? (todoLi.textContent = "[ ] " + todo.todoText + " ") : (todoLi.textContent = "[X] " + todo.todoText + " "));

      todoLi.id = position;
      todoLi.appendChild(this.createDeleteBtn());
      todosUl.appendChild(todoLi);
    }, this);
  },

  createDeleteBtn: function() {
    var deleteBtn = document.createElement("button");

    deleteBtn.className = "delete_btn";

    deleteBtn.textContent = "Delete";

    return deleteBtn;
  },

  setUpEvents: function() {
    var todosUl = document.querySelector("ul");

    todosUl.addEventListener("click", function (evt) {
      var elementClicked = evt.target;

      if (elementClicked.className === "delete_btn") {
        // W&C says to use parseInt to turn the id into a number, but the function works without coercing it. Also, he uses parentNode instead of parentElement, but from what I've read it shouldn't make a difference in this particular situation.
        handlers.deleteTodo(elementClicked.parentElement.id);
      }
    });
  }
};

view.setUpEvents();