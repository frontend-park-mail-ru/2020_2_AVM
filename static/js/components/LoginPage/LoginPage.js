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

    addErrorMsg(form) {
        const msgLabel = document.createElement("Label");
        msgLabel.innerHTML = 'Длина логина должна быть не менее 8 символов';
        msgLabel.style.color = 'red';
        form.parentNode.insertBefore(msgLabel, form);
    }

    checkLogin(loginInput, passwordInput, form) {
        const login = loginInput.value.trim();
        const password = passwordInput.value.trim();

        const checkLoginLength = Validation.validateLoginLength(login);
            if (!checkLoginLength) {
                this.addErrorMsg(form);
                return void 0;
            }

        return {login, password};
    }

    submitForm() {
        const form = document.querySelector('form#form-login');
        const loginInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');

        /*
        TODO:
        Добавить в форме обработку события blur (когда пользователь теряет фокус с какого-то поля, должна пройти валидация)
        */
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            // const login = loginInput.value.trim();
            // const password = passwordInput.value.trim();
            const authData = this.checkLogin(loginInput, passwordInput, form);
            if (authData !== undefined) {
                const login = authData.login;
                const password = authData.password;
            }

            /*
            TODO:
            вынести в отдельные функции (валидация, обновление вёрстки)
            создать единый стиль ошибок при валидации (добавить в styles.css)
            */
            

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