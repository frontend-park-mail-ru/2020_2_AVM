import UserModel from '../models/user-model.js';
import Controller from '../api/controller.js'
import Validation from '../utils/validation.js'
import SignUpView from '../views/signup-view.js';
import {headerView} from "../components/Header/header.js";

export default class SignUpController extends Controller {
    /**
     * constructor of controller
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent, header, router) {
        super();
        this.parent = parent;
        this.headerContainer = header;
        this.router = router;
        this.view = new SignUpView(this.parent);
    }

    /**
     * error processing
     * @param  {HTMLElement} divMsgError - HTML container
     * @param  {Object} inputError - input element
     */
    addErrorMsgLogin(form) {
        const errorLogin = form.querySelector('label#errorLogin');
        errorLogin.style.color = 'red';
        errorLogin.innerHTML = 'Длина логина должна быть не менее 8 символов, логин не может содержать специальные символы';
    }

    addErrorMsgEmail(form) {
        const errorEmail = form.querySelector('label#errorEmail');
        errorEmail.style.color = 'red';
        errorEmail.innerHTML = 'Неверно введена почта';
    }

    addErrorMsgPassword(form) {
        const errorPassword = form.querySelector('label#errorPassword');
        errorPassword.style.color = 'red';
        errorPassword.innerHTML = 'В пароле должны содержатся латинские буквы и десятичные цифры, ' +
                'длина не менее 8 символов';
    }

    /**
     * check signup processing
     * @param  {HTMLElement} divMsgError - HTML container
     * @param  {object} loginInput - HTML input
     * @param  {object} emailInput - HTML input
     * @param  {object} passwordInput - HTML input
     * @return {object} - login, email, password after checking
     */
    checkSignup(form, loginInput, emailInput, passwordInput) {
        const login = loginInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        const checkLogin = Validation.validateLogin(login);
        let notValidated = false;
        if (!checkLogin) {
            this.addErrorMsgLogin(form);
            notValidated = true;
        } else {
            const errorLogin = form.querySelector('label#errorLogin');
            errorLogin.innerHTML = '';
        }

        const checkEmail = Validation.validateEmail(email);
        if (!checkEmail) {
            this.addErrorMsgEmail(form);
            notValidated = true;
        } else {
            const errorEmail = form.querySelector('label#errorEmail');
            errorEmail.innerHTML = '';
        }

        const checkPass = Validation.validatePassword(password);
        if (typeof checkPass !== 'undefined' && checkPass.length > 0) {
                this.addErrorMsgPassword(form)
            notValidated = true;
        } else {
            const errorPassword = form.querySelector('label#errorPassword');
            errorPassword.innerHTML = '';
        }

        if (notValidated) {
            return void 0;
        }

        return {login, email, password};
    }

    /**
     * action of controller, logic of signup
     */
    action() {
        this.view.render(this.data);

        const form = document.querySelector('form#form-sing-up');
        const loginInput = form.querySelector('input#inputLogin');
        const emailInput = form.querySelector('input#inputEmail');
        const passwordInput = form.querySelector('input#inputPassword');

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const regData = this.checkSignup(form, loginInput, emailInput, passwordInput);
            if (!regData) {
                return;
            }

            const {login, email, password} = regData;

            UserModel.makeSignUp({
                login,
                email,
                password,
            })
                .then(({status}) => {
                    if (status === 201) {
                        this.data.sign = true;
                        this.data.success = false;
                        this.action()
                        UserModel.makeLogin({login, password})
                            .then(({status}) => {
                                if (status === 200) {
                                    this.router.isLogin(true);
                                    this.router.redirect('/profile');
                                    headerView(this.headerContainer, this.config);
                                }
                                if (status === 400) {
                                    this.data.sign = false;
                                    this.data.success = true;
                                    this.action()
                                }
                            })
                            .catch((err) => {
                                if (err instanceof Error) {
                                    console.log(err);
                                }
                                this.data.sign = false;
                                this.data.success = true;
                                this.action()
                            });
                    } else {
                        console.log('no sign');
                        this.data.sign = false;
                        this.data.success = true;
                        this.action()
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    this.data.sign = false;
                    this.data.success = true;
                    this.action()
                });
        });

        loginInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            this.checkSignup(form, loginInput, emailInput, passwordInput);
        });

        emailInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            this.checkSignup(form, loginInput, emailInput, passwordInput);
        });

        passwordInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            this.checkSignup(form, loginInput, emailInput, passwordInput);
        });
    }

}