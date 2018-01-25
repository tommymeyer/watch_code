var todoList = {
  todos: [],

  displayTodos: function() {
    console.log("My todos:", this.todos);
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

  deleteTodo: function(position) {
    this.todos.splice(position, 1);

    this.displayTodos();
  }
};