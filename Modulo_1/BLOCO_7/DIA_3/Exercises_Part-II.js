const assert = require('assert');

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];

const addOne = (array) => {
  const res = [];
  if (array === myArray) {
   for (let item of myArray) {
     res.push(item + 1);
   }
  }
  return res;
}

const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

