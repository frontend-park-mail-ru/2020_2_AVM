import Controller from '../api/controller.js';
import AddPageView from '../views/addpage-view.js';
import ArticleModel from '../models/article-model.js';
import {headerView} from "../components/Header/header.js";

export default class AddPageController extends Controller {
    #parent
    #data

    /**
     * constructor of controller
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent,header, config, router) {
        super();

        this.#parent = parent;
        this.#data = {};

        this.headerContainer = header;

        this.router = router;

        this.config = {
            main: {
                href: '/',
                text: 'Главная',
            },
            category: {
                href: '/category',
                text: 'Категории',
            },
            profile: {
                href: '/profile',
                text: 'Профиль',
            },
            settings: {
                href: '/settings',
                text: 'Настройки',
            },
            add: {
                href: '/add',
                text: 'Добавить',
            },
            logout: {
                href: '/logout',
                text: 'Выйти',
            },
        }

        this.view = new AddPageView(this.#parent);
    }

    /**
     * get of controller
     */
    get data() {
        return this.#data;
    }

    /**
     * set of controller
     * @param  {object} data - object of data of controller
     */
    set data(data) {
        this.#data = data;
    }

    /**
     * action of controller, logic of add
     */
    action() {
        this.view.render(this.#data);

        const form = document.querySelector('form#form-add-article');
        const articleTitleInput = form.querySelector('input#articleTitle');
        const articleDescInput = form.querySelector('input#articleDesc');
        const articleTextInput = form.querySelector('textarea#articleText');

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const title = articleTitleInput.value.trim();
            const desc = articleDescInput.value.trim();
            const content = articleTextInput.value.trim();

            ArticleModel.makeArticle({
                title,
                desc,
                content,
            })
                .then(({status}) => {
                    if (status === 201) {
                        this.router.redirect('/profile');
                        headerView(this.headerContainer, this.config);
                    } else {
                        console.log("error add");
                        this.#data.success = true;
                        this.view.render(this.#data);
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    this.#data.success = true;
                    this.view.render(this.#data);
                });
        })
    }

}