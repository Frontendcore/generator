[![Build Status](http://www.frontendcore.com/static/img/frontendcore-black.png)](https://github.com/tonipinel/frontendcore)

> Frontendcore uses [Yeoman](http://yeoman.io) to the installation. Yeoman is a Node application that will create the folder structure and get the dependencies for you.


## Installing the dependencies

### Install [Ruby & Sass](http://sass-lang.com/install)

Sass is a css preprocessor. CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.

### Install [Compass](http://sass-lang.com/install)

Compass is an open-source CSS authoring framework which uses the Sass stylesheet language to make writing stylesheets powerful and easy. Experience cleaner markup without presentational classes. Compass mixins make CSS3 easy.

```bash
gem install compass
```

### Install [Susy](http://susy.oddbird.net/)

Sussy is a grid math system for sass. In a world of agile development and super-tablet-multi-magic-laptop-phones, the best layouts can’t be contained in a single framework or technique. CSS Libraries are a bloated mess of opinions about how to do your job. Why let the table-saw tell you where to put the kitchen?

```bash
gem install susy
```

### Install [NodeJS](http://nodejs.org/)

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

### Install yeoman

Yeoman helps you to kickstart new projects, prescribing best practices and tools to help you stay productive. To do so, we provide a generator ecosystem. A generator is basically a plugin that can be run with the `yo` command to scaffold complete projects or useful parts.

```bash
npm install -g yo
```

### Install the generator-frontendcore 

This is the real installation of frontendcore, providing you the structure and everything configured just to start using it.

```bash
npm install generator-frontendcore
```

Finally, initiate the generator:

```bash
$ yo frontendcore
```