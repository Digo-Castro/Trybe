//exercise-3
const myRemoveWithoutCopy = require('./exercise-3');

// implemente seus testes aqui
describe('Testes do Exercício 3', () => {
  test('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Testa se o array passado por parâmetro sofreu alterações', () => {
    let originalArray = [1, 2, 3, 4];
    myRemoveWithoutCopy(originalArray, 3)
    expect(originalArray).toEqual([1, 2, 4]);
  });

  test('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
