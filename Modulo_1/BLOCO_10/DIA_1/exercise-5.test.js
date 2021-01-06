const { expect, test } = require("@jest/globals");

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
test('Testa se Obj1 é igual ao Obj2', () => {
  expect(obj1).toEqual(obj2);
});

test('Testa se Obj1 e Obj3 são diferentes', () => {
  expect(obj1).not.toEqual(obj3);
});