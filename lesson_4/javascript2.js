/*
2*. Для игры, реализованной на уроке (бродилка), добавить возможность ходить по диагонали
цифрами 1, 3, 7, 9
Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при
направлении в стенку
игрок оставался на том же месте где стоял.
*/

'use strict';

/**
 * Объект с настройками игры.
 * @property {int} rowsCount Количество строк в карте.
 * @property {int} colsCount Количество колонок в карте.
 * @property {int} startPositionX Начальная позиция игрока по X координате.
 * @property {int} startPositionY Начальная позиция игрока по Y координате.
 */
const settings = {
    rowsCount: 10,
    colsCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
    x: null,
    y: null,

    /**
     * Инициализация игрока и его местоположения.
     */
    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },

    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },

    /**
     * Двигает игрока по переданному направлению.
     * @param {int} direction Направление, в котором будет движение.
     */
    nextPos(direction) {
        const nextPos = {
            x: this.x,
            y: this.y,
        };

        // Определяем направление и обновляем местоположение игрока в зависимости от направления.

        switch (direction) {
            case 2:
                nextPos.y++;
                break;
            case 4:
                nextPos.x--;
                break;
            case 6:
                nextPos.x++;
                break;
            case 8:
                nextPos.y--;
                break;
            case 1:
                nextPos.y++;
                nextPos.x--;
                break;
            case 3:
                nextPos.y++;
                nextPos.x++;
                break;
            case 7:
                nextPos.y--;
                nextPos.x--;
                break;
            case 9:
                nextPos.y--;
                nextPos.x++;
                break;
        }
        return nextPos;
    },
};

/**
 * Объект игры, здесь будут все методы и свойства связанные с самой игрой в общем.
 * @property {settings} settings Настройки игры.
 * @property {player} player Игрок, участвующий в игре.
 */
const game = {
    settings,
    player,

    /**
     * Запускает игру.
     */
    run() {
        // Инициализируем игрока, ставим его начальное местоположение
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);
        // Бесконечный цикл
        while (true) {
            // Отображаем нашу игру.
            this.render();

            // Получаем направление от игрока.
            const direction = this.getDirection();

            // Если игрок сказал что хочет выйти (набрал -1), значит выходим.
            if (direction === -1) {
                alert('До свидания.');
                return;
            }

            const nextStep = this.player.nextPos(direction);
            // Двигаем игрока.
            if (this.checkMove(nextStep)) {
                this.player.move(nextStep);
            }
        }
    },

    /**
     * Отображает игру в консоли.
     */
    render() {
        // Сюда запишем все что надо отобразить.
        let map = "";

        // Цикл перебирает все строки, которые надо отобразить.
        for (let row = 0; row < this.settings.rowsCount; row++) {
            // В каждой строке отображаем для каждой колонки (x - клетка, o - игрок).
            for (let col = 0; col < this.settings.colsCount; col++) {
                // Проверяем, если на данной позиции должен быть и игрок, отображаем игрока, если нет - клетку.
                if (this.player.y === row && this.player.x === col) {
                    map += 'o ';
                } else {
                    map += 'x ';
                }
            }
            // После того как отобразили всю строку делаем переход на следующую строку.
            map += '\n';
        }

        // Чистим консоль.
        console.clear();
        // Выводим все что надо отобразить в игре.
        console.log(map);
    },

    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [-1, 2, 4, 6, 8, 1, 3, 7, 9];

        while (true) {
            // Получаем от пользователя направление.
            const direction = parseInt(prompt('Введите число, куда вы хотите переместиться, -1 для выхода.'));

            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
                continue;
            }


            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
     * Проверка перехода в точку
     * @param {{x: int, y: int}} step координаты точки
     * @returns {boolean} возвращает true при возможности перехода
     */
    checkMove(step) {
        return step.x >= 0 &&
            step.x < this.settings.colsCount &&
            step.y >= 0 &&
            step.y < this.settings.rowsCount
    }
};

// Запускаем игру.
game.run();