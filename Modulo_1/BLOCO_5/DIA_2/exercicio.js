// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let body = document.getElementsByTagName('body')[0];
let hOne= document.createElement('h1');
hOne.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(hOne);

// 2 - Adicione a tag div com a classe main-content como filho da tag body;
let divMain = document.createElement('div');
divMain.className = 'main-content';
body.appendChild(divMain);

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let divCenter = document.createElement('div');
divCenter.className = 'center-content';
divMain.appendChild(divCenter);

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let pDivCenter = document.createElement('p');
pDivCenter.innerText = 'O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript.';
divCenter.appendChild(pDivCenter);

// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let divLeft = document.createElement('div');
divLeft.className = 'left-content';
divMain.appendChild(divLeft);

// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let divRight = document.createElement('div');
divRight.className = 'right-content';
divMain.appendChild(divRight);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
let imgLeft = document.createElement('img');
imgLeft.src = 'https://picsum.photos/200';
imgLeft.className = 'small-image';
divLeft.appendChild(imgLeft);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6; (Mod: Adicione uma lista ordenada com os itens do exercício)
arrayForList = ["Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;", "Adicione a tag div com a classe main-content como filho da tag body;", "Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;", "Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;", "Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;", "Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;", "Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;", "Adicione uma lista ordenada com os itens do exercício como valores da lista. Essa lista deve ser filha do div criado no passo 6;", "Adicione 3 tags h3, todas sendo filhas do div criado no passo 2;", "Adicione a classe title na tag h1 criada;", "Adicione a classe description nas 3 tags h3 criadas;", "Remova o div criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();", "Centralize o div criado no passo 6 (aquele que possui a classe right-content).", "Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;", "Colocar em uppercase os 6 últimos elementos (nove e dez) da lista criada no passo 8."];
let olRight = document.createElement('ol');
for (let i of arrayForList) {
    let liItem = document.createElement('li');
    liItem.innerText = i;
    olRight.appendChild(liItem);
}
divRight.appendChild(olRight);

// 9 - Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.
for (let i = 0; i < 3; i += 1) {
    let hThree = document.createElement('h3');
    divMain.appendChild(hThree);
}

//10 - Adicione a classe title na tag h1 criada;
hOne.className = 'title';

//11 - Adicione a classe description nas 3 tags h3 criadas;
let hThreeList = document.getElementsByTagName('h3');
for (let i of hThreeList) {
    i.className = 'description';
}

//12 - Remova o div criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
divMain.removeChild(divLeft);

// 13 - Centralize o div criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto do div;
divRight.style.marginRight = 'auto';

// 14 - Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
divCenter.style.backgroundColor = 'green';

// 15 - Remova os dois últimos elementos da lista criada no passo 8. (Mod: Colocar em uppercase os 5 últimos)
let liList = document.getElementsByTagName('li');
for (let i = 9; i < liList.length; i += 1) {
    liList[i].style.textTransform = "upperCase"
}
