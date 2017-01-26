
var app = {};

// Basic Todo model
app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

// List for all the Todos
app.TodoList = Backbone.Collection.extend({
  model: app.Todo,
  localStorage: new Store("backbone-todo")
});

todoList = new app.TodoList();
todoList.create({
  title: 'Learn Backbone\'s Collections!'
});

learnModel = new app.Todo({
  title: 'Learn Models',
  completed: true
});
todoList.add(learnModel);
