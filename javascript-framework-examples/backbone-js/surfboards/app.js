(function () {

  'use strict';

  var Surfboard = Backbone.Model.extend({
    defaults: {
      manufacturer: '',
      model: '',
      stock: 0,
      unitPrice: 0.00
    }
  });

  var SurfboardsCollection = Backbone.Collection.extend({
    model: Surfboard
  });

  var boardOne = new Surfboard({
    manufacturer: 'Channel Islands',
    model: 'Whip',
    stock: 12,
    unitPrice: 40.00
  }),
    boardTwo = new Surfboard({
      manufacturer: 'Riptide',
      model: 'Cruiser',
      stock: 10,
      unitPrice: 55.00
    }),
    boardThree = new Surfboard({
      manufacturer: 'Windy',
      model: 'Sailor',
      stock: 5,
      unitPrice: 75.00
    });

  // Add the surfboards
  var Surfboards = new SurfboardsCollection();
  Surfboards.add(boardOne);
  Surfboards.add(boardTwo);
  Surfboards.add(boardThree);

  Surfboards.each(function (surfboard) {
    $('#table-body').append(
      '<tr>' +
        '<td>' + surfboard.get('manufacturer') + '</td>' +
        '<td>' + surfboard.get('model') + '</td>' +
        '<td>' + surfboard.get('stock') + '</td>' +
        '<td>$' + surfboard.get('unitPrice') + '</td>' +
      '</td>'
    );
  });


}());
