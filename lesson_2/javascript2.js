/*
Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
(описать последовательность действий).
let a = 2;
let x = 1 + (a *= 2);
 */

'use strict';

let a = 2;
// a = 4, x = 5, поскольку a *= 2 умножает занчение переменной a на 2 и кладет
//это значение обратно в переменную a (4). далее к измененной переменной a прибавляется 1.
let x = 1 + (a *= 2);