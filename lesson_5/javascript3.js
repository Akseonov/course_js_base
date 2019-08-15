/*
3**. Создать форму в html со следующими полями:
* Имя - текстовое поле
* Телефон - текстовое поле
* Пароль - поле типа password
* Повтор пароля - поле типа password
* Кнопка отправить форму
Необходимо реализовать валидацию этой формы по следующим правилам:
* Имя - должно содержать как минимум 1 символ, не более 50 символов.
* Телефон - должно содержать 11 цифр, не больше, не меньше.
* Пароль - минимум 5 символов, максимум 50
* Повтор пароля - значение должно совпадать с полем пароль.
* Кнопка отправить форму - при нажатии на кнопку форма должна провериться, при
прохождении проверки, форма
отправляется, если проверка не была пройдена, то:
- Каждое поле, которое не прошло проверку должно выделяться красным цветом.
- Под каждым полем, что не прошло проверку, должна писаться подсказка по какой причине
проверка провалилась.
Можете пользоваться стилями бутстрапа, если лень самим писать.
Пользоваться аттрибутами HTML5 запрещено, необходимо проверки реализовать с помощью
javascript.
 */

'use strict';

/**
 * Объект проверки валидности формы
 */
const form = {
    formElem: null,
    rules: null,

    /**
     * Метод инициализации проверки
     */
    init() {
        this.formElem = document.querySelector('.form');
        this.formElem.addEventListener('submit', event => this.formSubmit(event));
        this.rules = [
            {
                selector: 'input[name="name"]',
                methods: [
                    {name: 'length', args: ['>=', 1]},
                    {name: 'length', args: ['<=', 50]},
                ],
            },
            {
                selector: 'input[name="phone"]',
                methods: [
                    {name: 'containsNumber'},
                    {name: 'length', args: ['==', 11]},
                ],
            },
            {
                selector: 'input[name="password"]',
                methods: [
                    {name: 'length', args: ['>=', 5]},
                    {name: 'length', args: ['<=', 50]},
                ],
            },
            {
                selector: 'input[name="password_repeat"]',
                methods: [
                    {name: 'sameFields', args: ['input[name="password"]']},
                ],
            }
        ];
    },

    /**
     * Метод, который запускается перед отправкой формы.
     * @param {Event} event Событие отправки формы.
     */
    formSubmit(event) {
        if (!this.valid()) {
            event.preventDefault();
        }
    },

    /**
     * Метод проверки формы
     * @return {boolean} возвращает лож или правду
     */
    valid() {
        let valid = true;
        for (let rule of this.rules) {
            const inputElem = document.querySelector(rule.selector);
            for (let method of rule.methods) {
                const errorMess = checkValid[method.name](inputElem, method.args);
                if (errorMess) {
                    this.setInvalid(inputElem, errorMess);
                    valid = false;
                    break;
                } else {
                    this.setValid(inputElem);
                }
            }
        }
        return valid;
    },

    /**
     * Метод установки класса проваленной проверки
     * @param {Element} inputElem Элемент инпута прошедший валидацию
     * @param {String} mess Сообщение об ошибке
     */
    setInvalid(inputElem, mess) {
        const classList = inputElem.classList;
        classList.remove('form__input_valid');
        classList.add('form__input_invalid');

        let hintWrap = inputElem.parentNode.querySelector('.form__feedback');
        if (!hintWrap) {
            hintWrap = document.createElement('div');
            hintWrap.classList.add('form__feedback');
            inputElem.parentNode.appendChild(hintWrap);
        }

        hintWrap.textContent = mess;

    },

    /**
     * Метод прохождения валидации
     * @param {Element} inputElem Элемент инпута прошедший валидацию
     */
    setValid(inputElem) {
        const classList = inputElem.classList;
        classList.remove('form__input_invalid');
        classList.add('form__input_valid');
    },
};

/**
 * Объект с методами валидации
 */
const checkValid = {
    /**
     * Метод проверки длины поля
     * @param {HTMLInputElement} field Поле для проверки
     * @param {Array} args Массив с аргументами
     * @return {string|null} Строку с ошибкой или null, если ошибки не было.
     */
    length(field, args) {
        const fieldLength = field.value.length,
            sign = args[0],
            num = args[1];

        let mess = null;

        switch (sign) {
            case '>':
                if (!(fieldLength > num)) {
                    mess = `Минимальная длина поля: ${num + 1}.`;
                }
                break;
            case '<':
                if (!(fieldLength < num)) {
                    mess = `Максимальная длина поля: ${num - 1}.`;
                }
                break;
            case '>=':
                if (!(fieldLength >= num)) {
                    mess = `Минимальная длина поля: ${num}.`;
                }
                break;
            case '<=':
                if (!(fieldLength <= num)) {
                    mess = `Максимальная длина поля: ${num}.`;
                }
                break;
            case '==':
                if (fieldLength !== num) {
                    mess = `Длина поля должна равняться: ${num} символам.`;
                }
                break;
        }

        return mess;
    },

    /**
     * Метод проверки на символы
     * @param {HTMLInputElement} field Поле для проверки
     * @return {string|null} Строку с ошибкой или null, если ошибки не было.
     */
    containsNumber(field) {
        for (const val of field.value) {
            if (!Number.isInteger(Number.parseInt(val))) {
                return 'Необходимо ввести только цифры';
            }
        }

        return null;
    },

    /**
     * Метод проверки двух полей на симметричность
     * @param {HTMLInputElement} field Поле для проверки
     * @param {Array} args Массив с аргументами
     * @return {string|null} Строку с ошибкой или null, если ошибки не было.
     */
    sameFields(field, args) {
        if (field.value !== document.querySelector(args[0]).value) {
            return 'Поля не совпадают.';
        } else {
            return null;
        }
    },
};

form.init();