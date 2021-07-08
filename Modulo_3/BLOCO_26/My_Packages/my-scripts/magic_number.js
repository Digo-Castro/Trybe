const readline = require('readline-sync');


const guessingGame = () => {
  console.log('\n=== Jogo da Adivinhação ===\n');
  const magicNum = Math.floor(Math.random() * 11);
  console.log('Escolhemos um número de 0 a 10.\nTente adivinhar!');
  const hint = readline.questionInt('\nQual seu palpite? ');

  if (hint === magicNum) {
    console.log('\nAcertou! Parabéns!');
  } else {
    console.log(`\nErrrroooooooou! O número era ${magicNum}!\nMais sorte próxima!`);
  }
}

guessingGame();

module.export = guessingGame;