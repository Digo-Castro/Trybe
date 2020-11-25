const longestWord = (str) => {
  const arr = str.split(' ');
  let longest;
  for (let item of arr) {
    if (item.length > arr[0].length) {
      longest = item;
    } else {
      longest = arr[0]
    }
  }
  return longest;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
