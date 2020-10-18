import Controller from '../api/controller.js';
import SettingsView from '../views/settings-view.js';
import UserModel from '../models/user-model.js';

export default class SettingsPageController extends Controller {
    #parent
    #data

    /**
     * constructor of controller
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent) {
        super();

        this.#parent = parent;
        this.#data = {};

        this.view = new SettingsView(parent);
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
     * action of controller, logic of settings
     */
    action() {
        this.view.render(this.#data);

        const form = document.querySelector('form#form-update');
        const loginInput = form.querySelector('input#updateLogin');
        const emailInput = form.querySelector('input#updateEmail');
        // const avatarInput = form.querySelector('input#updateAvatar');
        // const quoteInput = form.querySelector('textarea#updateQuote');
        // const quoteAuthorInput = form.querySelector('input#updateQuoteAuthor');
        // const aboutInput = form.querySelector('textarea#updateAboutInput');
        const passwordInput = form.querySelector('input#updatePassword');
        // const passwordRepeatInput = form.querySelector('input#updatePasswordRepeat');

        const fileInput = form.querySelector('input#updateAvatar') ;
        const imageData = new FormData();

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const login = loginInput.value.trim();
            const email = emailInput.value.trim();
            // const avatar = avatarInput.value.trim();
            // const quote = quoteInput.value.trim();
            // const quoteAuthor = quoteAuthorInput.value.trim();
            // const about = aboutInput.value.trim();
            const password = passwordInput.value.trim();
            // const passwordRepeat = passwordRepeatInput.value.trim();
            imageData.append("avatar", fileInput.files[0], fileInput.files[0].name);

            UserModel.updateUser({
                login,
                email,
                // avatar,
                // quote,
                // quoteAuthor,
                // about,
                password,
                // passwordRepeat,
            })
                .then(({status}) => {
                    console.log(status);
                    if (status === 200) {
                        UserModel.updateUserAvatar(imageData)
                        .then(({status}) => {
                            console.log(status);
                                    if (status === 200) {
                                        profilePage(this.#parent);
                                    } else {
                                        console.log('error');
                                    }
                        })
                        .catch((err) => {
                            if (err instanceof Error) {
                                console.log(err);
                            }
                            this.#data.success = true;
                            this.view.render();
                        });
                        // profilePage(this.#parent);
                    } else {
                        console.log('error');
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    this.#data.success = true;
                    this.view.render();
                });
        })
    }

}