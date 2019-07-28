/*
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами.
Обязательно использовать оператор return.
 */

'use strict';

/**
 * Функция суммы
 * @param {number} a Первое слагаемое
 * @param {number} b Второе слагаемое
 * @returns {number} возвращает сумму двух чисел, если введены числа
 */
function add(a, b) {
    return a + b;
}

/**
 * Функция разности
 * @param {number} a Уменьшаемое
 * @param {number} b Вычитаемое
 * @returns {number} возвращает разницу двух чисел, если введены числа
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Функция произвдения
 * @param {number} a Первый множитель
 * @param {number} b Второй множитель
 * @returns {number} возвращает произведение двух чисел, если введены числа
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Функция частного
 * @param {number} a Делимое
 * @param {number} b Делитель
 * @returns {number} возвращает частное двух чисел, если введены числа
 */
function divide(a, b) {
    return a / b;
}