let salBruto, salLiquido, salBase, inss, aliqIR, ir, deducao;
salBruto = 3000;
if (salBruto <= 1556.94) {
    inss = 0.08 * salBruto;
}
else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
    inss = 0.09 * salBruto;
}
else if (salBruto >= 2594.93 && salBruto <= 5189.22) {
    inss = 0.11 * salBruto;
}
else {
    inss = 570.88
}
salBase = salBruto - inss;
if (salBase <= 1903.98) {
    aliqIR = 0;
    deducao = 0;
}
else if (salBase >= 1903.99 && salBase <= 2826.65) {
    aliqIR = (salBase * 0.075);
    deducao = 142.80;
}
else if (salBase >= 2826.66 && salBase <= 3751.05) {
    aliqIR = (salBase * 0.15);
    deducao = 354.80;
}
else if (salBase >= 3751.06 && salBase <= 4664.68) {
    aliqIR = (salBase * 0.225)
    deducao = 636.13;
}
else {
    aliqIR = (salBase * 0.275);
    deducao = 869.36;
}
ir = aliqIR - deducao
salLiquido = salBase - ir;
console.log(salLiquido);