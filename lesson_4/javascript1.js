/*
1 Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0,
999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны
разряды числа:
- единицы (в свойстве firstDigit)
- десятки (в свойстве secondDigit)
- сотни (в свойстве thirdDigit)
Например, для числа 45 мы должны получить следующий объект:
```
{
firstDigit: 5,
secondDigit: 4,
thirdDigit: 0,
}
```
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

'use strict';

/**
 * Функция преобразования числа в объект
 * @param num {number} число от 0 до 999
 * @returns {{}} возвращаем объект
 */

let number = +prompt('Введите число от 0 до 999');
function convNumToObj(num) {
    if (num < 0 || num > 999 || !Number.isInteger(num)) {
        console.log('Введеное значение должно быть в диапазоне от 0 до 999.');
        return {};
    }

    let objOfNum = {};
    objOfNum.firstDigit = num % 10;
    objOfNum.secondDigit = Math.floor(num / 10) % 10;
    objOfNum.thirdDigit = Math.floor(num / 100) % 10;

    return objOfNum;
}

console.log(convNumToObj(number));