"use strict";

import {headerView} from './components/Header/header.js';
import {footerView} from './components/Footer/footer.js';
import {mobileMenu} from './components/MobileMenu/usingMobileMenu.js';
import {search} from './components/Search/search.js';

import {ProfilePage} from './components/ProfilePage/ProfilePage.js';
import {PostPage} from './components/PostPage/PostPage.js';
import {AddPage} from './components/AddPage/AddPage.js';
import {SignUpPage} from './components/SignUpPage/SignUpPage.js';
import {LoginPage} from './components/LoginPage/LoginPage.js';

import Methods from './api/methods.js';

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
        open: profilePage,
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
    single: {
        href: '/single',
        text: 'Статья',
        open: singlePage,
    },
    add: {
        href: '/add',
        text: 'Добавить',
        open: addPage,
    },
};

function loginPage() {
    container.innerHTML = '';

    const login = new LoginPage(container);
    login.data = "eeee";
    login.render();

}

function profilePage() {
    container.innerHTML = '';

    const profile = new ProfilePage(container);
    profile.data = "eeee";
    profile.render();

}

function singlePage() {
    container.innerHTML = '';

    const post = new PostPage(container);
    post.data = "eeee";
    post.render();
}

function signupPage() {
    container.innerHTML = '';

    const signup = new SignUpPage(container);
    signup.data = "eeee";
    signup.render();
}

function addPage() {
    container.innerHTML = '';

    const add = new AddPage(container);
    add.data = "eeee";
    add.render();
}

application.addEventListener('click', (evt) => {
    const {target} = evt;

    if (target instanceof HTMLAnchorElement) {
        evt.preventDefault();
        config[target.dataset.section].open();
    }
});



headerView(header, config);
mobileMenu();
loginPage();
search();
footerView(footer, config);