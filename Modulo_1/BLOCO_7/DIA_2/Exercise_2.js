const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (obj, key, value) => obj[key] = value;

addTurno(lesson2, 'turno', 'manhã');

const listKeys = (obj) => Object.keys(obj);

const listKeysLength = (obj) => Object.keys(obj).length;

const listValues = (obj) => Object.values(obj);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const lesson1Datas = Object.values(allLessons.lesson1);

const allLessonsDatas = () => {
  const allLessonsKeys = Object.keys(allLessons);
  let totalEstudantes = 0;
  for (let index = 0; index < allLessonsKeys.length; index += 1) {
    const allLessonsKeysObj = allLessonsKeys[index];
    totalEstudantes += allLessons[allLessonsKeysObj]['numeroEstudantes'];
  }
  return totalEstudantes;
}

const getValueByNumber = (lesson, index) => Object.values(lesson)[index];

const verifyPair = (lesson, key, value) => {
  if (lesson[key] === value) {
    return true;
  }
    return false;
}

const createReport = (obj, prof) => {
  const aulas = [];
  let total = 0;
  for (let index = 0; index < Object.keys(obj).length; index += 1) {
    if ((Object.values(Object.values(obj)[index]).includes(prof))) {
      aulas.push(Object.values(Object.values(obj)[index])[0]);
      total += Object.values(Object.values(obj)[index])[1];
    }
  }
  const rel = {}
    rel['professor'] = prof;
    rel['aulas'] = aulas;
    rel['estudantes'] = total;
  return rel;
}

console.log(createReport(allLessons, 'Maria Clara'));
