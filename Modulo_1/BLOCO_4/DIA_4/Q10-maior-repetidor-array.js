function countRep(arrayNum, num) {
    let maiorRepeticao = 0;
    let maiorRepetidor;
    for (let i =0; i < arrayNum.length; i += 1){
        let repeticao = 0;
        let repetidor = arrayNum[i];
        for (let i =0; i < arrayNum.length; i += 1){
            if (arrayNum[i] === repetidor) {
                repeticao += 1;
            }
        }
        if (repeticao > maiorRepeticao) {
            maiorRepeticao = repeticao;
            maiorRepetidor = repetidor;
        }
    }
    return maiorRepetidor
}
