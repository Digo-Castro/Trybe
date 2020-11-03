let info1 = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'sim'
    };

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'sim'
    };

for (key in info1, info2) {
    if (info1[key] != info2[key]) {
        console.log(info1[key] + ' e ' + info2[key]);
    }
    else {
        console.log('Ambos recorrentes');
    }
}
    