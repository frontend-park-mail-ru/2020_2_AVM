"use strict";

// import '../styles.scss';
import './components/LogoutPage/LogoutPage.tmpl.js';
import './components/LogoutPage/LogoutPage.tmpl.js';
import './components/SettingsPage/SettingsPage.tmpl.js';
import './components/LoginPage/LoginPage.tmpl.js';
import './components/SignUpPage/SignUpPage.tmpl.js';
import './components/AddPage/AddPage.tmpl.js';
import './components/PostPage/PostPage.tmpl.js';
import './components/ProfilePage/ProfilePage.tmpl.js';
import './components/MainPage/MainPage.tmpl.js';
import './components/CategoryPage/CategoryPage.tmpl.js';
import './components/TagPage/TagPage.tmpl.js';

import {headerView} from './components/Header/header.js';
import {footerView} from './components/Footer/footer.js';
import {mobileMenu} from './components/MobileMenu/usingMobileMenu.js';
import {search} from './components/Search/search.js';

/* Base init */
const application = document.getElementById('app');
const header = document.createElement('div');
header.id = 'header';
const container = document.createElement('div');
container.id = 'container';
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
import TagPageController from './controllers/tag-controller.js';

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
            tag: {
                href: '/tags',
                text: 'Теги',
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
            tag: {
                href: '/tags',
                text: 'Теги',
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
    router.addRoute('/', new MainPageController(container));
    router.addRoute('/category', new CategoryPageController(container));
    router.addRoute('/tags', new TagPageController(container));
    router.addRoute('/login', new LoginController(container, header, footer, router));
    router.addRoute('/logout', new LogoutController(container, header, footer, router));
    router.addRoute('/signup', new SignUpController(container, header, footer, router));
    router.addRoute('/profile', new ProfilePageController(container, header, footer));
    router.addRoute('/settings', new SettingsPageController(container));
    router.addRoute('/add', new AddPageController(container, header, footer, router));
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