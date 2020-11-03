function minValue(arrayNum) {
    let min = 1000000;
    let index;
    for (let i = 0; i < arrayNum.length; i += 1) {
        if (arrayNum[i] < min) {
            min = arrayNum[i];
            index = i;
        }
    }
    return index;
}
