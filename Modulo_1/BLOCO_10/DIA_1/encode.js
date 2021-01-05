const encode = (string) => {
  const vowels = {a: 1, e: 2, i: 3, o: 4, u: 5};
  const strLower = string.toLowerCase();
  let strArray = strLower.split('');
  strArray.forEach((str, index)=> {
    if (Object.keys(vowels).includes(str)) {
      strArray[index] = vowels[str];
    }
  });
  return strArray.join('');
};

module.exports = encode;
