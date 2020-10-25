import Controller from '../api/controller.js';
import MainView from '../views/main-view.js';

import {headerView} from "../components/Header/header.js";

export default class ProfilePageController extends Controller {
    #parent
    #data

    /**
     * constructor of controller
     * @param {HTMLElement} parent - HTML container
     * @param {HTMLElement} header - HTML container
     * @param {Object} config - list menu
     */
    constructor(parent, header, config) {
        super();

        this.#parent = parent;
        this.#data = {login: 'Вы не вошли'};

        this.view = new MainView(this.#parent);
    }

    /**
     * get data of controller
     */
    get data() {
        return this.#data;
    }

    /**
     * set data of controller
     * @param  {object} data - object of data of controller
     */
    set data(data) {
        this.#data = data;
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
        ];

        this.#data.articles = articles;

        this.view.render(this.#data);

    }

}