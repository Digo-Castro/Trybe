const readline =  require('readline-sync');

const speedCalc = () => {
  console.log('\n=== Calculadora de Velocidade ===\n');
  const distance = readline.questionFloat('Informe a distância em Km: ');
  const time = readline.questionFloat('Informe a duração em horas: ');
  const speed = (distance / time).toFixed(0);

  return console.log(`A velocidade média do trajeto foi de: ${speed}Km/h.`);
}

speedCalc();

module.export = speedCalc;