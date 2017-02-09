(function () {

  'use strict';

  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'show/:id': 'show'
    },

    index: function () {
      $(document.body).append('The index route has been called.');
    },

    show: function (id) {
      $(document.body).append('The show route has been called, with an ID of ', id);
    }
  });

  new App.Router;
  Backbone.history.start();
}());
