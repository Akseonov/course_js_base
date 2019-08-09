/*
2*. Заполнить созданную таблицу фигурами, фигуры должны выглядеть как картинки, либо
можно использовать символы (существуют символы шахматных фигур) причем все фигуры
должны стоять на своих местах и быть соответственно черными и белыми.
 */

'use strict';

const chess = {

    gameTable: document.getElementById('table'),

    figures: [
        {name: 'p', color: 'w', position: 'a2'},
        {name: 'p', color: 'w', position: 'b2'},
        {name: 'p', color: 'w', position: 'c2'},
        {name: 'p', color: 'w', position: 'd2'},
        {name: 'p', color: 'w', position: 'e2'},
        {name: 'p', color: 'w', position: 'f2'},
        {name: 'p', color: 'w', position: 'g2'},
        {name: 'p', color: 'w', position: 'h2'},
        {name: 'r', color: 'w', position: 'a1'},
        {name: 'n', color: 'w', position: 'b1'},
        {name: 'b', color: 'w', position: 'c1'},
        {name: 'q', color: 'w', position: 'd1'},
        {name: 'k', color: 'w', position: 'e1'},
        {name: 'b', color: 'w', position: 'f1'},
        {name: 'n', color: 'w', position: 'g1'},
        {name: 'r', color: 'w', position: 'h1'},

        {name: 'p', color: 'b', position: 'a7'},
        {name: 'p', color: 'b', position: 'b7'},
        {name: 'p', color: 'b', position: 'c7'},
        {name: 'p', color: 'b', position: 'd7'},
        {name: 'p', color: 'b', position: 'e7'},
        {name: 'p', color: 'b', position: 'f7'},
        {name: 'p', color: 'b', position: 'g7'},
        {name: 'p', color: 'b', position: 'h7'},
        {name: 'r', color: 'b', position: 'a8'},
        {name: 'n', color: 'b', position: 'b8'},
        {name: 'b', color: 'b', position: 'c8'},
        {name: 'q', color: 'b', position: 'd8'},
        {name: 'k', color: 'b', position: 'e8'},
        {name: 'b', color: 'b', position: 'f8'},
        {name: 'n', color: 'b', position: 'g8'},
        {name: 'r', color: 'b', position: 'h8'},
    ],

    figuresUnicode: {
        pw: '&#x2659',
        nw: '&#x2658',
        bw: '&#x2657',
        rw: '&#x2656',
        qw: '&#x2655',
        kw: '&#x2654',

        pb: '&#x265f',
        nb: '&#x265e',
        bb: '&#x265d',
        rb: '&#x265c',
        qb: '&#x265b',
        kb: '&#x265a',
    },

    generationChess() {
        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];

        //составляем таблицу
        for (let i = 0; i < 10; i++) {
            const tr = document.createElement('tr');
            this.gameTable.appendChild(tr);

            for (let j = 0; j < 10; j++) {
                const td = document.createElement('td');
                tr.appendChild(td).classList.add('chessTd');

                td.dataset.row = rows[i].toString();
                td.dataset.col = cols[j].toString();

                if (rows[i] === 0 && cols[j] !== 0) {
                    td.innerHTML = cols[j];
                } else if (cols[j] === 0 && rows[i] !== 0) {
                    td.innerHTML = rows[i];
                }

                if (this.checkBlack(i, j)) {
                    td.style.backgroundColor = '#d4d4d4';
                }
            }
        }
    },

    checkBlack(row, col) {
        if (row === 0 || row === 9 || col === 0 || col === 9) {
            return false;
        }

        return (row % 2 === 1 && col % 2 === 0) || (row % 2 === 0 && col % 2 === 1)
    },

    arrangementOfFigures() {
        for (const figure of this.figures) {
            const col = figure.position.charAt(0);
            const row = figure.position.charAt(1);
            document.querySelector(`[data-col='${col}'][data-row='${row}']`).innerHTML =
                this.figuresUnicode[figure.name + figure.color];
        }
    }
};

chess.generationChess();

chess.arrangementOfFigures();