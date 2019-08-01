/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
 */

'use strict';

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add':
            return add(arg1, arg2);
        case 'subtract':
            return subtract(arg1, arg2);
        case 'multiply':
            return multiply(arg1, arg2);
        case 'divide':
            return divide(arg1, arg2);
    }
}

console.log(mathOperation(10, 50, 'add'));
console.log(mathOperation(10, 50, 'subtract'));
console.log(mathOperation(10, 50, 'multiply'));
console.log(mathOperation(10, 50, 'divide'));
