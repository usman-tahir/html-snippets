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
  ContactManager.ContactView = Marionette.ItemView.extend({
    template: '#contact-template',

    events: {
      'click p': 'alertPhoneNumber'
    },

    // Basic event that logs the phoneNumber
    alertPhoneNumber: function () {
      console.log(this.model.escape('phoneNumber'));
    }
  });

  ContactManager.on('before:start', function () {
    var RegionController = Marionette.LayoutView.extend({
      el: '#app-container',
      regions: {
        main: '#main-region'
      }
    });
    ContactManager.regions = new RegionController();
  });

  ContactManager.on('start', function () {

    /*
      Sample contact
    */
    var usman = new ContactManager.Contact({
      firstName: 'Usman',
      lastName: 'Tahir',
      phoneNumber: '(703) 463-8027'
    });

    var usmanView = new ContactManager.ContactView({
      model: usman
    });

    console.log('Contact Manager has started.');
    var staticView = new ContactManager.StaticView();
    // staticView.render();
    ContactManager.regions.main.show(usmanView);
  });

  ContactManager.start();
}());
