const readline = require('readline-sync')

// console.log("Hello World!");

const firstName = readline.question('Qual é seu primeiro nome? ');
const lastName = readline.question('Qual é seu sobrenome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`\nOlá ${firstName} ${lastName}!\nTudo bem?\nAnotei que sua idade é ${age} anos.`);