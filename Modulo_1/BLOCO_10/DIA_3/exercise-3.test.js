const { test, expect } = require('@jest/globals');
let rand = require('./exercise-1');

test('Utilizando reimplementação.', () => {
  rand = jest.fn().mockImplementation((num1, num2, num3) => num1 * num2 * num3);

  expect(rand(2, 5, 7)).toBe(70);

  rand.mockImplementation((num) => num * 2);
  expect(rand(2)).toBe(4);
});