
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



const containsA = () => {
  const newArray = names.join(',').split('');
  return newArray.filter((letter) => (letter === 'a') || (letter === 'A')).length;
}

assert.deepStrictEqual(containsA(), 20);
//Eu me recuso a usar reduce numa coisa situação de filter.