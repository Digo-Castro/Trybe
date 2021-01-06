const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const findAnimalsByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.name === name);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui animal com este nome.' });
    }, 100);
  })
);

const findAnimalsByMinAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age >= age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui animal(is) com esta idade ou superior.' });
    }, 100);
  })
);

const getByType = (type) => (
  findAnimalsByType(type).then(list => list)
);

const getByName = (name) => (
  findAnimalsByName(name).then(list => list[0])
);

const getByMinAge = (age) => (
  findAnimalsByMinAge(age).then(list => list)
);

module.exports = {
  getByName,
  getByType,
  getByMinAge,
}
