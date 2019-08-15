/*
2 Реализовать модуль корзины. У каждого товара есть кнопка «Купить», при нажатии на которую
происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать
общую сумму заказа. Один товар можно добавить несколько раз.
 */

'use strict';

const addToBasket = {
    basket: {
        countSelector: '#basket__count',
        priceSelector: '#basket__finalPrice',
    },

    basketArr: [],

    countItems: null,
    priceFinal: null,

    init() {
        this.countItems = document.querySelector(this.basket.countSelector);
        this.priceFinal = document.querySelector(this.basket.priceSelector);
        document
            .querySelectorAll('catalog__button').forEach(elem => {
                elem.addEventListener('click', e => this.clickButton(e.target.dataset.name, +e.target.dataset.price));
        });
    },

    clickButton(name, price) {
        this.add(name, price);
    },

    add(name, price) {
        this.basketArr.push({nameItem: name, priceItem: price});
        this.display(price);
    },

    display(price) {
        this.countItems.textContent = this.basketArr.length;
        this.priceFinal.textContent = this.calcPrice(price);
    },

    calcPrice(price) {
        let priceNew = 0;
        if (this.priceFinal === null) {
            this.priceFinal = +price.target.dataset.price;
        } else {
            this.priceFinal += +price.target.dataset.price;
        }
        return this.priceFinal;
    },
};

addToBasket.init();