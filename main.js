const matrix = require('./matrix');
const utils = require('./utils');


// Some matrices for testing
let a = [
    [12, 2123, 31231],
    [443, 5123, 641],
    [3427, 1238, 59],
    [10123, 0, 12]
]

let b = [
    [1312, 2123, 3123, 1234],
    [1235, 1236, 7132, 8123],
    [9213, 12310, 12311, 11232]
]


matrix.print(utils.mutiplyMatrices(b, a));