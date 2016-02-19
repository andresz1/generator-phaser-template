# generator-phaser-template

Generate HTML5 templates for [Phaser](http://phaser.io/).

## Installation

First, install [Yeoman](http://yeoman.io) and generator-phaser-template using [npm](https://www.npmjs.com/) (we assume you have pre-installed [Node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-phaser-template
```

Then install [Grunt-CLI](http://gruntjs.com/) and [Bower](http://bower.io/) globally.

```bash
npm install -g grunt-cli
npm install -g bower
```

## Usage

Generate your new project:

```bash
yo phaser-template
```

Run a local development server (livereload enabled) with this command:

```bash
grunt
```

Package your game (i.e. minify css, html and js) with:

```bash
grunt build
```

Compress your game in a zip file, ready for [CocoonJS](https://www.ludei.com/cocoonjs/) usage, with:

```bash
grunt zip
```

To add new Phaser states (optional, generator creates basic initial states):

```bash
yo phaser:state
```

### Feedback

Pull requests, feature ideas and bug reports are welcome.

### License

MIT.
