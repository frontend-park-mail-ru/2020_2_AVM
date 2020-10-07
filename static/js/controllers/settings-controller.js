import Methods from "../api/methods.js";
import {profilePage} from "../views/ProfilePage/profilePage.js";
import Controller from "../api/controller.js";

export default class SettingsPageController extends Controller {
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

    render() {
        this.#parent.innerHTML = window.fest['js/components/SettingsPage/SettingsPage.tmpl'](this.#data);
    }

    action() {
        this.render();

        const form = document.querySelector('form#form-update');
        const loginInput = form.querySelector('input#updateLogin');
        const emailInput = form.querySelector('input#updateEmail');
        const avatarInput = form.querySelector('input#updateAvatar');
        const quoteInput = form.querySelector('textarea#updateQuote');
        const quoteAuthorInput = form.querySelector('input#updateQuoteAuthor');
        const aboutInput = form.querySelector('textarea#updateAboutInput');
        const passwordInput = form.querySelector('input#updatePassword');
        const passwordRepeatInput = form.querySelector('input#updatePasswordRepeat');

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const login = loginInput.value.trim();
            const email = emailInput.value.trim();
            const avatar = avatarInput.value.trim();
            const quote = quoteInput.value.trim();
            const quoteAuthor = quoteAuthorInput.value.trim();
            const about = aboutInput.value.trim();
            const password = passwordInput.value.trim();
            const passwordRepeat = passwordRepeatInput.value.trim();

            Methods.updateUser({
                login,
                email,
                avatar,
                quote,
                quoteAuthor,
                about,
                password,
                passwordRepeat,
            })
                .then(({statusCode, responseObject}) => {
                    if (statusCode === 200) {
                        profilePage(this.#parent);
                    } else {
                        const {error} = JSON.parse(responseObject);
                        console.log(error);
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    this.#data.success = true;
                    this.render();
                });
        })
    }

}