# generator-phaser-template v0.1.0

Generate HTML5 templates for [Phaser](http://phaser.io/).

## Installation

First, install [Yeoman](http://yeoman.io) and generator-phaser-template using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-phaser-template
```

You can optionally install [Grunt](http://gruntjs.com/) globally, but you don't have to.

```bash
npm install -g grunt
```

## Usage

Generate your new project:

```bash
yo phaser-template
```

Run a local development server (livereload enabled) with this command:

```bash
npm start
```
or
```bash
grunt
```

Package your game (i.e. minify css, html and js) with:

```bash
npm run build
```
or
```bash
grunt build
```

Compress your game in a zip file, ready for [CocoonJS](https://www.ludei.com/cocoonjs/) usage, with:

```bash
npm run zip
```
or
```bash
grunt zip
```

To add new Phaser states (optional, generator creates basic initial states):

```bash
yo phaser:state
```

## License

MIT © [Andres Alvarez]()
