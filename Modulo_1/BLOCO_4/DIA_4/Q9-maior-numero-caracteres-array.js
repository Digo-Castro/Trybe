function maxChar(arrayStr) {
    let maxC = 0;
    let str;
    for (let i = 0; i < arrayStr.length; i += 1) {
        if (arrayStr[i].length > maxC) {
            maxC = arrayStr[i].length;
            str = arrayStr[i];
        }
    }
    return str;
}
