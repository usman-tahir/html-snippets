
/**
 * An event handler for the ListModel model
 */

(function () {
  "use strict";
  
  function Event(sender) {
    this._sender = sender;
    this._listeners = [];
    
    Event.prototype = {
      attach: function (listener) {
        this._listeners.push(listener);
      },
      
      notify: function (args) {
        var index;
        
        for (index = 0; index < this._listeners.length; index += 1) {
          this._listeners[index](this._sender, args);
        }
      }
    };
  }
}());