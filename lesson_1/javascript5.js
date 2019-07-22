'use strict';

let ticket = prompt("Введите номер своего билетика:");

// let ticketNum = ticket.split("");

let num1 = parseInt(+ticket / 100000);
// console.log(num1);
let num2 = parseInt((+ticket % 100000) / 10000);
// console.log(num2);
let num3 = parseInt((+ticket % 10000) / 1000);
// console.log(num3);
let num4 = parseInt((+ticket % 1000) / 100);
// console.log(num4);
let num5 = parseInt((+ticket % 100) / 10);
// console.log(num5);
let num6 = parseInt(+ticket % 10);
// console.log(num6);

let leftSum = num1 + num2 + num3;
// console.log(leftSum);
let rightSum = num4 + num5 + num6;
// console.log(rightSum);

if (leftSum === rightSum) {
    console.log("Билетик является счастливым");
} else {
    console.log("Билетик не является счастливым");
}