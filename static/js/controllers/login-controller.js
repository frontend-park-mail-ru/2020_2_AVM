import UserModel from '../../js/models/user-model.js'
import Controller from '../api/controller.js'
import Validation from '../utils/validation.js'
import LoginView from '../views/login-view.js';
import {headerView} from "../components/Header/header.js";
import {footerView} from "../components/Footer/footer.js";


export default class LoginController extends Controller {
    /**
     * constructor of controller
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent, header, footer, router) {
        super();
        this.parent = parent;
        this.headerContainer = header;
        this.footerContainer = footer;
        this.router = router;
        this.view = new LoginView(this.parent);
    }

    /**
     * error processing
     * @param  {HTMLElement} divMsgError - HTML container
     */
    addErrorMsg(divMsgError) {
        const msgLabel = document.createElement("Label");
        msgLabel.innerHTML = 'Длина логина должна быть не менее 8 символов';
        msgLabel.style.color = 'red';
        divMsgError.appendChild(msgLabel);
    }

    /**
     * check login processing
     * @param  {HTMLElement} divMsgError - HTML container
     * @param  {object} loginInput - HTML input
     * @param  {object} passwordInput - HTML input
     * @return {object} - login, password after checking
     */
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

    /**
     * action of controller, logic of login
     */
    action() {
        this.view.render(this.data);

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

            if (authData === undefined) {
                return;
            }

            const {login, password} = authData;

            // TODO: вынести часть логики в модель
            UserModel.makeLogin({login, password})
                .then(({status}) => {
                    if (status === 200) {
                        this.router.isLogin(true);
                        this.router.redirect('/profile');
                        headerView(this.headerContainer, this.config);
                        footerView(this.footerContainer, this.config);
                    }
                    if (status === 400) {
                        this.data.login = true;
                        this.action();
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    this.data.login = true;
                    this.action();
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