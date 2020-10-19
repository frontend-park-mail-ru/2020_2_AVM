"use strict";

import {headerView} from './components/Header/header.js';
import {footerView} from './components/Footer/footer.js';
import {mobileMenu} from './components/MobileMenu/usingMobileMenu.js';
import {search} from './components/Search/search.js';

// import {profilePage} from './views/ProfilePage/profilePage.js';

// import {SettingsPage} from './components/SettingsPage/SettingsPage.js';
// import {AddPage} from './components/AddPage/AddPage.js';
// import {SignUpPage} from './components/SignUpPage/SignUpPage.js';
// import {LoginPage} from './components/LoginPage/LoginPage.js';
// import {LogoutPage} from './components/LogoutPage/LogoutPage.js';

/* Base init */
const application = document.getElementById('app');
const header = document.createElement('div');
const container = document.createElement('div');
const footer = document.createElement('div');

application.appendChild(header);
application.appendChild(container);
application.appendChild(footer);

let config = {};

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

//TODO: вызвать запрос на профиль
import UserModel from './models/user-model.js';
UserModel.getUserData().then((res) => {
    if (res.status !== 201) {
        config = {
            signup: {
                href: '/signup',
                text: 'Зарегистрироваться',
            },
            login: {
                href: '/login',
                text: 'Авторизоваться',
            },
        };
    } else {
        config = {
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


    const router = new Router();
    router.addRoute('/', new LoginController(container, header, config));
    router.addRoute('/login', new LoginController(container, header, config));
    router.addRoute('/logout', new LogoutController(container, header, config));
    router.addRoute('/signup', new SignUpController(container));
    router.addRoute('/profile', new ProfilePageController(container, header, config));
    router.addRoute('/settings', new SettingsPageController(container, header, config));
    router.addRoute('/add', new AddPageController(container, header, config));
    router.route();
});