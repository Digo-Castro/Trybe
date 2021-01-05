//exercise-6
const encode = require('./encode');

describe('Testes do Exercício 6', () => {
  test('Teste se, na função encode, as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente.', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('bcdfghjklmnpqrstvxyz')).toBe('bcdfghjklmnpqrstvxyz');
  });
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('testando').length).toBe(8);
  });
});
