function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidaysList = ['24', '25', '31'];
const fridaysList = ['4', '11', '18', '25'];
const dezDays = document.getElementById('days');

for (let index = 0; index < dezDaysList.length; index += 1) {
const itemText = dezDaysList[index];
const liItem = document.createElement('li');
liItem.innerText = itemText;
dezDays.appendChild(liItem);
}

const dezDaysItems = document.getElementById('days').children;

for (let index = 0; index < dezDaysItems.length; index += 1) {
  let classe = 'day'
  if (holidaysList.includes(dezDaysItems[index].innerText)) {
    classe += ' holiday'
    dezDaysItems[index].className = classe;
  } if (fridaysList.includes(dezDaysItems[index].innerText)) {
    classe += ' friday'
    dezDaysItems[index].className = classe;
  } else {
    dezDaysItems[index].className = classe;
  }
}

function btns(str, btnClass) {
  const itemBtn = document.createElement('button');
  itemBtn.innerText = str;
  itemBtn.className = btnClass;
  document.getElementsByClassName('buttons-container')[0].appendChild(itemBtn);
}

// FERIADOS
btns('Feriados', 'btn-holiday')

const itemsHolidayList = document.getElementsByClassName('holiday');
  for (let index = 0; index < itemsHolidayList.length; index += 1) {
    itemsHolidayList[index].style.backgroundColor = 'rgb(238,238,238)';
  }

function colorGen() {
  let attribStyle = document.getElementsByClassName('holiday')[0].attributes.style.value;

  if (attribStyle !== 'background-color: rgb(130, 226, 41);') {
    changeColorHoliday('rgb(130, 226, 41)');
  } else {
    changeColorHoliday('rgb(238,238,238)');
  }
}

function changeColorHoliday(color) {
  for (let index = 0; index < itemsHolidayList.length; index += 1) {
    itemsHolidayList[index].style.backgroundColor = color;
  }
}

const feriados = document.getElementsByClassName('btn-holiday')[0];
feriados.addEventListener('click', colorGen);

//SEXTOU
btns ('Sexta-feira', 'btn-friday')

const itemsFridayList = document.getElementsByClassName('friday');

function changeTextFriday(text) {
  for(let index = 0; index < itemsFridayList.length; index += 1) {
    itemsFridayList[index].innerText = text;
  }
}

function textGen () {
  let textInitial = document.getElementsByClassName('friday')[0].innerText;
  if (textInitial !== '#SEXTOU') {
    changeTextFriday('#SEXTOU');
  } else {
    for (let index = 0; index < itemsFridayList.length; index += 1){
      itemsFridayList[index].innerText = fridaysList[index];
    }
  }
}

const friday = document.getElementsByClassName('btn-friday')[0];
friday.addEventListener('click', textGen);