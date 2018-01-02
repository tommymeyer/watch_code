// SECTION 3: Objects, LESSON 2
// var tommy = {
//   name: "Tommy",
//   sayName: function() {
//     console.log(this.name);
//   }
// }

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log("My Todos:", this.todos);
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
    todo.completed = !todo.completed; // SAME AS this.todos[position].completed = !this.todos[position].completed;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice((position), 1);
    this.displayTodos();
  }
};