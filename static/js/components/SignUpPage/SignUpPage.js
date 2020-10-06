import Methods from "../../api/methods.js";
import {profilePage} from "../../views/ProfilePage/profilePage.js";

export class SignUpPage {
    #parent
    #data

    constructor(parent) {
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
        this.#parent.innerHTML = window.fest['js/components/SignUpPage/SignUpPage.tmpl'](this.#data);
    }

    submitForm() {
        const form = document.querySelector('form#form-sing-up');
        const loginInput = form.querySelector('input#inputLogin');
        const emailInput = form.querySelector('input#inputEmail');
        const avatarInput = form.querySelector('input#inputAvatar');
        const quoteInput = form.querySelector('textarea#inputQuote');
        const quoteAuthorInput = form.querySelector('input#quoteAuthor');
        const aboutInput = form.querySelector('textarea#aboutInput');
        const passwordInput = form.querySelector('input#password');
        const passwordRepeatInput = form.querySelector('input#passwordRepeat');

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

            Methods.makeSignUp({
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
                    this.#data.sign = true;
                    this.render();
                });
        })
    }

}