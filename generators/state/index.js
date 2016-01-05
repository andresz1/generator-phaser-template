'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var StateGenerator = yeoman.generators.Base.extend({
  init: function() {
    this.pkg = require('../../package.json');
    this.conflicter.force = true;
    this.projectName = this.dest.readJSON('package.json').name;
  },

  promptUser: function() {
    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'stateName',
      message: 'What\'s the name of your new state?'
    }];

    this.prompt(prompts, function(props) {
      this.stateName = props.stateName;
      done();
    }.bind(this));
  },

  makeFile: function() {
    this.template('src/js/State.js', 'src/js/states/' + this.stateName + '.js');

    var path = "src/index.html";
    var file = this.readFileAsString(path);
    var needle = "<!-- yo phaser:state new-state-files-put-here -->";

    file = file.replace(needle, '<script src="js/' + this.stateName + '.js"></script>\n  ' + needle);
    this.write(path, file);

    path = "src/js/main.js";
    file = this.readFileAsString(path);
    needle = "/* yo phaser:state new-state-files-put-here */";

    var stateNameCap = this.stateName.charAt(0).toUpperCase() + this.stateName.slice(1);

    file = file.replace(needle, "game.state.add('" + this.stateName + "', ns." + stateNameCap + ");\n  " + needle);
    this.write(path, file);
  }
});

module.exports = StateGenerator;
