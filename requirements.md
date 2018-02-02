#V1 Requirements
* **It should have a** place to store todos
* **It should have a** way to display todos
* **It should have a** way to add new todos
* **It should have a** way to change a todo
* **It should have a** way to delete a todo

#V2 Requirements
* **It should have a** function to display todos
* **It should have a** function to add todos
* **It should have a** function to change todos
* **It should have a** function to delete todos

#V3 Requirements
*Put everything up to now onto an object, and that object represents a todo list.*
* **It should** store the todos array on an object.
* **It should have a** displayTodos method.
* **It should have an** addTodo method.
* **It should have a** changeTodo method.
* **It should have a** deleteTodo method.

#V4 Requirements
* todoList.addTodo should add objects.
* todoList.changeTodo should change the todo Text property.
* todoList.toggleCompleted should change the completed property.

#V5 Requirements
* **.displayTodos should** show .todoText
* **.displayTodos should** tell you if .todos is empty
* **.displayTodos should** show .completed

#V6 Requirements
* **.toggleAll:** If everything's true, make everything false.
* **.toggleAll:** Otherwise, make everything true.

#V7 Requirements
* There should be a "Display todos" button and a "Toggle all" button in the app.
* Clicking "Display todos" should run todoList.displayTodos.
* Clicking "Toggle all" should run todoList.toggleAll.

#V8 Requirements
* **It should have working controls for** .addTodo
* **It should have working controls for** .changeTodo
* **It should have working controls for** .deleteTodo
* **It should have working controls for** .toggleCompleted

#V9 Requirements
* There should be an <li> element for every todo
* Each <li> element should contain .todoText
* Each <li> element should show .completed

#V10 Requirements
* There should be a way to create delete buttons
* There should be a delete button for each todo
* Each <li> should have an 'id' that has the todo position
* Delete buttons should have access to the todo 'id'
* Clicking delete should update todolist.todos and the DOM