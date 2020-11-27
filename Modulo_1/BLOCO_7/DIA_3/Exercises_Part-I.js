const assert = require('assert');

// === QUESTAO 1 ===

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// TESTES
assert.strictEqual(sum(4, 5), 9, 'The sum must be 9');
assert.strictEqual(sum(0, 0), 0, 'The sum must be 0');
assert.throws(() => {sum(4, '5');});
assert.throws(() => {sum(4, '5');}, /^Error: parameters must be numbers$/);


// === QUESTAO 2 ===

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// TESTES
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'The array is not the expected result');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'The array must not present the expected result');


// === QUESTAO 3 ===

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// TESTES
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'The array is not the expected result');
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'The array must not present the expected result');
assert.strictEqual((myRemoveWithoutCopy([1, 2, 3, 4], 2).length), 3, 'It is not the expected result');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'The array is not the expected result');


// === QUESTAO 4 ===

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// TESTES
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'The result expected is "fizzbuzz"');
assert.strictEqual(myFizzBuzz(9), 'fizz', 'The result expected is "fizz"');
assert.strictEqual(myFizzBuzz(10), 'buzz', 'The result expected is "buzz"');
assert.strictEqual(myFizzBuzz(22), 22, 'The result expected is 22');
assert.strictEqual(myFizzBuzz('Digo'), false, 'The parameter must be a number');



// === QUESTAO 5 ===

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// TESTES
assert.deepStrictEqual(obj1, obj2, 'The parameters must be the same');
assert.notDeepStrictEqual(obj1, obj3, 'The parameters not must be the same');
assert.notDeepStrictEqual(obj2, obj3, 'The parameters not must be the same');
