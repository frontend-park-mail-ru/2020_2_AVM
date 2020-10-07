import Methods from '../api/methods.js';
import Controller from '../api/controller.js';

let serverAddress = 'http://example.com/api'

export default class ProfilePageController extends Controller {
    #parent
    #data

    constructor(parent) {
        super();
        
        this.#parent = parent;
        this.#data = {};
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
    }

    action() {
        Methods.getUserData().then((res) => {
            if (res.status !== 200) {
                return Promise.reject(res);
            }

            res.json().then((res) => {
                const profileData = {
                    id: res.body.id,
                    login: res.body.login,
                    avatar: res.body.avatar,
                    quote: res.body.quote,
                    quoteAuthor: res.body.quoteAuthor,
                    about: res.body.about,
                    }
                this.#data = profileData;

                Methods.getUserArticles(this.#data.id)
                    .then((res) => {
                        if (res.status === 200) {
                            res.json().then((res) => {
                                this.#data.articles = res.body.articles;
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
                        console.error('fail to fetch profile');
                    }
                });

            })

        this.#parent.innerHTML = window.fest['js/components/ProfilePage/ProfilePage.tmpl'](this.#data);
    }

}