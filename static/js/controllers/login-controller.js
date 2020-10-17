import UserModel from '../../js/models/user-model.js'
import Controller from '../api/controller.js'
import Validation from '../utils/validation.js'
import LoginView from '../views/login-view.js';
import Router from '../api/router.js';

export default class LoginController extends Controller {
    #parent
    #data

    constructor(parent) {
        super();

        this.#parent = parent;
        this.#data = {};
        
        this.view = new LoginView(this.#parent);
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
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

    action() {
        this.view.render(this.#data);

        const form = document.querySelector('form#form-login');
        const loginInput = form.querySelector('input[type="text"]');
        console.log("LI: ", loginInput)
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

            // TODO: вынести часть логики в модель
            UserModel.makeLogin({login, password})
                .then(({status}) => {
                    if (status === 200) {
                        profilePage(this.#parent);
                    }
                    if (status === 400) {
                        this.#data.login = true;
                        this.render();
                        this.submitForm();
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    // this.#data.login = true;
                    // this.render();
                });
        });

        loginInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            this.checkLogin(divMsgError, loginInput, passwordInput);
        });

        passwordInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            this.checkLogin(divMsgError, loginInput, passwordInput);
        });
    }

}