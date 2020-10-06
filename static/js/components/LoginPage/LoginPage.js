import Methods from '../../api/methods.js';

import {profilePage} from '../../views/ProfilePage/profilePage.js';

export class LoginPage {
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
        this.#parent.innerHTML = window.fest['js/components/LoginPage/LoginPage.tmpl'](this.#data);
    }

    submitForm() {
        const form = document.querySelector('form#form-login');
        const loginInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const login = loginInput.value.trim();
            const password = passwordInput.value.trim();

            Methods.makeLogin({login, password})
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
                    this.#data.login = true;
                    this.render();
                });
        })
    }

}