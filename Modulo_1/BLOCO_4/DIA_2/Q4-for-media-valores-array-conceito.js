let soma = 0, indexNumbers, mediaArray, numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    soma += numbers[indexNumbers];
}
mediaArray = soma / numbers.length;
if (mediaArray > 20) {
    console.log("Valor maior que 20");
}
else if  (mediaArray == 20) {
    console.log("Valor igual a 20");
}
else {
    console.log("Valor menor que 20");
}