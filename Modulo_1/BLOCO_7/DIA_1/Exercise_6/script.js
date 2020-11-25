const changeStr = (str, phrase) => {
  const arrPhrase = phrase.split(' ');
  if (arrPhrase.includes('x') === true) {
    let indexX = arrPhrase.indexOf('x');
    arrPhrase[indexX] = str;
  }
  return arrPhrase.join(' ');
}

console.log(changeStr('Digo', 'Tryber x aqui!'));


const arrSkills = ['html', 'css', 'js', 'python', 'photoshop'];
arrSkills.sort();

const concatenate = (str, arr) => {
  return `${str}\nMinhas cinco principais habilidades são:\n- ${arr[0]};\n- ${arr[1]};\n- ${arr[2]};\n- ${arr[3]};\n- ${arr[4]}.\n\n#goTrybe.`
}

console.log(concatenate(changeStr('Digo', 'Tryber x aqui!'), arrSkills));
