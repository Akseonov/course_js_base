'use strict';

//будет 2010. в начале ссуммирутся 2 числа 10 и 10,
//а потом записываются в строку 10 (перед 10).
console.log(10 + 10 + "10");
//будет 101010. число 10 записывается к строке 10,
//а потом к строке 1010 записывается еще 10
console.log(10 + "10" + 10);
//будет 10. Суммируются 2 числа 10 и 10,
//а потом строка 10 переводится в число и тоже прибавляется
console.log(10 + 10 + +"10");
//будет -infinity. js переведет пуструю строку в отрицательное число,
//но поскольку строка пустая, то будет -0. при делении на -0 будет -infinity
console.log(10 / -"");
//будет NaN. число 2,5 записано через запятую,
//значит будет ошибка при переводе из строки в число, что даст значение NaN.
console.log(10 / +"2,5");