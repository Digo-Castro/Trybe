function verificaStrEnd(str, strEnd) {
    let arrayStr = str.split('').reverse();
    let arrayStrEnd = strEnd.split('').reverse();
    let validacao;
    for (let i =0; i < arrayStrEnd.length; i+= 1) {
        if (arrayStrEnd[i] === arrayStr[i]) {
            validacao = true;
        } else {
            validacao = false;
        }
    }
    return validacao;
}
