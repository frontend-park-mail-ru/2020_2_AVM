import Controller from '../api/controller.js';
import LogoutView from '../views/logout-view.js';
import UserModel from '../models/user-model.js';

import Router from "../api/router.js";
import {headerView} from "../components/Header/header.js";

export default class LogOutController extends Controller {
    #parent
    #data

    /**
     * constructor of controller
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent, header, config) {
        super();

        this.#parent = parent;
        this.#data = {};

        this.headerContainer = header;

        this.config = {
            signup: {
                href: '/signup',
                text: 'Зарегистрироваться',
            },
            login: {
                href: '/login',
                text: 'Авторизоваться',
            },
        };

        this.view = new LogoutView(parent);
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
     * action of controller, logic of logout
     */
    action() {
        this.view.render(this.#data);
        UserModel.makeLogout()
            .then(({status}) => {
                if (status === 200) {
                    Router.redirect('/login');
                    headerView(this.headerContainer, this.config);
                } else {
                    console.log('no logout');
                }
            })
            .catch((err) => {
                if (err instanceof Error) {
                    console.log(err);
                }
            });
    }
}