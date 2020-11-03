let palavra;

function invertePalavra (palavra) {
    return palavra.split('').reverse().join('')
};
function validaPalindromo (palavra) {
    palavraInvertida = invertePalavra(palavra);
    for (key in palavra, palavraInvertida) {
        if (palavra[key] == palavraInvertida[key]) {
            return true;
        }
        else {
            return false;
        }
    }
};
console.log(validaPalindromo("arara"));