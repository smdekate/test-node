// CommomJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');

const a = require('./7-mind-grenade');

a(1, 2);


sayHi('Susan');
sayHi(names.jhon);
sayHi(names.peter);
