const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns the input string if the string length is less than the column width', () => {
    expect(wrap("Test String", 20)).to.equal("Test String")
  });
  it('Removes trailing spaces in front', () => {
    expect(wrap(" new line ", 10)).to.equal("new line")
  });
  it('Wraps the word to next line if last word is cut off', () => {
    expect(wrap("wrap this word", 10)).to.equal("wrap this\nword");
  })
  it('Returns lines shorter than the column width', () => {
    expect(wrap("Test String functions for logically grouping your test specs", 20)).to.equal("Test String\nfunctions for\nlogically grouping\nyour test specs")
  })
});
