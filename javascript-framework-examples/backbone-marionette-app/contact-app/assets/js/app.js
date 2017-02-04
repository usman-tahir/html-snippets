(function () {
  'use strict';
  var ContactManager = new Marionette.Application();

  ContactManager.on('start', function () {
    console.log('Contact Manager has started.');
  });

  ContactManager.start();
}());
