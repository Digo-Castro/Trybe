// const { test, expect } = require('@jest/globals');
// const assert = require('assert');
// const { describe } = require('yargs');

const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};

module.exports = sum;
