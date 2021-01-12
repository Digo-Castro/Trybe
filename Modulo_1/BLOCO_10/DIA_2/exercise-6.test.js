const getAnimals = require('./exercise-6');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimals.getByName('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimals.getByName('Bob').catch(error =>
        expect(error).toEqual({ error: 'Não possui animal com este nome.' })
      );
    });
  });
});

describe('Testando promise - findAnimalByMinAge', () => {
  describe('Quando existe o animal(is) com a idade procurada', () => {
    test('Retorne uma lista de animais', () => {
      expect.assertions(1);
      return getAnimals.getByMinAge(2).then(animal => {
        expect(animal).toEqual([ { name: 'Soneca', age: 2, type: 'Dog' }, { name: 'Preguiça', age: 5, type: 'Cat' } ]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimals.getByMinAge(8).catch(error =>
        expect(error).toEqual({ error: 'Não possui animal(is) com esta idade ou superior.' })
      );
    });
  });
});
