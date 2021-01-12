const { expect } = require('@jest/globals');
let rand = require('./exercise-1');

test('Teste de chamadada função rand em Mock.', () => {
  rand = jest.fn().mockReturnValue(10);
  
  rand();
  expect(rand).toHaveBeenCalled();
  expect(rand()).toBe(10);
  expect(rand).toHaveBeenCalledTimes(2)
});