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

                if (this.checkFirstLastRow(i, j)) {
                    td.innerHTML = cols[j - 1];
                } else if (this.checkFirstLastCol(i, j)) {
                    td.innerHTML = rows[i - 1];
                }

                if (this.checkBlack(i, j)) {
                    td.style.backgroundColor = '#d4d4d4';
                }


            }
        }

    },

    checkFirstLastRow(row, col) {
        return (row === 0 || row === 9) && (col !== 0 && col !== 9);
    },

    checkFirstLastCol(row, col) {
        return (row !== 0 && row !== 9) && (col === 0 || col === 9);
    },

    checkBlack(row, col) {
        return ((row % 2 === 1 && col % 2 === 0) || (row % 2 === 0 && col % 2 === 1)) &&
            ((row !== 0 && row !== 9) && (col !== 0 && col !== 9));
    }
};

chess.generationChess();