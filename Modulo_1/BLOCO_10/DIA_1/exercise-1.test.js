//exercise-1
const sum = require('./exercise-1');

// implemente seus testes aqui
describe('Testes do Exercício 1', () => {
  test('Testa se a soma de 4 e 5 é igual a 9.', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Testa se a soma de 0 e 0 é igual a 0.', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Testa se é lançado um erro quando os parâmetros são 4 e "5".', () => {
    expect(() => { sum(4, '5'); }).toThrow(/parameters must be numbers/);
  }); 
});
