let somaImpares = 0, indexNumbers, numbers = [50, 90, 30, 19, 70, 8, 100, 2, 350, 270];
for (indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    if ((numbers[indexNumbers] % 2) != 0) {
        somaImpares += 1;
    }
}
if (somaImpares == 1) {
    console.log(`Existe: ${somaImpares} valor ímpar no array.`)
}
else if (somaImpares > 1) {
    console.log(`Existem: ${somaImpares} valores ímpares no array.`)
}
else {
    console.log("Nenhum valor ímpar encontrado.")
}