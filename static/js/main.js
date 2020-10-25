"use strict";

import {headerView} from './components/Header/header.js';
import {footerView} from './components/Footer/footer.js';
import {mobileMenu} from './components/MobileMenu/usingMobileMenu.js';
import {search} from './components/Search/search.js';

/* Base init */
const application = document.getElementById('app');
const header = document.createElement('div');
const container = document.createElement('div');
const footer = document.createElement('div');

application.appendChild(header);
application.appendChild(container);
application.appendChild(footer);

let config = {};

let stateLogin = false;

/************* Router */
// TODO: избавиться от относительных путей во всём проекте
// доделать остальные контроллеры, модели, представления
import Router from '../js/api/router.js'
import LoginController from '../js/controllers/login-controller.js'
import LogoutController from '../js/controllers/logout-controller.js'
import SignUpController from '../js/controllers/signup-controller.js'
import AddPageController from './controllers/addpage-controller.js';
import SettingsPageController from './controllers/settings-controller.js';
import ProfilePageController from './controllers/profile-controller.js';
import MainPageController from './controllers/main-controller.js';
import CategoryPageController from './controllers/category-controller.js';

import UserModel from './models/user-model.js';
UserModel.getUserData().then((res) => {
    if (res.status !== 201) {
        stateLogin = false;
        config = {
            main: {
                href: '/',
                text: 'Главная',
            },
            category: {
                href: '/category',
                text: 'Категории',
            },
            signup: {
                href: '/signup',
                text: 'Зарегистрироваться',
            },
            login: {
                href: '/login',
                text: 'Авторизоваться',
            },
        }
    } else {
        stateLogin = true;
        config = {
            main: {
                href: '/',
                text: 'Главная',
            },
            category: {
                href: '/category',
                text: 'Категории',
            },
            profile: {
                href: '/profile',
                text: 'Профиль',
            },
            settings: {
                href: '/settings',
                text: 'Настройки',
            },
            add: {
                href: '/add',
                text: 'Добавить',
            },
            logout: {
                href: '/logout',
                text: 'Выйти',
            },
        }
    }

    headerView(header, config);
    mobileMenu();
    search();
    footerView(footer, config);

    const router = new Router(stateLogin);
    router.addRoute('/', new MainPageController(container, header, config));
    router.addRoute('/category', new CategoryPageController(container, header, config));
    router.addRoute('/login', new LoginController(container, header, config, router));
    router.addRoute('/logout', new LogoutController(container, header, config, router));
    router.addRoute('/signup', new SignUpController(container, header, router));
    router.addRoute('/profile', new ProfilePageController(container, header, config));
    router.addRoute('/settings', new SettingsPageController(container, header, config, router));
    router.addRoute('/add', new AddPageController(container, header, config, router));
    router.route();
})
    .catch((err) => {
        if (err instanceof Error) {
            console.log(err);
            console.log("no internet");
        }
        container.innerHTML = `
        <section class="s-content s-styles">
         <div class="row">
            <div class="column large-12 intro">
                <h1>Сервис недоступен</h1>
            </div>
     </section>
    `;
});