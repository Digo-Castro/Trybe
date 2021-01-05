//exercise-2
const myRemove = require('./exercise-2');

// implemente seus testes aqui
describe('Testes Exercício 2', () => {
  test('Testa se a função retorna o array [1 ,2 , 3, 4] sem o número 3.', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Testa se a função retorna o array [1 ,2 , 3, 4] não retorna o  mesmo array.', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Testa se o array passado por parâmetro não sofreu alterações', () => {
    let originalArray = [1, 2, 3, 4];
    myRemove(originalArray, 3);
    expect(originalArray).toEqual([1, 2, 3, 4]);
  });

  test('Testa se a função retorna o array [1 ,2 , 3, 4] quando 5 é parâmetro.', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
