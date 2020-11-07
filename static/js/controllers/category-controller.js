import {categories} from '../settings/categories.js';

import Controller from '../api/controller.js';
import CategoryView from '../views/category-view.js';
import Article from '../models/article-model.js';


export default class CategoryPageController extends Controller {
    /**
     * constructor of controller
     * @param {HTMLElement} parent - HTML container
     * @param {HTMLElement} header - HTML container
     * @param {Object} config - list menu
     */
    constructor(parent) {
        super();
        this.parent = parent;
        // this.data = {login: 'Вы не вошли'};
        this.view = new CategoryView(this.parent);

        this.data.categories = categories;
    }

    /**
     * action of controller, logic of profile
     */
    action() {

        const articles =[
            {
                title: "Первый заголовок",
                date: "1 сентября 2020",
                author: "Автор 1",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 1",
            },
            {
                title: "Второй заголовок",
                date: "1 сентября 2020",
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
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Первый заголовок",
                date: "1 сентября 2020",
                author: "Автор 1",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 1",
            },
            {
                title: "Второй заголовок",
                date: "1 сентября 2020",
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
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Первый заголовок",
                date: "1 сентября 2020",
                author: "Автор 1",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 1",
            },
            {
                title: "Второй заголовок",
                date: "1 сентября 2020",
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
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
        ];

        this.data.key = "Категория:";
        this.data.value = "Текущая категория";
        this.data.articles = articles;

        // this.getAritcles();

        this.view.render(this.data); //после запроса убрать

        const categorySelect = document.querySelector('select#select-choose-category.select-category');
        const sortSelect = document.querySelector('select#select-choose-sort.select-category');

        categorySelect.addEventListener('change', (evt) => {

            console.log('change');
            const category = categorySelect.value;

            this.getAritcles();
        });

        sortSelect.addEventListener('change', (evt) => {

            // current = this.data.articles;
            // this.data.articles = current.reverse();

        });

    }

    getAritcles () {
        // Article.getArticlesByCategory(category).then(res) => {
        //     console.log(status);
        //     if (res.status === 200) {
        //         res.json().then((res) => {
        //             this.data.articles = res;
        //             this.view.render(this.data);
        //         });
        //     } else {
        //         console.log('error');
        //         this.view.render(this.data);
        //     }
        // })
        //     .catch((err) => {
        //         if (err instanceof Error) {
        //             console.log(err);
        //         }
        //         this.action();
        //     });
    }

}