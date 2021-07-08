const readline = require('readline-sync');

const IMCCalc = () => {
  console.log('\n=== Calculadora de IMC ===\n');
  const weight = readline.questionFloat('Informe seu peso: ');
  const height = readline.questionFloat('Informe sua altura: ');
  const imc = (weight/(height ^ 2)).toFixed(2);
  let infos = '';
  
 if (imc < 18.5) {
      infos = 'Abaixo do peso (magreza)';
 } else if (imc >= 18,5 && imc < 25) {
      infos = 'Peso normal.';
 } else if (imc >= 25 && imc < 30) {
      infos = 'Acima do peso (sobrepeso)';
 } else if (imc >= 30 && imc < 35) {
      infos = 'Obesidade Grau I';
 } else if (imc >= 35 && imc < 40) {
      infos = 'Obesidade Grau II';
 } else if (imc >= 40) {
      infos = 'Obesidade Grau III'
 } else {
   return console.log('Resultado inconclusivo');
 }

  console.log('\nCalculando...');
  setTimeout(() => console.log(`\nSeu IMC é: ${imc}\nSituação: ${infos}.\n`), 1500);

}

IMCCalc();

module.export = IMCCalc;
