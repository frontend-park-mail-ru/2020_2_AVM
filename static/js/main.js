"use strict";

import {headerView} from './components/Header/header.js';
import {footerView} from './components/Footer/footer.js';
import {mobileMenu} from './components/MobileMenu/usingMobileMenu.js';
import {search} from './components/Search/search.js';

import {profilePage} from './views/ProfilePage/profilePage.js';

import {SettingsPage} from './components/SettingsPage/SettingsPage.js';
import {AddPage} from './components/AddPage/AddPage.js';
import {SignUpPage} from './components/SignUpPage/SignUpPage.js';
import {LoginPage} from './components/LoginPage/LoginPage.js';
import {LogoutPage} from './components/LogoutPage/LogoutPage.js';

/* Base init */
const application = document.getElementById('app');
const header = document.createElement('div');
const container = document.createElement('div');
const footer = document.createElement('div');

application.appendChild(header);
application.appendChild(container);
application.appendChild(footer);

const config = {
    profile: {
        href: '/profile',
        text: 'Профиль',
        open: profileList,
    },
    settings: {
        href: '/settings',
        text: 'Настройки',
        open: settingsList,
    },
    signup: {
        href: '/signup',
        text: 'Зарегистрироваться',
        open: signupPage,
    },
    login: {
        href: '/login',
        text: 'Авторизоваться',
        open: loginPage,
    },
    // single: {
    //     href: '/single',
    //     text: 'Статья',
    //     open: singlePage,
    // },
    add: {
        href: '/add',
        text: 'Добавить',
        open: addPage,
    },
    logout: {
        href: '/logout',
        text: 'Выйти',
        open: logoutList,
    },
};

function loginPage() {
    container.innerHTML = '';

    const login = new LoginPage(container);
    login.data = {};
    login.render();
    login.submitForm();
}

function logoutList() {
    container.innerHTML = '';

    const logout = new LogoutPage(container);
    logout.data = {};
    logout.render();
}

function profileList() {
    profilePage(container);
}

// function singlePage() {
//     container.innerHTML = '';
//
//     const post = new PostPage(container);
//     post.data = {};
//     post.render();
// }

function signupPage() {
    container.innerHTML = '';

    const signup = new SignUpPage(container);
    signup.data = {};
    signup.render();
    signup.submitForm();
}

function settingsList() {
    container.innerHTML = '';

    const setting = new SettingsPage(container);
    setting.data = {};
    setting.render();
    setting.submitForm();
}

function addPage() {
    container.innerHTML = '';

    const add = new AddPage(container);
    add.data = {};
    add.render();
    add.submitForm();
}

// старый роутер
// application.addEventListener('click', (evt) => {
//     const {target} = evt;
//     if (target instanceof HTMLAnchorElement) {
//         evt.preventDefault();
//         config[target.dataset.section].open();
//     }
// });

headerView(header, config);
mobileMenu();
loginPage();
search();
footerView(footer, config);

/************* Router */
// TODO: избавиться от относительных путей во всём проекте
// доделать остальные контроллеры, модели, представления
import Router from '../js/api/router.js'
import LoginController from '../js/controllers/login-controller.js'
import SignUpController from '../js/controllers/signup-controller.js'

const router = new Router();
router.addRoute('/login', new LoginController(container));
router.addRoute('/signup', new SignUpController(container));
router.route();