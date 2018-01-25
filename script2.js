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
    
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1);

    this.displayTodos();
  }
};