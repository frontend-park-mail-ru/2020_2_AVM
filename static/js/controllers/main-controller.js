import Controller from '../api/controller.js';
import MainView from '../views/main-view.js';

import Article from '../models/article-model.js';

export default class ProfilePageController extends Controller {
    /**
     * constructor of controller
     * @param {HTMLElement} parent - HTML container
     * @param {HTMLElement} header - HTML container
     * @param {Object} config - list menu
     */
    constructor(parent) {
        super();
        this.parent = parent;
        this.data = {login: 'Вы не вошли'};
        this.view = new MainView(this.parent);
    }

    /**
     * action of controller, logic of profile
     */
    action() {

        const articles =[
            {
                title: "Первый заголовок",
                author: "Автор 1",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 1",
            },
            {
                title: "Второй заголовок",
                author: "Автор 2",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 2",
            },
            {
                title: "Третий заголовок",
                date: "1 сентября 2020",
                author: "Автор 3",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 3",
            },
            {
                title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Четвертый заголовок",
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Четвертый заголовок",
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Четвертый заголовок",
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
        ];

        this.data.articles = articles;

        this.view.render(this.data);

        const categorySelect = document.querySelector('select#select-choose-category-or-main.select-category');
        const sortSelect = document.querySelector('select#select-choose-sort-main.select-category');

        categorySelect.addEventListener('change', (evt) => {

            const category = categorySelect.value;

            if (category === 'Популярные') {
                this.data.articles = articles;
                this.view.render(this.data);
            }

            // if category === 'Подписки' {
            //
            //     Article.getArticlesBySubscribe.then(res) => {
            //         console.log(status);
            //         if (res.status === 200) {
            //             res.json().then((res) => {
            //                 this.data.articles = res;
            //                 this.view.render(this.data);
            //             });
            //         } else {
            //             console.log('error');
            //             this.view.render(this.data);
            //         }
            //     })
            //         .catch((err) => {
            //             if (err instanceof Error) {
            //                 console.log(err);
            //             }
            //             this.action();
            //         });
            //
            // }
        });

    }

}