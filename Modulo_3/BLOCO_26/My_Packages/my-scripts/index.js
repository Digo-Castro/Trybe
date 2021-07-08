const readline = require('readline-sync');

const scripts = [
  {nome: 'Calculadora de IMC', script: './imc.js'},
  {nome: 'Calculadora de Velociadade', script: './speed.js'},
  {nome: 'Jogo da Adivinhação', script: './magic_number.js'},
];

console.log('=== * === MENU === * ===\n');
scripts.map((item, index) => console.log(`${index + 1}. ${item.nome}`));
const choice = readline.questionInt('\nQual das opções acima deseja utilizar: ');
const script = scripts[choice - 1];

if (choice > 0 && choice <= scripts.length) {
  require(script.script);
} else {
  console.log('\nOpção inválida. Bye!\n')
}
