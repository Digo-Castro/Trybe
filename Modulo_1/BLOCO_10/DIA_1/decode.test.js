//exercise-6

const decode = require('./decode');

describe('Testes do Exercício 6', () => {
  test('Teste se, na função decode, os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente.', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('67890')).toBe('67890');
  });
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('t2st1nd4').length).toBe(8);
  });
});
