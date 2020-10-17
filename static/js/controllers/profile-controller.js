import Controller from '../api/controller.js';
import ProfileView from '../views/profile-view.js';
import UserModel from '../models/user-model.js';
import ArticleModel from '../models/article-model.js';

let serverAddress = 'http://example.com/api'

export default class ProfilePageController extends Controller {
    #parent
    #data

    constructor(parent) {
        super();
        
        this.#parent = parent;
        this.#data = {login: 'Вы не вошли'};

        this.view = new ProfileView(this.#parent);
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
    }

    action() {
        UserModel.getUserData()
            .then((res) => {
                if (res.status !== 201) {
                    return Promise.reject(res);
                }

                res.json()
                    .then((res) => {
                        const profileData = {
                            id: res.body.id,
                            login: res.body.login,
                            email: res.body.email,
                            avatar: res.body.avatar,
                            // quote: res.body.quote,
                            // quoteAuthor: res.body.quoteAuthor,
                            // about: res.body.about,
                            }
                        this.#data = profileData;

                        UserModel.getUserAvatar(this.#data.avatar)
                            .then((res) => {
                                this.#data.image = res.body.url;

                                ArticleModel.getUserArticles(this.#data.id)
                                    .then((res) => {
                                        if (res.status === 200) {
                                            res.json().then((res) => {
                                                this.#data.articles = res;
                                                console.log(this.#data.articles);
                                                this.#parent.innerHTML = window.fest['js/components/ProfilePage/ProfilePage.tmpl'](this.#data);
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

                //     UserModel.getUserArticles(this.#data.id)
                //         .then((res) => {
                //             if (res.status === 200) {
                //                 res.json().then((res) => {
                //                     this.#data.articles = res.body.articles;
                //                 });
                //             }
                //         })
                //         .catch((err) => {
                //             if (err.status === 500) {
                //                 console.error('failed to fetch articles');
                //             }
                //         });

                //     })
                // .catch((err) => {
                //         if (err.status === 500) {
                //             console.error('fail to fetch profile');
                //         }
                //     });

            })
            .catch((err) => {
                if (err.status === 500) {
                    this.#parent.innerHTML = window.fest['js/components/ProfilePage/ProfilePage.tmpl'](this.#data);
                    console.error('fail to fetch profile');
                }
            });
        });

        this.view.render(this.#data);
    }

}