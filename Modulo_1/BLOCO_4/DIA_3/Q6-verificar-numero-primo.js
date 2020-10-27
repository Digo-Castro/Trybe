let n, divisores =[];
n = 100;
if (n == 0) {
    console.log("Não é possível analizar o zero sob este aspécto.")
}
else {
    for (let index = 1; index <= n; index += 1) {
        if ( n % index == 0) {
            let item = divisores.push(index);
        }
    }
    console.log(divisores)
    if (divisores.length > 2) {
        console.log("Não é primo.")
    }
    else {
        console.log("É primo.")
    }
}