function maxValue(arrayNum) {
    let max = 0;
    let index;
    for (let i = 0; i < arrayNum.length; i += 1) {
        if (arrayNum[i] > max) {
            max = arrayNum[i];
            index = i;
        }
    }
    return index;
}