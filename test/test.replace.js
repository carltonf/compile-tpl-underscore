var assert = require('assert');

var compiler = require('../');

describe('simple js replace should work', function(){
  it('one tag should work', function(){
    var template = '<h1><%= title %></h1>';
    var compiledFunc = eval( compiler(template) );

    var compiled = compiledFunc ({ title: 'story'});

    assert.equal('<h1>story</h1>', compiled);
  })
});
