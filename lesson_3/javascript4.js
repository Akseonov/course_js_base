/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100
(можно без оптимизаций).
*/

'use strict';

let arr = [], arrLength = 100;


for (let i = 1; i <= arrLength; i++) {
    arr.push(i);
}

let row = 2, num = 2, j = 1;
let rem = [];


while (row <= arrLength) {
    while (num < row) {
        if (row % num === 0) {
            rem = arr.splice(row - (j), 1);
            j++;
            break;
        }
        num++;
    }
    num = 2;
    row++;
}

console.log(arr);