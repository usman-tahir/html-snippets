(function () {
  'use strict';
  var ContactManager = new Marionette.Application();

  ContactManager.StaticView = Marionette.ItemView.extend({
    el: '#main-region',
    template: '#static-template'
  });

  ContactManager.on('start', function () {
    console.log('Contact Manager has started.');
    var staticView = new ContactManager.StaticView();
    staticView.render();
  });

  ContactManager.start();
}());
