/*
2*. Заполнить созданную таблицу фигурами, фигуры должны выглядеть как картинки, либо
можно использовать символы (существуют символы шахматных фигур) причем все фигуры
должны стоять на своих местах и быть соответственно черными и белыми.
 */

'use strict';

const chess = {
    gameTable: document.getElementById('table'),

    generationChess() {
        const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        const rows = [8, 7, 6, 5, 4, 3, 2, 1];

        const chessFiguresBlack = ['&#x265c', '&#x265e', '&#x265d', '&#x265b',
            '&#x265a', '&#x265d', '&#x265e', '&#x265c'];

        const chessBlackPawn = ['&#x265f'];

        const chessFiguresWhite = ['&#x2656', '&#x2658', '&#x2657', '&#x2655',
            '&#x2654', '&#x2657', '&#x2658', '&#x2656'];

        const chessWhitePawn = ['&#x2659'];

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

                if (i === 1 && j !== 0 && j !== 9) {
                    td.innerHTML = chessFiguresBlack[j - 1];
                } else if (i === 2 && j !== 0 && j !== 9) {
                    td.innerHTML = chessBlackPawn[0];
                } else if (i === 8 && j !== 0 && j !== 9) {
                    td.innerHTML = chessFiguresWhite[j - 1];
                } else if (i === 7 && j !== 0 && j !== 9) {
                    td.innerHTML = chessWhitePawn[0];
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
    },
};

chess.generationChess();