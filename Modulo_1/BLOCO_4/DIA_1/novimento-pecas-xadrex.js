let peca, pecaLower;
peca = "REI";
pecaLower = peca.toLowerCase();
switch (pecaLower) {
    case "peão":
        console.log(peca + " --> Um ou duas casas na vertical.");
        break;
    case "torre":
        console.log(peca + " --> Uma ou mais casas na vertical ou horizontal.");
        break;
    case "cavalo":
        console.log(peca + " --> Movimento em 'L'.");
        break;
    case "bispo":
        console.log(peca + " --> Uma ou mais casas na diagonal.");
        break;
    case "rainha":
        console.log(peca + " --> Uma ou mais casa na vertical, horizontal ou diagonal.");
        break;
    case "rei":
        console.log(peca + " --> Uma casa na vertical, horizontal ou diagonal.");
        break;
    default:
        console.log("Peça não identificada!");
}