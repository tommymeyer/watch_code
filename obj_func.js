// SECTION 3: Objects, LESSON 2
// var tommy = {
//   name: "Tommy",
//   sayName: function() {
//     console.log(this.name);
//   }
// }

var todoList = {
  todos: [ "item 1", "item 2", "item 3" ],
  displayTodos: function() {
    console.log("My Todos:", this.todos);
  },

  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },

  changeTodo: function(position, newValue) {
    this.todos[position - 1] = newValue;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice((position - 1), 1);
    this.displayTodos();
  }
};