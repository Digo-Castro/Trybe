const { test, expect } = require('@jest/globals');
let rand = require('./exercise-1');

test('Modificando a implementação com Mock.', () => {
  rand = jest.fn().mockImplementation((num1, num2) => num1 / num2);

  expect(rand(10, 2)).toBe(5);
  rand.mockRestore();
});