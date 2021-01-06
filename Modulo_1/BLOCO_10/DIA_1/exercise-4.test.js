//exercise-4
const myFizzBuzz = require('./exercise-4');

// implemente seus testes aqui
describe('Testes do Exercício 4', () => {
  test('Testa se uma chamada com um número divisível por 3 e 5 tem o retorno esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Testa se uma chamada com um número divisível por 3 tem o retorno esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('Testa se uma chamada com um número divisível por 5 tem o retorno esperado', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test('Testa se uma chamada com um número que não é divisível por 3 e 5 tem o retorno esperado', () => {
    expect(myFizzBuzz(17)).toBe(17);
  });

  test('Testa se uma chamada com parâmetro não número tem o retorno esperado', () => {
    expect(myFizzBuzz('foobar')).toBe(false);
  });
});
