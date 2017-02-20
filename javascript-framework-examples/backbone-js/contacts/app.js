/*global Backbone, console, $*/
(function () {
  'use strict';
  var ContactModel = Backbone.Model.extend({
    defaults: {
      firstName: '',
      lastName: '',
      age: 0,
      occupation: ''
    }
  }),
    ContactCollection = Backbone.Collection.extend({
      model: ContactModel
    }),
    ContactsDirectory = new ContactCollection();
  
  CONTACTS.forEach(function (contact) {
    console.log('added a new contact: ', JSON.stringify(contact));
    ContactsDirectory.add(new ContactModel(contact));
  });
  
  ContactsDirectory.each(function (contactModel) {
    $('#table-body').append(
      '<tr>' +
        '<td>' + contactModel.get('firstName') + '</td>' +
        '<td>' + contactModel.get('lastName') + '</td>' +
        '<td>' + contactModel.get('age') + '</td>' +
        '<td>' + contactModel.get('occupation') + '</td>' +
        '</tr>'
    );
  });
}());