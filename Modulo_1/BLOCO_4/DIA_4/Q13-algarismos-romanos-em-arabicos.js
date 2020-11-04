let indexRoman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

let indexRomanPriority = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
};

function priorityListSum(arrayRoman) {
    let prioritySum = 0;
    let arr = arrayRoman;
    let res = [];
    for (let key in indexRomanPriority) {
        if (arr.includes(key)) {
            prioritySum += indexRomanPriority[key];
            console.log(key)
            console.log(prioritySum)
            arr = arr.replace(key, '')
            console.log(arr)
        }
    } res = [arr, prioritySum]
    return res;
}

function listSum(res) {
    let sum = res[1];
    let arR = res[0];
    for (let i in arR) {
        for (let key in indexRoman) {
            if (arR.includes(key)) {
                sum += indexRoman[key];
                console.log(key)
                console.log(sum)
                arR = arR.replace(key, '')
                console.log(arR)
            }
        }
    } return sum
}

function translate(arrayRoman) {
    let res = priorityListSum(arrayRoman)
    let sum = listSum(res);
 return sum
}

console.log(translate('MMCMXCIX'))
