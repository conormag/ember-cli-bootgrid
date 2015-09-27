/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-bootgrid',

  included: function(app) {
    this._super.included(app);

    // Import unminified css and js
    app.import(path.join(app.bowerDirectory,  '/jquery.bootgrid/dist/jquery.bootgrid.min.css'));
    app.import(path.join(app.bowerDirectory, '/jquery.bootgrid/dist/jquery.bootgrid.min.js'));
  }

};


