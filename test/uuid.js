
var uuid = require('..')
  , assert = require('assert');

var id = uuid();

assert.equal(typeof uuid(), 'string');
assert.equal(uuid().split('-').length, 5);
assert.equal(uuid().length, 36);