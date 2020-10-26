let numeros = [], index, valor;
for (index = 0; index < 25; index += 1) {
    valor = numeros.push(index + 1);
}
console.log(numeros);