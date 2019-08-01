/*
5*. Дан массив (создать такой же, с такими же значениями):
```
const arr = [
[2, 4, 6],
[1, 5, 10],
[7, 4, 1],
];
```
Задания:
1 Найти массив, у которого сумма всех чисел максимальна, вывести в console.log
индекс этого массива.
2 Получить и вывести в console.log минимальное значение найденное в массиве,
который мы получили в первом пункте.
*/

'use strict';

/**
 * Функция нахождения наибольшего массива
 * @param {array} array массив чисел
 * @returns {number} возвращаем номер наибольшего массива
 */
function maxLine(array) {
    let num = 0, sum = 0, line = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            sum = array[i][j] + sum;
        }
        if (num < sum) {
            num = sum;
            line = i;
        }
        sum = 0;
    }

    return line;
}

/**
 * Функция нахождения минимального элемента массива
 * @param {number} i значение максимального массива
 * @param {array} array массив чисел
 * @returns {number} возвращает минимальное число в массиве
 */
function minElem(i, array) {
    let min = array[i][0];
    for (let j = 0; j < array[i].length; j++) {
        if (min > array[i][j]) {
            min = array[i][j];
        }
    }
    return min;
}

const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
];

let maxArray = maxLine(arr);
console.log(maxArray);
let minArrElem = minElem(maxArray, arr);
console.log(minArrElem);