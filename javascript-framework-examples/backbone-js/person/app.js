(function () {
  'use strict';

  var PersonModel = Backbone.Model.extend({
    defaults: {
      name: 'none',
      age: 0,
      occupation: 'unemployed'
    },

    work: function () {
      return this.get('name' + ' is working.');
    }
  });

  var PersonView = Backbone.View.extend({
    el: 'ul.people',
    tagName: 'li',
    className: 'person',
    template: _.template('<strong><%= name %></strong> (<%= age %>)'),

    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }
  });

  var person = new PersonModel({
    name: 'John Doe',
    age: 18,
    occupation: 'student'
  });
  console.log(person);
  console.log(person.toJSON());
  console.log(new PersonView({model: person}));
}());
