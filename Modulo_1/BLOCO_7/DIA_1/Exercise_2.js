const oddsAndEvens = () => {
  const arr = [13, 3, 4, 10, 7, 2];
  let min;
  let newArr = [];
  let size = arr.length;
  while (arr.length > 1) {
    min = arr[0];
    for (let index = 1; index < arr.length; index += 1) {
      if (arr[index] < min) {
        min = arr[index];
      }
    }
    newArr.push(min);
    arr.splice(arr.indexOf(min), 1);
  }
  if (arr.length = 1) {
    newArr.push(arr[0]);
  }
  return `Os números ${newArr} se encontram ordenados de forma crescente!`
}

console.log(oddsAndEvens());