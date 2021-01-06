const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('Verifica se a função aplica uppercase em todos os caracteres.', (done) => {
  uppercase('trybe', (str) => {
    expect(str).toBe('TRYBE');
    done();
  });
});