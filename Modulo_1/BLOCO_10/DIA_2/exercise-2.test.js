const getUserName = require('./db-exercises-2-and-3');

describe('Testes utilizando promise.', () => {
  test('Testa o caso de usário encontrado.', () => {
    expect.assertions(1)
    return getUserName(5)
      .then(data => expect(data).toBe('Paul'));
  });

  test('Testa o caso de usuário não encontrado.', () => {
    expect.assertions(1)
    return getUserName(1)
    .catch(error => expect(error).toEqual({ error: 'User with id 1 not found.' }))
  });
});

describe('Testes utilizando async/await.', () => {
  test('Testa o caso de usuário encontrado.', async () => {
    const user = await getUserName(5);
    expect(user).toBe('Paul')
  });

  test('Testa o caso de usuário não encontrado.', async () => {
    try {
      await getUserName(7);
    } catch(error) {
      expect(error).toEqual({ error: 'User with id 7 not found.' });
    }
  });
});