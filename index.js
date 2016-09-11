/*jshint node:true*/
'use strict';
var App = require('ghost-app'),

    MyApp;

MyApp = App.extend({

    install: function () {},

    uninstall: function () {},

    activate: function () {
      this.ghost.helpers.register('linkpost', this.handleLinkPost);
    },

    deactivate: function () {},

    handleLinkPost: function(options) {  
      var txt = this.html,
          hasLink = txt.indexOf('<!-- link[') >= 0;

      if(hasLink) {
          this.theLink = txt.substring(txt.indexOf('<!-- link[') + 10, txt.indexOf('] -->', txt.indexOf('<!-- link[')));
          return options.fn(this);
      }
      else {
          return options.inverse(this);
      }
    }

});

module.exports = MyApp;
