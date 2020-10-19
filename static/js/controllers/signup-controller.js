import UserModel from '../models/user-model.js';
import Controller from '../api/controller.js'
import Validation from '../utils/validation.js'
import SignUpView from '../views/signup-view.js';
import {headerView} from "../components/Header/header.js";

export default class SignUpController extends Controller {
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

        this.view = new SignUpView(this.#parent);
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
     * error processing
     * @param  {HTMLElement} divMsgError - HTML container
     * @param  {Object} inputError - input element
     */
    addErrorMsg(divMsgError, inputError) {
        const msgLabel = document.createElement("Label");
        if (inputError === 'Login'){
            msgLabel.innerHTML = 'Длина логина должна быть не менее 8 символов, логин не может содержать специальные символы';
            msgLabel.style.color = 'red';            
        }
        if (inputError === 'Email'){
            msgLabel.innerHTML = 'Неверно введена почта';
            msgLabel.style.color = 'red';            
        }
        if (inputError === 'empty or invalid'){
            msgLabel.innerHTML = 'Пароль не может быть пустым';
            msgLabel.style.color = 'red';            
        }
        if (inputError === 'short'){
            msgLabel.innerHTML = 'Длина пароля должна быть не менее 8 символов';
            msgLabel.style.color = 'red';            
        }
        if (inputError === 'no nums'){
            msgLabel.innerHTML = 'В пароле должны содержаться десятичные цифры';
            msgLabel.style.color = 'red';            
        }
        if (inputError === 'few nums'){
            msgLabel.innerHTML = 'В пароле должно содержаться более двух десятичных цифр';
            msgLabel.style.color = 'red';            
        }
        if (inputError === 'no latin'){
            msgLabel.innerHTML = 'В пароле должны содержатся латинские буквы';
            msgLabel.style.color = 'red';            
        }
        if (inputError === 'nums and latin'){
            msgLabel.innerHTML = 'В пароле должны содержатся латинские буквы и десятичные цифры';
            msgLabel.style.color = 'red';            
        }
        if (inputError === 'PassRep'){
            msgLabel.innerHTML = 'Пароли не совпадают';
            msgLabel.style.color = 'red';            
        }
        divMsgError.appendChild(msgLabel);
        
    }

    /**
     * check signup processing
     * @param  {HTMLElement} divMsgError - HTML container
     * @param  {object} loginInput - HTML input
     * @param  {object} emailInput - HTML input
     * @param  {object} passwordInput - HTML input
     * @return {object} - login, email, password after checking
     */
    checkSignup(divMsgError, loginInput, emailInput, passwordInput) {
        const login = loginInput.value.trim();
        const email = emailInput.value.trim();
        // const avatar = avatarInput.value.trim();
        // const quote = quoteInput.value.trim();
        // const quoteAuthor = quoteAuthorInput.value.trim();
        // const about = aboutInput.value.trim();
        const password = passwordInput.value.trim();
        // const passwordRepeat = passwordRepeatInput.value.trim();

        const checkLogin = Validation.validateLogin(login);
        var notValidated = false;
        if (!checkLogin) {
            this.addErrorMsg(divMsgError, 'Login');
            notValidated = true;
        }

        const checkEmail = Validation.validateEmail(email);
        if (!checkEmail) {
            this.addErrorMsg(divMsgError, 'Email');
            notValidated = true;
        }

        const checkPass = Validation.validatePassword(password);
        if (typeof checkPass !== 'undefined' && checkPass.length > 0) {
            checkPass.forEach(errPass => {
                this.addErrorMsg(divMsgError, errPass);
            });
            notValidated = true;
        }

        // const checkPassRepeat = Validation.validatePasswordRepeat(password, passwordRepeat);
        // if (!checkPassRepeat) {
        //     this.addErrorMsg(divMsgError, 'PassRep');
        //     notValidated = true;
        // }

        if (notValidated) {
            return void 0;
        }

        // return {login, email, avatar, quote, quoteAuthor, about, password, passwordRepeat};
        return {login, email, password};
    }

    /**
     * action of controller, logic of signup
     */
    action() {
        this.view.render(this.#data);

        const form = document.querySelector('form#form-sing-up');
        const loginInput = form.querySelector('input#inputLogin');
        const emailInput = form.querySelector('input#inputEmail');
        // const avatarInput = form.querySelector('input#inputAvatar');
        // const quoteInput = form.querySelector('textarea#inputQuote');
        // const quoteAuthorInput = form.querySelector('input#quoteAuthor');
        // const aboutInput = form.querySelector('textarea#aboutInput');
        const passwordInput = form.querySelector('input#password');
        // const passwordRepeatInput = form.querySelector('input#passwordRepeat');

        const divMsgError = document.createElement('div');
        form.parentNode.insertBefore(divMsgError, form);

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            const regData = this.checkSignup(divMsgError, loginInput, emailInput, passwordInput);
            if (!regData) {
                return;
            }

            const {login, email, password} = regData;

            UserModel.makeSignUp({
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
                    if (status === 201) {
                        // profilePage(this.#parent);
                        this.#data.sign = true;
                        this.view.render(this.#data);
                        // this.submitForm();
                        //////////////////////////////////
                        // Router.redirect('/profile');
                    } else {
                        // const {error} = JSON.parse(responseObject);
                        // console.log(error);
                        console.log('no sign');
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    // this.#data.sign = true;
                    // this.render();
                });
        });

        loginInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            // this.checkSignup(divMsgError, loginInput, emailInput, avatarInput, quoteInput, quoteAuthorInput, aboutInput, passwordInput, passwordRepeatInput, form);
            this.checkSignup(divMsgError, loginInput, emailInput, passwordInput, form);
        });

        emailInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            // this.checkSignup(divMsgError, loginInput, emailInput, avatarInput, quoteInput, quoteAuthorInput, aboutInput, passwordInput, passwordRepeatInput, form);
            this.checkSignup(divMsgError, loginInput, emailInput, passwordInput, form);
        });

        avatarInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            // this.checkSignup(divMsgError, loginInput, emailInput, avatarInput, quoteInput, quoteAuthorInput, aboutInput, passwordInput, passwordRepeatInput, form);
            this.checkSignup(divMsgError, loginInput, emailInput, passwordInput, form);
        });

        quoteInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            // this.checkSignup(divMsgError, loginInput, emailInput, avatarInput, quoteInput, quoteAuthorInput, aboutInput, passwordInput, passwordRepeatInput, form);
            this.checkSignup(divMsgError, loginInput, emailInput, passwordInput, form);
        });

        quoteAuthorInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            // this.checkSignup(divMsgError, loginInput, emailInput, avatarInput, quoteInput, quoteAuthorInput, aboutInput, passwordInput, passwordRepeatInput, form);
            this.checkSignup(divMsgError, loginInput, emailInput, passwordInput, form);
        });

        aboutInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            // this.checkSignup(divMsgError, loginInput, emailInput, avatarInput, quoteInput, quoteAuthorInput, aboutInput, passwordInput, passwordRepeatInput, form);
            this.checkSignup(divMsgError, loginInput, emailInput, passwordInput, form);
        });

        passwordInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            // this.checkSignup(divMsgError, loginInput, emailInput, avatarInput, quoteInput, quoteAuthorInput, aboutInput, passwordInput, passwordRepeatInput, form);
            this.checkSignup(divMsgError, loginInput, emailInput, passwordInput, form);
        });

        passwordRepeatInput.addEventListener('blur', (evt) => {
            evt.preventDefault();

            while (divMsgError.firstChild) {
                divMsgError.removeChild(divMsgError.lastChild);
            }
            // this.checkSignup(divMsgError, loginInput, emailInput, avatarInput, quoteInput, quoteAuthorInput, aboutInput, passwordInput, passwordRepeatInput, form);
            this.checkSignup(divMsgError, loginInput, emailInput, passwordInput, form);
        });
    }

}