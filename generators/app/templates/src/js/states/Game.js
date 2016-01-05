(function() {
  'use strict';

  function Game() {
    
  }

  Game.prototype.create = function() {
    this.input.onDown.add(this.onInputDown, this);
  };

  Game.prototype.update = function() {

  };

  Game.prototype.onInputDown = function() {

  };

  window['<%= projectName %>'] = window['<%= projectName %>'] || {};
  window['<%= projectName %>'].Game = Game;
}());
