/*
3**. На базе игры (приняв за пример), созданной на уроке, реализовать игру «Кто хочет стать
миллионером?».
Т.е. у вас должен быть главный объект содержащий всю логику игры, который будет иметь
методы, например
метод run, возможно метод init и т.д.
В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и
предлагать варианты
ответов в виде теста, например:
Сколько букв в слове "привет":
a. Пять.
b. Шесть.
c. Семь.
d. Куда я попал?
Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и
предложить
сыграть снова.
Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.
*/

'use strict';

/**
 *
 * @type {object[]} массив с объектами вопросов и ответов
 */
const questions = [
    {
        questText: 'Сколько пальцев у человека?',
        answers: {
            1: 15,
            2: 14,
            3: 25,
            4: 20
        },
        correctAnswer: 4
    },
    {
        questText: 'Сколько минут в часе?',
        answers: {
            1: 60,
            2: 55,
            3: 59,
            4: 63
        },
        correctAnswer: 1
    },
    {
        questText: 'Какое время года лишнее?',
        answers: {
            1: 'Зима',
            2: 'Март',
            3: 'Осень',
            4: 'Лето'
        },
        correctAnswer: 2
    },
    {
        questText: 'Где живут медведи?',
        answers: {
            1: 'В лесу',
            2: 'В квартире',
            3: 'В море',
            4: 'Нигде'
        },
        correctAnswer: 1
    },
    {
        questText: 'Кто проживает на дне океана?',
        answers: {
            1: 'Люди',
            2: 'Медведи',
            3: 'Спанч Боб Сквуер Пэнтс',
            4: 'Никого там нет'
        },
        correctAnswer: 3
    }
];

const game = {
    questions,
    numOfCorrAnswers: 0,
    questionNum: 0,

    /**
     * Метод инициализации игры
     */
    initialization() {
        this.numOfCorrAnswers = 0;
        this.questionNum = 0;
    },

    /**
     * Метод запуска игры
     */
    run() {
        this.initialization();
        alert('Приветствуем вас в игре "Кто хочет стать миллионером!"');

        while (true) {
            //получение ответа от пользователя
            const answer = this.getAnswer();

            //проверка на выход из игры
            if (answer === -1) {
                alert('Всего хорошего!');
                break;
            }
            //проверка правильного ответа
            if (answer === this.questions[this.questionNum].correctAnswer) {
                alert('Вы ответили правильно!');
                this.numOfCorrAnswers++;
            } else {
                alert('Вы ответили неправильно.');
            }

            this.questionNum++;

            //если игра закончилась
            if (this.questionNum > 4) {
                alert(`Игра закончена!\nВы ответили правильно на ${this.numOfCorrAnswers} вопросов`);

                if (!confirm('Не хотите сыграть еще раз?')) {
                    break;
                }

                this.initialization();
            }
        }
    },

    /**
     * Метод получения ответа от пользователя
     * @returns {number} возвращает ответ в виде числа
     */
    getAnswer() {
        while (true) {
            let answer = prompt(this.getQuestionLine());

            if (answer === null) {
                alert('Если вы хотите выйти из игры введите "-1".');
                continue;
            }

            answer = answer.trim();

            answer = parseInt(answer);

            if (!this.checkAnswer(answer)) {
                alert('Вы должны ввести один из предложенных ответов.');
                continue;
            }

            return answer;
        }
    },

    /**
     * Метод формирования строки с вопросом и ответами
     * @returns {string} возвращает строку с вопросом и ответами
     */
    getQuestionLine() {
        const question = this.questions[this.questionNum];

        let questionLine = `Вопрос № ${this.questionNum + 1}: \n${question.questText} 
        \n Варианты ответов: \n`;

        for (const brForce in question.answers) {
            if (question.answers.hasOwnProperty(brForce)) {
                questionLine += `   ${brForce}: ${question.answers[brForce]} \n`;
            }
        }
        return questionLine;
    },

    /**
     * Метод проверки введеного значение на наличие такого значения
     * @param answer {number} число введеное пользователем
     * @returns {boolean} возврачает true или false
     */
    checkAnswer(answer) {
        const currAnswers = [-1, 1, 2, 3, 4];
        return currAnswers.includes(answer);
    }
};

game.run();