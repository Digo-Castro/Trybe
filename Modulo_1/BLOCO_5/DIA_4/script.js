const bodyItem = document.getElementsByTagName('body')[0];
const sectionItem = document.getElementsByTagName('section')[0];
const paragraphsItems = document.getElementsByTagName('p');
const fontSizeList = document.getElementsByClassName('font-size')[0].children;
const fontColorList = document.getElementsByClassName('font-color')[0].children;
const lineHeightList = document.getElementsByClassName('line-height')[0].children
const fontFamList = document.getElementsByClassName('font-family')[0].children;
const bodyColorList = document.getElementsByClassName('body-color')[0].children;
const sectionColorList = document.getElementsByClassName('section-color')[0].children;


function btnGen(array, nameClass) {
  for(let index = 0; index < array.length; index += 1) {
    array[index].className = nameClass;
  }
} 

btnGen(fontSizeList, 'btn-fontSize');
btnGen(fontColorList, 'btn-fontColor');
btnGen(lineHeightList, 'btn-lineHeight');
btnGen(fontFamList, 'btn-fontFam');
btnGen(bodyColorList, 'btn-colorBody');
btnGen(sectionColorList, 'btn-colorSection');

// Text Size

const btnFontSizeSmall = document.getElementsByClassName('btn-fontSize')[0];
const btnFontSizeNormal = document.getElementsByClassName('btn-fontSize')[1];
const btnFontSizeBig = document.getElementsByClassName('btn-fontSize')[2];

btnFontSizeSmall.addEventListener('click', textSmall);
function textSmall() {
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.fontSize = '11px';
    save('fontSize', '11px');
  }
}

btnFontSizeNormal.addEventListener('click', textNormal);
function textNormal() {
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.fontSize = '16px';
    save('fontSize', '16px');
  }
}

btnFontSizeBig.addEventListener('click', textBig);
function textBig() {
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.fontSize = '20px';
    save('fontSize', '20px');
  }
}

// Color Text

const btnFontWhite = document.getElementsByClassName('btn-fontColor')[0];
const btnFontBlack = document.getElementsByClassName('btn-fontColor')[1];

btnFontWhite.addEventListener('click', textWhite);
function textWhite() {
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.color = 'white';
    save('fontColor', 'white');
  }
}

btnFontBlack.addEventListener('click', textBlack);
function textBlack() {
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.color = 'black';
    save('fontColor', 'black');
  }
}

// Line height

const btnSimple = document.getElementsByClassName('btn-lineHeight')[0];
const btnDubble = document.getElementsByClassName('btn-lineHeight')[1];

btnSimple.addEventListener('click', lineSimple);
function lineSimple() {
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.lineHeight = '20px';
    save('lineHeight', '20px');
  }
}

btnDubble.addEventListener('click', lineDubble);
function lineDubble() {
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.lineHeight = '40px';
    save('lineHeight', '40px');
  }
}

// Font Family

const btnFontCur = document.getElementsByClassName('btn-fontFam')[0];
const btnFontSans = document.getElementsByClassName('btn-fontFam')[1];

btnFontCur.addEventListener('click', textCur);
function textCur() {
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.fontFamily = 'Courier New';
  }
  save('fontFam', 'Courier New');
}

btnFontSans.addEventListener('click', textSans);
function textSans() {
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.fontFamily = 'Sans-serif';
  }
  save('fontFam', 'Sans-serif');
}

// Color body

const btnBodyWhite = document.getElementsByClassName('btn-colorBody')[0];
const btnBodyBlack = document.getElementsByClassName('btn-colorBody')[1];

btnBodyWhite.addEventListener('click', bodyWhite);
function bodyWhite() {
  bodyItem.style.backgroundColor = 'white';
  bodyItem.children[0].style.color = 'black';
  save('bodyColor', 'white');
  save('bodyTextColor', 'black');
}

btnBodyBlack.addEventListener('click', bodyBlack);
function bodyBlack() {
  bodyItem.style.backgroundColor = 'black';
  bodyItem.children[0].style.color = 'white';
  save('bodyColor', 'black');
  save('bodyTextColor', 'white');
}

// Color section

const btnSecGrey = document.getElementsByClassName('btn-colorSection')[0];
const btnSecWhite = document.getElementsByClassName('btn-colorSection')[1];

btnSecGrey.addEventListener('click', sectionGrey);
function sectionGrey() {
  sectionItem.style.backgroundColor = 'grey';
  save('secColor', 'grey');
}

btnSecWhite.addEventListener('click', sectionWhite);
function sectionWhite() {
  sectionItem.style.backgroundColor = 'white';
  save('secColor', 'white');
}

// Local storage

function save(key, value) {
  localStorage.setItem(key, value);
}

function recover() {
  const fontSizeRec = localStorage.getItem('fontSize');
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.fontSize = fontSizeRec;
  }

  const fontColorRec = localStorage.getItem('fontColor');
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.color = fontColorRec;
  }

  const lineHeightRec = localStorage.getItem('lineHeight');
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.lineHeight = lineHeightRec;
  }

  const fontFamRec = localStorage.getItem('fontFam');
  for(let index = 0; index < paragraphsItems.length; index += 1) {
    paragraphsItems[index].style.fontFamily = fontFamRec;
  }

  const bodyColorRec = localStorage.getItem('bodyColor');
  const bodyTextColorRec = localStorage.getItem('bodyTextColor');
  bodyItem.style.backgroundColor = bodyColorRec;
  bodyItem.children[0].style.color = bodyTextColorRec;

  const secColorRec = localStorage.getItem('secColor');
  sectionItem.style.backgroundColor = secColorRec;
}

window.onload = recover();
