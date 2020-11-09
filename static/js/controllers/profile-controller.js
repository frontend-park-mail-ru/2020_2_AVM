import Controller from '../api/controller.js';
import ProfileView from '../views/profile-view.js';
import UserModel from '../models/user-model.js';
import ArticleModel from '../models/article-model.js';
import {headerView} from "../components/Header/header.js";
import {footerView} from "../components/Footer/footer.js";
import {categories} from '../settings/categories.js';

let ok = '';

export default class ProfilePageController extends Controller {
    /**
     * constructor of controller
     * @param {HTMLElement} parent - HTML container
     * @param {HTMLElement} header - HTML container
     * @param {Object} config - list menu
     */
    constructor(parent, header, footer) {
        super();
        this.parent = parent;
        this.data = {login: 'Вы не вошли'};
        this.headerContainer = header;
        this.footerContainer = footer;
        this.data.categories = categories;
        this.view = new ProfileView(this.parent);
    }


    /**
     * action of controller, logic of profile
     */
    action() {

        // this.view.render(this.data);

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
                    this.data = profileData;

                    UserModel.getUserAvatar(this.data.avatar)
                        .then((res) => {
                            this.data.image = res.url;

                            // this.view.render(this.data);

                            ArticleModel.getUserArticles(this.data.id)
                                .then((res) => {
                                    if (res.status === 200) {
                                        res.json().then((res) => {
                                            this.data.categories = categories;
                                            if (res === null) {
                                                this.data.isArticle = true;
                                                this.data.ok = ok;
                                                this.view.render(this.data);
                                                headerView(this.headerContainer, this.config);
                                                footerView(this.footerContainer, this.config);
                                                this.addSub();
                                            } else {
                                                this.data.articles = res;
                                                this.data.ok = ok;
                                                this.view.render(this.data);
                                                headerView(this.headerContainer, this.config);
                                                footerView(this.footerContainer, this.config);
                                                this.addSub();
                                            }
                                        });
                                    }
                                })
                                .catch((err) => {
                                    if (err.status === 500) {
                                        console.error('failed to fetch articles');
                                    }
                                })
                                .catch((err) => {

                                    if (err.status === 500) {
                                        console.error('failed to fetch avatar');
                                    }
                                });

                        })
                        .catch((err) => {
                            if (err.status === 500) {
                                console.error('fail to fetch profile');
                                this.action();
                            }
                        });
                });
            });

    }

    addSub() {
        const form = document.querySelector('form#form-add-category');
        const category_titleInput = form.querySelector('select#categoryTitle.select-category');

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const category_title = category_titleInput.value.trim();

            let formData = new FormData();
            formData.append('category_title', category_title);

            ArticleModel.addSubcribe(formData)
                .then(({status}) => {
                    if (status === 200) {
                        console.log("done");
                        ok = 'оформлена';
                        this.action();

                    } else {
                        console.log("error add");
                        this.data.success = true;
                        this.action();
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    this.action();
                });
        })
    }
}