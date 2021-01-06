const searchEmployee = require('./bonus');

describe('Teste do bonus.', () => {
  test('A função deve existir', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  test('O ID "4456-4" deve retornar o nome do empregado se o segundo parâmetro for "firstName".', () => {
    expect(searchEmployee('4456-4', 'firstName')).toBe('Leila');
  });

  test('O ID "4456-4" deve retornar o sobrenome do empregado se o segundo parâmetro for "lastName".', () => {
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
  });

  test('O ID "4456-4" deve retornar a lista de especialidades do empregado se o segundo parâmetro for "specialities".', () => {
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  });
});