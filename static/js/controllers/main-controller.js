import Controller from '../api/controller.js';
import MainView from '../views/main-view.js';

import Article from '../models/article-model.js';
import UserModel from '../models/user-model.js';

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
        this.data.key = 'Популярные';
    }

    /**
     * action of controller, logic of profile
     */
    action() {

        const articles = [
            {
                article_title: "Первый заголовок",
                author: "Автор 1",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 1",
            },
            {
                article_title: "Второй заголовок",
                author: "Автор 2",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 2",
            },
            {
                article_title: "Третий заголовок",
                date: "1 сентября 2020",
                author: "Автор 3",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 3",
            },
            {
                article_title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                article_title: "Четвертый заголовок",
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                article_title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                article_title: "Четвертый заголовок",
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                article_title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                article_title: "Четвертый заголовок",
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                article_title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                article_title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                article_title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                article_title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                article_title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                article_title: "Четвертый заголовок",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
        ];

        UserModel.getUserData()
            .then((res) => {
                if (res.status !== 201) {
                    this.data.articles = articles;
                    this.data.key = 'Популярные';
                    this.view.render(this.data);
                } else {
                    Article.getArticlesBySubscribe()
                        .then((res) => {
                            if (res.status === 200) {
                                res.json().then((res) => {
                                    this.data.articles = res;
                                    this.data.articles = this.data.articles.reverse();
                                    this.data.key = 'Подписки';
                                    this.view.render(this.data);
                                });
                            } else {
                                console.log('error');
                                this.data.articles = articles;
                                this.data.key = 'Популярные';
                                this.view.render(this.data);
                            }
                        })
                        .catch((err) => {
                            if (err instanceof Error) {
                                console.log(err);
                            }
                            this.data.articles = articles;
                            this.data.key = 'Популярные';
                            this.view.render(this.data);
                        });
                }
            }).catch((err) => {
                this.data.articles = articles;
                this.data.key = 'Популярные';
                this.view.render(this.data);
            });
    }
}
