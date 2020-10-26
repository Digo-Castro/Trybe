let custoProduto, valorProduto, imposto, lucro;
custoProduto = 100;
valorProduto = 200;
imposto = custoProduto * 0.2;
if (custoProduto < 0 || valorProduto < 0) {
    console.log("Entrada inválida. Rever valores definidos.")
}
else {
    lucro = (valorProduto - custoProduto - imposto) * 1000;
    console.log("Seu lucro foi de R$ " + lucro);
}