(function () {
  'use strict';
  var ContactManager = new Marionette.Application();

  ContactManager.StaticView = Marionette.ItemView.extend({
    el: '#main-region',
    template: '#static-template'
  });

  ContactManager.Contact = Backbone.Model.extend({
    defaults: {
      firstName: '',
      lastName: '',
      phoneNumber: 'none'
    }
  });

  ContactManager.ContactItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: '#contact-list-item'
  });

  ContactManager.ContactsView = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: ContactManager.ContactItemView
  });

  ContactManager.on('before:start', function () {
    var RegionContainer = Marionette.LayoutView.extend({
      el: '#app-container',
      regions: {
        main: '#main-region'
      }
    });
    ContactManager.regions = new RegionContainer();
  });

  ContactManager.ContactCollection = Backbone.Collection.extend({
    model: ContactManager.Contact
  });

  ContactManager.on('start', function () {

    var contacts = new ContactManager.ContactCollection([
      {firstName: 'Usman', lastName: 'Tahir', phoneNumber: '7034638027'},
      {firstName: 'John', lastName: 'Doe', phoneNumber: '5555555555'},
      {firstName: 'Jane', lastName: 'Doe', phoneNumber: '5555555556'},
    ]),
      contactsListView = new ContactManager.ContactsView({
        collection: contacts
      });

    ContactManager.regions.main.show(contactsListView);
    console.log('Contact Manager has started.');
  });

  ContactManager.start();
}());
