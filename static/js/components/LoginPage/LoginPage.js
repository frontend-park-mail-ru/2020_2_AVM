import Methods from '../../api/methods.js';

import {profilePage} from '../../views/ProfilePage/profilePage.js';

import Validation from '../../utils/validation.js';

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

    addErrorMsg(divMsgError) {
        const msgLabel = document.createElement("Label");
        msgLabel.innerHTML = 'Длина логина должна быть не менее 8 символов';
        msgLabel.style.color = 'red';
        divMsgError.appendChild(msgLabel);
    }

    checkLogin(divMsgError, loginInput, passwordInput) {
        const login = loginInput.value.trim();
        const password = passwordInput.value.trim();

        const checkLoginLength = Validation.validateLoginLength(login);
            if (!checkLoginLength) {
                this.addErrorMsg(divMsgError);
                return void 0;
            }

        return {login, password};
    }

    submitForm() {
        const form = document.querySelector('form#form-login');
        const loginInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');

        const divMsgError = document.createElement('div');
        form.parentNode.insertBefore(divMsgError, form);

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }

            const authData = this.checkLogin(divMsgError, loginInput, passwordInput);
            if (authData !== undefined) {
                return;
            }            

            Methods.makeLogin(authData)
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

        loginInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            this.checkLogin(divMsgError, loginInput, passwordInput);
        })

        passwordInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            this.checkLogin(divMsgError, loginInput, passwordInput);
        })
    }

}