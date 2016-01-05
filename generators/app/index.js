'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
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

  makeDirectories: function() {
    mkdirp('src');
    mkdirp('src/css');
    mkdirp('src/js');
    mkdirp('src/js/states');
  },

  makeFiles: function() {
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');

    this.copy('bowerrc', '.bowerrc');
    this.copy('_gruntfile.js', 'gruntfile.js');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('src/assets/preloader.gif', 'src/assets/preloader.gif');
    this.copy('src/css/main.css', 'src/css/main.css');

    this.template('src/js/main.js', 'src/js/main.js');
    this.template('src/js/states/Boot.js', 'src/js/states/Boot.js');
    this.template('src/js/states/Game.js', 'src/js/states/Game.js');
    this.template('src/js/states/Menu.js', 'src/js/states/Menu.js');
    this.template('src/js/states/Preloader.js', 'src/js/states/Preloader.js');
    this.template('src/index.html', 'src/index.html');
  }
});

module.exports = PhaserGenerator;
