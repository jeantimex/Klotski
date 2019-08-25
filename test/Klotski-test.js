var assert = require('chai').assert;
var Klotski = require('../src/klotski');
var games = require('../src/games.json');

describe('Klotski', function() {
  var klotski;

  beforeEach(function() {
    klotski = new Klotski();
  });

  it('should solve the problem', function() {
    var result = klotski.solve(games[0].blocks);
    assert.equal(result[0].step, 81);
    assert.equal(result.length, 118);
  });

  it('should solve the problem with options', function() {
    var result = klotski.solve(games[0].blocks, {
      useMirror: false,
    });
    assert.equal(result[0].step, 81);
    assert.equal(result.length, 118);
  });

  it('should return null when input is invalid', function() {
    var result = klotski.solve(null);
    assert.equal(result, null);
  });

  it('should return null when input is empty', function() {
    var result = klotski.solve([]);
    assert.equal(result, null);
  });

  it('should return null when input contains invalid data', function() {
    var result = klotski.solve(['test']);
    assert.equal(result, null);
  });

  it('should not solve the game', function() {
    var result = klotski.solve(games[33].blocks);
    assert.equal(result, null);
  });
});
