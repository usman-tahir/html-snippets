
/**
 * The View, which presents the model and provides the UI events.
 * The controller is attached to these events to handle user
 * interaction
 */

(function () {
  "use strict";
  
  function ListView(model, elements) {
    this._model = model;
    this._elements = elements;
    
    this.listModified = new Event(this);
    this.addButtonClicked = new Event(this);
    this.deleteButtonClicked = new Event(this);
    
    var _this = this;
    
    // Attach model listeners
    this.model.itemAdded.attach(function () {
      _this.rebuildList();
    });
    
    this.model.itemRemoved.attach(function () {
      _this.rebuildList();
    });
    
    // Attach listeners to the HTML controls
    this._elements.list.change(function (e) {
      _this.listModified.notify({index: e.target.selectedIndex});
    });
    
    this._elements.addButton.click(function (e) {
      _this.addButtonClicked.notify();
    });
    
    this._elements.deleteButton.click(function (e) {
      _this.deleteButtonClicked.notify();
    });
  }
  
  ListView.prototype = {
    show: function () {
      this.rebuildList();
    },
    
    rebuildList: function () {
      var list,
        items,
        keys;
      
      list = this._elements.list;
      list.html = "";
      
      items = this._model.getItems();
      for (key in items) {
        if (items.hasOwnProperty(key)) {
          list.append($("<option>" + items[key] + "</option>"));
        }
      }
      this._model.setSelectedIndex(-1);
    }
  };
}());