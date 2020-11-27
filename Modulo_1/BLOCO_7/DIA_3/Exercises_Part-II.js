const assert = require('assert');

// === Questão 1 ===

const myArray1 = [31, 57, 12, 5];
const unchanged1 = [31, 57, 12, 5];
const expected1 = [32, 58, 13, 6];

const addOne = (array) => {
  const res = [];
  if (array === myArray1) {
   for (let item of myArray1) {
     res.push(item + 1);
   }
  }
  return res;
}

const output1 = addOne(myArray1);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output1, expected1);
assert.deepStrictEqual(myArray1, unchanged1);


// === QUESTÃO 2 ===

const wordLengths = (str) => {
  const output2 = [];
  for (let item of str) {
    output2.push(item.length)
  }
  return output2;
}

const words2 = ['sun', 'potato', 'roundabout', 'pizza'];
const expected2 = [3, 6, 10, 5];
const output2 = wordLengths(words2);

assert.strictEqual(typeof wordLengths, 'function');
assert.deepStrictEqual(output2, expected2);


// === QUESTÃO 3 ===

const sumAllNumbers = (numbers) => {
  let sum = 0;
  for ( let item of numbers) {
    sum += item;
  }
  return sum;
}

const numbers3 = [9, 23, 10, 3, 8];
const expected3 = 53;
const output3 = sumAllNumbers(numbers3);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output3, expected3);


// === QUESTÃO 4 ===

const findTheNeedle = (array, str) => array.indexOf(str);

let words4 = ['house', 'train', 'slide', 'needle', 'book'];
let expected4 = 3;
let output4 = findTheNeedle(words4, 'needle');
assert.strictEqual(output4, expected4);

words4 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = 0;
output4 = findTheNeedle(words4, 'plant');
assert.strictEqual(output4, expected4);

words4 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = -1;
output4 = findTheNeedle(words4, 'plat');
assert.strictEqual(output4, expected4);


// === QUESTÃO 5 ===

const greetPeople = (people) => {
  let greeting = 'Hello';
  const res = [];
  for (const person of people) {
    res.push(`${greeting} ${person}`);
  }
  return res;
};

const parameter5 = ['Irina', 'Ashleigh', 'Elsa'];
const result5 = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter5), result5);



// === QUESTÃO 6 ===

const removeVowels = (word) => {
  const characters = word.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const results = [];
  let num = 1;
  for (let letter of characters) {
    if (vowels.includes(letter) === true) {
      results.push(num);
      num += 1;
    } else {
      results.push(letter);
    }
  }
  return results.join('');
};


const parameter6 = 'Dayane';
const result6 = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(removeVowels('Dayane'), result6);


// === QUESTÃO 7 ===

const greaterThanTen = (array) => {
  const results = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results.push(array[i]);
    }
  }
  return results;
};

const parameter7 = [4, 10, 32, 9, 21];
const result7 = [32, 21];

assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter7), result7);


// === QUESTÃO 8 ===

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter8 = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result8 = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter8), result8);
