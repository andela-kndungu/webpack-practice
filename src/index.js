var babelPolyfill = require('babel-polyfill');
var cats = require('./cats');
var  $ = require('jquery');

$('<h1>Cats</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const cat of cats) {
  $('<li></li>').text(cat).appendTo(ul);
}

