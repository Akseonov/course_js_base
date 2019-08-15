"use strict";

/**
 * @property {Object} settings Объект с настройками галереи.
 * @property {string} settings.previewSelector Селектор обертки для миниатюр галереи.
 * @property {string} settings.openedImageWrapperClass Класс для обертки открытой картинки.
 * @property {string} settings.openedImageClass Класс открытой картинки.
 * @property {string} settings.openedImageScreenClass Класс для ширмы открытой картинки.
 * @property {string} settings.openedImageCloseBtnClass Класс для картинки кнопки закрыть.
 * @property {string} settings.openedImageCloseBtnSrc Путь до картинки кнопки открыть.
 */
const gallery = {
    currentImg: null,

    settings: {
        previewSelector: '.mySuperGallery',
        openedImageWrapperClass: 'galleryWrapper',
        openedImageClass: 'galleryWrapper__image',
        openedImageScreenClass: 'galleryWrapper__screen',
        openedImageCloseBtnClass: 'galleryWrapper__close',
        openedImageCloseBtnSrc: 'images1/gallery/close.png',
    },

    /**
     * Инициализирует галерею, ставит обработчик события.
     * @param {Object} userSettings Объект настроек для галереи.
     */
    init(userSettings = {}) {
        // Записываем настройки, которые передал пользователь в наши настройки.
        Object.assign(this.settings, userSettings);

        // Находим элемент, где будут превью картинок и ставим обработчик на этот элемент,
        // при клике на этот элемент вызовем функцию containerClickHandler в нашем объекте
        // gallery и передадим туда событие MouseEvent, которое случилось.
        document
            .querySelector(this.settings.previewSelector)
            .addEventListener('click', event => this.containerClickHandler(event));
    },

    /**
     * Обработчик события клика для открытия картинки.
     * @param {MouseEvent} event Событие клики мышью.
     * @param {HTMLElement} event.target Целевой объект, куда был произведен клик.
     */
    containerClickHandler(event) {
        // Если целевой тег не был картинкой, то ничего не делаем, просто завершаем функцию.
        if (event.target.tagName !== 'IMG') {
            return;
        }

        this.currentImg = event.target;
        console.log(this.currentImg);
        // Открываем картинку с полученным из целевого тега (data-full_image_url аттрибут),
        // если картинки нет, выводим заглушку.
        const img = new Image();
        img.src = event.target.dataset.full_image_url;
        img.onload = () => this.openImage(event.target.dataset.full_image_url);
        img.onerror = () => this.openImage(this.settings.openedImageError);
    },

    /**
     * Открывает картинку.
     * @param {string} src Ссылка на картинку, которую надо открыть.
     */
    openImage(src) {
        // Получаем контейнер для открытой картинки, в нем находим тег img и ставим ему нужный src.
        this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
    },

    /**
     * Возвращает контейнер для открытой картинки, либо создает такой контейнер, если его еще нет.
     * @returns {Element}
     */
    getScreenContainer() {
        // Получаем контейнер для открытой картинки.
        const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
        // Если контейнер для открытой картинки существует - возвращаем его.
        if (galleryWrapperElement) {
            return galleryWrapperElement;
        }

        // Возвращаем полученный из метода createScreenContainer контейнер.
        return this.createScreenContainer();
    },

    /**
     * Создает контейнер для открытой картинки.
     * @returns {HTMLElement}
     */
    createScreenContainer() {
        // Создаем сам контейнер-обертку и ставим ему класс.
        const galleryWrapperElement = document.createElement('div');
        galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

        // Создаем контейнер занавеса, ставим ему класс и добавляем в контейнер-обертку.
        const galleryScreenElement = document.createElement('div');
        galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
        galleryWrapperElement.appendChild(galleryScreenElement);

        // Создаем картинку для кнопки закрыть, ставим класс, src и добавляем ее в контейнер-обертку.
        const closeImageElement = new Image();
        closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeImageElement.src = this.settings.openedImageCloseBtnSrc;
        closeImageElement.addEventListener('click', () => this.close());
        galleryWrapperElement.appendChild(closeImageElement);

        const slideImageLeft = new Image(100, 100);
        slideImageLeft.classList.add(this.settings.leftSlideClass);
        slideImageLeft.src = this.settings.leftSlideSrc;
        slideImageLeft.addEventListener('click', () => this.left());
        galleryWrapperElement.appendChild(slideImageLeft);

        const slideImageRight = new Image(100, 100);
        slideImageRight.classList.add(this.settings.rightSlideClass);
        slideImageRight.src = this.settings.rightSlideSrc;
        slideImageRight.addEventListener('click', () => this.right());
        galleryWrapperElement.appendChild(slideImageRight);

        // Создаем картинку, которую хотим открыть, ставим класс и добавляем ее в контейнер-обертку.
        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        galleryWrapperElement.appendChild(image);


        // Добавляем контейнер-обертку в тег body.
        document.body.appendChild(galleryWrapperElement);
        console.log(galleryWrapperElement);
        // Возвращаем добавленный в body элемент, наш контейнер-обертку.
        return galleryWrapperElement;
    },

    left() {
        if (this.currentImg.previousElementSibling)  {
            this.currentImg = this.currentImg.previousElementSibling;
        } else {
            this.currentImg = this.currentImg.parentElement.lastElementChild;
        }
        this.openImage(this.currentImg.dataset.full_image_url);
    },

    right() {
        if (this.currentImg.nextElementSibling)  {
            this.currentImg = this.currentImg.nextElementSibling;
        } else {
            this.currentImg = this.currentImg.parentElement.firstElementChild;
        }
        this.openImage(this.currentImg.dataset.full_image_url);
    },

    /**
     * Закрывает (удаляет) контейнер для открытой картинки.
     */
    close() {
        document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
    }
};

const userSet = {
    previewSelector: '.gallery',
    openedImageWrapperClass: 'galleryWrap',
    openedImageClass: 'galleryWrap__image',
    openedImageScreenClass: 'galleryWrap__screen',
    openedImageCloseBtnClass: 'galleryWrap__close',
    openedImageCloseBtnSrc: 'images1/gallery/close.png',
    openedImageError: 'images1/gallery/error.gif',
    leftSlideClass: 'galleryWrap__left',
    rightSlideClass: 'galleryWrap__right',
    leftSlideSrc: 'images1/gallery/left.png',
    rightSlideSrc: 'images1/gallery/right.png',
};

// Инициализируем нашу галерею при загрузке страницы.
window.onload = () => gallery.init(userSet);