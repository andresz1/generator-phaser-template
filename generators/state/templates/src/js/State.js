(function() {
  'use strict';

  function <%= stateName %>() {

  }

  <%= stateName %>.prototype.create = function() {

  };

  <%= stateName %>.prototype.update = function() {

  };

  <%= stateName %>.prototype.paused = function() {

  };

  <%= stateName %>.prototype.render = function() {

  };

  <%= stateName %>.prototype.shutdown = function() {

  };

  window['<%= projectName %>'] = window['<%= projectName %>'] || {};
  window['<%= projectName %>'].
  <%= stateName %> = <%= stateName %>;

}());
