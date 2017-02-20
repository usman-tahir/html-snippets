/*global Backbone, console*/
(function () {
  'use strict';
  var ContactModel = Backbone.View.extend({
    defaults: {
      firstName: '',
      lastName: '',
      age: 0,
      occupation: ''
    }
  }),
    contacts = [
      {
        firstname: 'John',
        lastName: 'Doe',
        age: 18,
        occupation: 'Student'
      },
      {
        firstname: 'Jane',
        lastName: 'Doe',
        age: 18,
        occupation: 'Student'
      },
      {
        firstName: 'John',
        lastName: 'Public',
        age: 40,
        occupation: 'Farmer'
      }
    ],
    ContactCollection = Backbone.Collection.extend({}),
    ContactsDirectory = new ContactCollection();
  
  contacts.forEach(function (contact) {
    console.log('added a new contact: ', JSON.stringify(contact));
    ContactsDirectory.add(new ContactModel(contact));
  });
}());