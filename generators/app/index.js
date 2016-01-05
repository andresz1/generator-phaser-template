'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var folderName = path.basename(process.cwd());

var PhaserGenerator = yeoman.generators.Base.extend({
  init: function() {
    this.pkg = require('../../package.json');

    this.npmInstall();
    this.bowerInstall();
  },

  promptUser: function() {
    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'What\'s the name of your application',
      default: folderName
    }, {
      type: 'list',
      name: 'phaserBuild',
      message: 'Which version of Phaser do you want?',
      choices: [{
        value: 'phaser.min.js',
        name: 'Arcade Physics + P2 Physics (Default)'
      }, {
        value: 'custom/phaser-arcade-physics.min.js',
        name: 'Arcade Physics'
      }, {
        value: 'custom/phaser-ninja-physics.min.js',
        name: 'Ninja Physics'
      }, {
        value: 'custom/phaser-no-physics.min.js',
        name: 'No Physics'
      }]
    }];

    this.prompt(prompts, function(props) {
      this.projectName = props.projectName;
      this.phaserBuild = props.phaserBuild;
      done();
    }.bind(this));
  },

  app: function() {
    this.mkdir('src');
    this.mkdir('src/css');
    this.mkdir('src/js');

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');

    this.copy('bowerrc', '.bowerrc');
    this.copy('_gruntfile.js', 'gruntfile.js');
  },

  projectfiles: function() {
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');

    this.copy('src/assets/preloader.gif', 'src/assets/preloader.gif');
    this.copy('src/css/main.css', 'src/css/main.css');

    this.template('src/js/boot.js', 'src/js/boot.js');
    this.template('src/js/game.js', 'src/js/game.js');
    this.template('src/js/main.js', 'src/js/main.js');
    this.template('src/js/menu.js', 'src/js/menu.js');
    this.template('src/js/preloader.js', 'src/js/preloader.js');
    this.template('src/index.html', 'src/index.html');
  }
});

module.exports = PhaserGenerator;
