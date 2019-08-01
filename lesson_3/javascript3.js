/*
Нарисовать горку с помощью console.log (используя цикл for), как показано на
рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
```
x
xxx
xxxxx
xxxxxxx
xxxxxxxxx
```
*/

'use strict';

let mount = 'x';
for (let i = 0; i < 20; i++) {
    console.log(mount);
    mount += 'xx';
}