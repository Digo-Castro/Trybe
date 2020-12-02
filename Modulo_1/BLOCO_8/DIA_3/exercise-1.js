
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const flatten = () => arrays.reduce((acc, item) => acc.concat(item))

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);