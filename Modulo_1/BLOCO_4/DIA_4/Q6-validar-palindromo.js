function invertePalavra (palavra) {
    return palavra.split('').reverse().join('');
}

function validaPalindromo (palavra) {
    let valid;
    let palavraInvertida = invertePalavra(palavra);
    for (let key in palavra, palavraInvertida) {
        if (palavra[key] == palavraInvertida[key]) {
            valid = true;
        }
        else {
            valid = false;
        }
    }
    return valid;
}
