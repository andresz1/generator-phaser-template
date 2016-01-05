(function() {
  'use strict';

  function <%= stateName %>() {

  }

  <%= stateName %>.prototype = {

    create: function () {

    },
    update: function () {

    },
    paused: function() {

    },
    render: function() {

    },
    shutdown: function() {

    }

  };

  window['<%= projectName %>'] = window['<%= projectName %>'] || {};
  window['<%= projectName %>'].<%= stateName %> = <%= stateName %>;

}());
