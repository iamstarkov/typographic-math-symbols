# typographic-math-symbols

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> [Use real symbols, not alphabetic characters][rtfm]

Micro module to help eliminate one of the [bad typewriter habits][habits].


## Install

```
npm install --save typographic-math-symbols
```


## Usage

```js
var math = require('typographic-math-symbols');

math(`2 x 3 = 6`); // 2 × 3 = 6
math(`3 - 2 = 1`); // 3 − 2 = 1
```


## Real world examples

Check complex usage with real world examples in [typographic playground][playground].

[playground]: https://github.com/matmuchrapna/typographic-playground


## License

MIT © [Vladimir Starkov](http://vstarkov.com/)

[rtfm]: http://practicaltypography.com/math-symbols.html
[habits]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-math-symbols
[npm-image]: http://img.shields.io/npm/v/typographic-math-symbols.svg

[travis-url]: https://travis-ci.org/matmuchrapna/typographic-math-symbols
[travis-image]: http://img.shields.io/travis/matmuchrapna/typographic-math-symbols.svg

[coveralls-url]: https://coveralls.io/r/matmuchrapna/typographic-math-symbols
[coveralls-image]: http://img.shields.io/coveralls/matmuchrapna/typographic-math-symbols.svg

[depstat-url]: https://david-dm.org/matmuchrapna/typographic-math-symbols
[depstat-image]: https://david-dm.org/matmuchrapna/typographic-math-symbols.svg

[depstat-dev-url]: https://david-dm.org/matmuchrapna/typographic-math-symbols
[depstat-dev-image]: https://david-dm.org/matmuchrapna/typographic-math-symbols/dev-status.svg
