const decode = (string) => {
  const nums = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'};
  const strLower = string.toLowerCase();
  let strArray = strLower.split('');
  strArray.forEach((str, index)=> {
    if (Object.keys(nums).includes(str)) {
      strArray[index] = nums[str];
    }
  });
  return strArray.join('');
};

module.exports = decode;
