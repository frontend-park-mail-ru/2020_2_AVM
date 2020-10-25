import Controller from '../api/controller.js';
import ProfileView from '../views/profile-view.js';
import UserModel from '../models/user-model.js';
import ArticleModel from '../models/article-model.js';
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

        this.headerContainer = header;

        this.config = {
            main: {
                href: '/',
                text: 'Главная',
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

        this.view = new ProfileView(this.#parent);
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

        this.view.render(this.#data);

        UserModel.getUserData()
            .then((res) => {
                if (res.status !== 201) {
                    return Promise.reject(res);
                }
                res.json().then((res) => {
                    const profileData = {
                        id: res.id,
                        login: res.login,
                        email: res.email,
                        avatar: res.avatar,
                    }
                    this.#data = profileData;

                    UserModel.getUserAvatar(this.#data.avatar)
                        .then((res) => {
                            console.log(res);
                            res.json().then((res) => {console.log(res);});
                            this.#data.image = res.url;
                            this.view.render(this.#data);

                            ArticleModel.getUserArticles(this.#data.id)
                                .then((res) => {
                                    if (res.status === 200) {
                                        res.json().then((res) => {
                                            this.#data.articles = res;
                                            this.view.render(this.#data);
                                            headerView(this.headerContainer, this.config);
                                        });
                                    }
                                })
                                .catch((err) => {
                                    if (err.status === 500) {
                                        console.error('failed to fetch articles');
                                    }
                            });
                        })
                        .catch((err) => {
                            if (err.status === 500) {
                                console.error('failed to fetch avatar');
                            }
                        });

            })
            .catch((err) => {
                if (err.status === 500) {
                    this.#parent.innerHTML = window.fest['js/components/ProfilePage/ProfilePage.tmpl'](this.#data);
                    console.error('fail to fetch profile');
                }
            });
        });
    }

}