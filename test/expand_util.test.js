var expect = require('expect.js');
var util   = require('../lib/expand_util');

describe('isJSON', function() {
  it("JSON形式の文字列が渡された場合、trueを返すべき", function() {
    expect(util.isJSON('{"aaa":"bbb"}')).to.be.ok();
  });

  it("JSON形式以外の文字列が渡された場合、falseを返すべき", function() {
    expect(util.isJSON('Dummy')).to.not.be.ok();
  });
});
