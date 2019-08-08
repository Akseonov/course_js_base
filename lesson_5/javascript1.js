/*
1 Создать функцию, генерирующую шахматную доску. При этом можно использовать любые
html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые
ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F,
G, H.
 */

'use strict';

const chess = {
    gameTable: document.getElementById('table'),

    generationChess() {
        const cols = ['a', 'b', 's', 'd', 'e', 'f', 'g', 'h'];

        const rows = [1, 2, 3, 4, 5, 6, 7, 8];

        //составляем таблицу
        for (let i = 0; i < 10; i++) {
            const tr = document.createElement('tr');
            this.gameTable.appendChild(tr);

            for (let j = 0; j < 10; j++) {
                const td = document.createElement('td');
                tr.appendChild(td).classList.add('chessTd');

                if ((i === 0 || i === 9) && (j !== 0 && j !== 9)) {
                    td.innerHTML = cols[j - 1];
                } else if ((i !== 0 && i !== 9) && (j === 0 || j === 9)) {
                    td.innerHTML = rows[i - 1];
                }

                if (((i % 2 === 1 && j % 2 === 0) || (i % 2 === 0 && j % 2 === 1)) &&
                ((i !== 0 && i !== 9) && (j !==0 && j !== 9))) {
                    td.style.backgroundColor = '#d4d4d4';
                }


            }
        }

    }
};

chess.generationChess();