"use strict";

import {ProfilePage} from './components/ProfilePage/ProfilePage.js';
import {PostPage} from './components/PostPage/PostPage.js';

/* Base init */
const application = document.getElementById('app');
const header = document.createElement('div');
const container = document.createElement('div');
const footer = document.createElement('div');

application.appendChild(header);
application.appendChild(container);
application.appendChild(footer);


const config = {
    home: {
        href: '/',
        text: 'Главная',
        open: homePage,
    },
    list: {
        href: '/list',
        text: 'Статьи',
        open: listPage,
    },
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

function ajax(method, url, body = null, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        callback(xhr.status, xhr.responseText);
    });

    if (body) {
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf8');
        xhr.send(JSON.stringify(body));
        return;
    }

    xhr.send();
}

/* Mobile Menu -------------------------- */
const MobileMenu = function () {

    const navWrap = document.querySelector('.s-header__nav-wrap');
    const closeNavWrap = navWrap.querySelectorAll('.s-header__overlay-close');
    const menuToggle = document.querySelector('.s-header__toggle-menu');
    const siteBody = document.querySelector('body');

    menuToggle.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        siteBody.classList.add('nav-wrap-is-visible');

    };

    closeNavWrap.forEach((item) =>
        item.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();

            if (siteBody.classList.contains('nav-wrap-is-visible')) {
                siteBody.classList.remove('nav-wrap-is-visible');
            }
        })


    document.querySelector('.s-header__nav')
        .querySelectorAll('.has-children').forEach((item) => {
            item.querySelectorAll('a')
                .onclick = function (e) {
                e.preventDefault();

                if (document.querySelector(".close-mobile-menu").is(":visible") === true) {

                    this.toggleClass('sub-menu-is-open')
                        .next('ul')
                        .slideToggle(200)
                        .end()
                        .parent('.has-children')
                        .siblings('.has-children')
                        .children('a')
                        .removeClass('sub-menu-is-open')
                        .next('ul')
                        .slideUp(200);
                }
            }
        }
    )

};


/* search ------------------------- */
const ssSearch = function () {

    const searchWrap = document.querySelector('.s-header__search');
    const searchTrigger = document.querySelector('.s-header__search-trigger');

    if (!(searchWrap && searchTrigger)) return;

    const searchField = searchWrap.querySelector('.s-header__search-field');
    const closeSearch = searchWrap.querySelector('.s-header__overlay-close');
    const siteBody = document.querySelector('body');

    searchTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        siteBody.classList.add('search-is-visible');
    });

    closeSearch.addEventListener('click', function (e) {
        e.stopPropagation();

        if (siteBody.classList.contains('search-is-visible')) {
            siteBody.classList.remove('search-is-visible');
        }
    });

    searchWrap.addEventListener('click', function (e) {
        if (!(e.target.matches('.s-header__search-field'))) {
            closeSearch.dispatchEvent(new Event('click'));
        }
    });

    searchField.addEventListener('click', function (e) {
        e.stopPropagation();
    })

    searchField.setAttribute('placeholder', 'Введите запрос');
    searchField.setAttribute('autocomplete', 'off');

};


function headerView() {

    header.innerHTML = '';

    const menuElement = document.createElement('header');
    menuElement.className = 's-header';

    const headerContent = document.createElement('div');
    headerContent.className = 'row';
    headerContent.classList.add('s-header__content');

    const sHeaderLogo = document.createElement('div');
    sHeaderLogo.className = 's-header__logo';

    const aLogo = document.createElement('a');
    aLogo.className = 'logo';

    const imgLogo = document.createElement('img');

    menuElement.appendChild(headerContent);
    headerContent.appendChild(sHeaderLogo);
    sHeaderLogo.appendChild(aLogo);
    aLogo.appendChild(imgLogo);

    imgLogo.src = "images/logo.svg"
    imgLogo.alt = "Логотип"


    const sHeaderNavWrap = document.createElement('nav');
    sHeaderNavWrap.className = 's-header__nav-wrap';

    const sHeaderNavHeading = document.createElement('h2');
    sHeaderNavHeading.className = 's-header__nav-heading';
    sHeaderNavHeading.classList.add('h6');
    sHeaderNavHeading.textContent = "Навигация";

    const sHeaderNav = document.createElement('ul');
    sHeaderNav.className = 's-header__nav';

    headerContent.appendChild(sHeaderNavWrap);
    sHeaderNavWrap.appendChild(sHeaderNavHeading);
    sHeaderNavWrap.appendChild(sHeaderNav);

    Object
        .keys(config)
        .map((menuKey) => {
            const {href, text} = config[menuKey];

            const menuItem = document.createElement('li');
            const menuLink = document.createElement('a');

            menuItem.appendChild(menuLink);

            menuLink.href = href;
            menuLink.textContent = text;
            menuLink.dataset.section = menuKey;

            return menuItem;
        })
        .forEach((element) => {
            sHeaderNav.appendChild(element);
        })
    ;


    const aCloseMenu = document.createElement('a');
    aCloseMenu.className = 's-header__overlay-close';
    aCloseMenu.classList.add('close-mobile-menu');
    aCloseMenu.textContent = "Закрыть";

    sHeaderNavWrap.appendChild(aCloseMenu);

    const aSHeaderToggleMenu = document.createElement('a');
    aSHeaderToggleMenu.className = 's-header__toggle-menu';
    const spanText = document.createElement('span');
    spanText.textContent = "Навигация";
    aSHeaderToggleMenu.appendChild(spanText);

    headerContent.appendChild(aSHeaderToggleMenu);


    const divSearch = document.createElement('div');
    divSearch.className = 's-header__search';

    headerContent.appendChild(divSearch);

    const formSearch = document.createElement('form');
    formSearch.className = 's-header__search-form';
    formSearch.role = "search";
    formSearch.method = "get";
    formSearch.action = "#";

    divSearch.appendChild(formSearch);

    const label = document.createElement('label');

    formSearch.appendChild(label);

    const hideContent = document.createElement('span');
    hideContent.className = 'hide-content';
    hideContent.textContent = "Искать для:";

    const inputSearch = document.createElement('input');
    inputSearch.type = "search";
    inputSearch.className = "s-header__search-field";
    inputSearch.placeholder = "Введите запрос";
    inputSearch.name = "s";
    inputSearch.title = "Search for:";
    inputSearch.autocomplete = "off";
    inputSearch.title = "Search for:";

    label.appendChild(hideContent);
    label.appendChild(inputSearch);

    const submitSearch = document.createElement('input');
    submitSearch.type = "submit";
    submitSearch.className = "s-header__search-submit";
    submitSearch.value = "Search";

    formSearch.appendChild(submitSearch);

    const aCloseSearch = document.createElement('a');
    submitSearch.title = "Close Search";
    submitSearch.className = "s-header__overlay-close";
    submitSearch.textContent = "Закрыть";

    divSearch.appendChild(aCloseSearch);

    const aHeaderSearchTrigger = document.createElement('a');
    aHeaderSearchTrigger.className = "s-header__search-trigger";
    aHeaderSearchTrigger.href = "#";

    headerContent.appendChild(aHeaderSearchTrigger);

    const svgItem = document.createElement('svg');
    svgItem.xmlns = "http://www.w3.org/2000/svg";
    svgItem.viewBox = "0 0 24 24";

    aHeaderSearchTrigger.appendChild(svgItem);

    const pathItem = document.createElement('path');
    pathItem.d = "M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z";

    svgItem.appendChild(pathItem);

    header.appendChild(menuElement);

}

function footerView() {
    footer.innerHTML =
        `
        <footer class="s-footer">
            <div class="s-footer__main">
                <div class="row">
                    <div class="column large-4 medium-6 tab-12 s-footer__info">
                        <h5>О проекте</h5>
                        <p>
                            Съешь же ещё этих мягких французских булок да выпей чаю. Съешь же ещё этих мягких французских булок да выпей чаю. Съешь же ещё этих мягких французских булок да выпей чаю.
                        </p>
                    </div> 
                    <div class="column large-2 medium-3 tab-6 s-footer__site-links">
                        <h5>Навигация</h5>
                        <ul class="footer__menu">
                        </ul>
                    </div>
                    <div class="column large-2 medium-3 tab-6 s-footer__social-links">
                        <h5>Социальные сети</h5>
                        <ul>
                            <li><a href="#">Вконтакте</a></li>
                            <li><a href="#">Фейсбук</a></li>
                            <li><a href="#">Инстаграм</a></li>
                            <li><a href="#">Твиттер</a></li>
                        </ul>
                    </div>
                    <div class="column large-4 medium-12 s-footer__subscribe">
                        <h5>Поиск</h5>
                        <div class="subscribe-form">
                            <form id="mc-form" class="group" novalidate="true">
                                <input type="text" value="" name="dEmail" class="email" id="mc-email" placeholder="Введите запрос" required="">
                                    <input type="submit" name="subscribe" >
                                    <label for="mc-email" class="subscribe-message"></label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="s-footer__bottom">
                <div class="row">
                    <div class="column">
                        <div class="ss-copyright">
                            <span>2020</span>
                            <span>AVM</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;

    const menuFooter = document.getElementsByClassName('footer__menu')[0];
    Object
        .keys(config)
        .map((menuKey) => {
            const {href, text} = config[menuKey];

            const menuItem = document.createElement('li');
            const menuLink = document.createElement('a');

            menuItem.appendChild(menuLink);

            menuLink.href = href;
            menuLink.textContent = text;
            menuLink.dataset.section = menuKey;

            return menuItem;
        })
        .forEach((element) => {
            menuFooter.appendChild(element);
        })
    ;
}

function homePage() {
    container.innerHTML = '';

    const section = document.createElement('section');
    section.className = "s-bricks";

    const divMasonry = document.createElement('div');
    divMasonry.className = "masonry";

    const divWrapper = document.createElement('div');
    divWrapper.className = "bricks-wrapper";
    divWrapper.classList.add('h-group');

    container.appendChild(section);
    section.appendChild(divMasonry);
    divMasonry.appendChild(divWrapper);

    const brick = document.createElement('div');
    brick.className = "brick";
    brick.classList.add('entry');
    brick.classList.add('featured-grid');
    brick.classList.add('animate-this');

    divWrapper.appendChild(brick);

    const content = document.createElement('div');
    content.className = "entry__content";

    brick.appendChild(content);

    const post = document.createElement('div');
    post.className = "featured-post-slider";

    content.appendChild(post);

    const divPost = document.createElement('div');
    divPost.className = "featured-post-slide";

    post.appendChild(divPost);

    const divSlide = document.createElement('div');
    divSlide.className = "f-slide";

    divPost.appendChild(divSlide);

    const postBackground = document.createElement('div');
    postBackground.className = "f-slide__background";
    postBackground.cssText = "background-image:url('images/thumbs/featured/featured-1.jpg')";

    const postOverlay = document.createElement('div');
    postOverlay.className = "f-slide__overlay";

    const postContent = document.createElement('div');
    postContent.className = "f-slide__content";

    divSlide.appendChild(postBackground);
    divSlide.appendChild(postOverlay);
    divSlide.appendChild(postContent);

    const postUl = document.createElement('ul');
    postUl.className = "f-slide__meta";

    postContent.appendChild(postUl);

    const postLiUp = document.createElement('li');
    postLiUp.text = "8 сентября, 2020";

    const postLiDown = document.createElement('li');
    const postLiDownLink = document.createElement('a');

    postLiDown.appendChild(postLiDownLink);

    postUl.appendChild(postLiUp);
    postUl.appendChild(postLiDown);

    const postTitle = document.createElement('h1');
    postTitle.className = "f-slide__title";

    const postTitleLink = document.createElement('a');
    postTitleLink.href = "#";
    postTitleLink.text = "Съешь же ещё этих мягких французских булок да выпей чаю.";

    postTitle.appendChild(postTitleLink);
    postContent.appendChild(postTitle);

    for (let i = 0; i < 10; i++) {
        let element = article();
        divWrapper.appendChild(element);
    }
}

function article() {

    const articleItem = document.createElement('article');
    articleItem.className = "brick";
    articleItem.classList.add('entry');
    articleItem.classList.add('format-standard');
    articleItem.classList.add('animate-this');

    const entryThumb = document.createElement('div');
    entryThumb.className = "entry__thumb";

    articleItem.appendChild(entryThumb);

    const entryLink = document.createElement('a');
    entryLink.className = "thumb-link";
    entryLink.href = "#";

    entryThumb.appendChild(entryLink);

    const entryImg = document.createElement('img');
    entryImg.src = "images/thumbs/masonry/woodcraft-600.jpg";

    entryLink.appendChild(entryImg);

    const entryText = document.createElement('div');
    entryText.className = "entry__text";

    articleItem.appendChild(entryText);

    const entryHeader = document.createElement('div');
    entryHeader.className = "entry__header";

    entryText.appendChild(entryHeader);

    const entryMeta = document.createElement('div');
    entryMeta.className = "entry__meta";

    entryHeader.appendChild(entryMeta);

    const entrySpan = document.createElement('span');
    entrySpan.className = "entry__cat-links";

    entryMeta.appendChild(entrySpan);

    const aUp = document.createElement('a');
    aUp.text = "Дизайн";
    const aDown = document.createElement('a');
    aDown.text = "Фотография";

    entrySpan.appendChild(aUp);
    entrySpan.appendChild(aDown);

    const entryTitle = document.createElement('h1');
    entryTitle.className = "entry__title";

    const aEntryTitle = document.createElement('a');
    aEntryTitle.text = "Съешь же ещё этих мягких французских булок да выпей чаю.";

    entryHeader.appendChild(entryTitle);
    entryTitle.appendChild(aEntryTitle);

    const entryExcerpt = document.createElement('div');
    entryExcerpt.className = "entry__excerpt";

    const pEntryExcerpt = document.createElement('p');
    pEntryExcerpt.innerText = " Съешь же ещё этих мягких французских булок да выпей чаю. Съешь же ещё этих мягких французских булок да\n" +
        "                выпей чаю. Съешь же ещё этих мягких французских булок да выпей чаю. Съешь же ещё этих мягких французских\n" +
        "                булок да выпей чаю. Съешь же ещё этих мягких французских булок да выпей чаю.";

    entryText.appendChild(entryExcerpt);
    entryExcerpt.appendChild(pEntryExcerpt);

    return articleItem;
}

function listPage() {
    container.innerHTML = '';

    const section = document.createElement('section');
    section.className = "s-bricks";
    section.classList.add('with-top-sep');

    container.appendChild(section);

    const divMasonry = document.createElement('div');
    divMasonry.className = "masonry";

    section.appendChild(divMasonry);

    const divWrapper = document.createElement('div');
    divWrapper.className = "bricks-wrapper";
    divWrapper.classList.add('h-group');

    divMasonry.appendChild(divWrapper);

    const gridSizer = document.createElement('div');
    gridSizer.className = "grid-sizer";

    divWrapper.appendChild(gridSizer);

    for (let i = 0; i < 10; i++) {
        let element = article();
        divWrapper.appendChild(element);
    }

}

function loginPage() {
    container.innerHTML = '';

    const sectionContent = document.createElement('section');
    sectionContent.className = "s-content";
    sectionContent.classList.add('s-styles');
    container.appendChild(sectionContent);

    //form block
    const wrapperForm = document.createElement('div');
    wrapperForm.className = "authreg-wrapper";
    const entryText = document.createElement('div');
    entryText.className = "entry__text";
    entryText.cssText = "width: 450px; margin: auto; padding-bottom: 20px;";
    wrapperForm.appendChild(entryText);
    const column = document.createElement('div');
    column.className = "column";
    entryText.appendChild(column);
    const formTitle = document.createElement('h2');
    formTitle.className = "s-content__title";
    formTitle.classList.add('s-content__title--post');
    formTitle.innerHTML = "Вход";
    column.appendChild(formTitle);
    const form = document.createElement('form');
    const divEmail = document.createElement('div');
    column.appendChild(form);
    form.appendChild(divEmail);
    const labelEmail = document.createElement('label');
    labelEmail.for = "email";
    labelEmail.innerHTML = "Ваш email";
    const inputEmail = document.createElement('input');
    inputEmail.className = "h-full-width";
    inputEmail.type = "email";
    inputEmail.placeholder = "test@mail.ru";
    divEmail.appendChild(labelEmail);
    divEmail.appendChild(inputEmail);

    sectionContent.appendChild(wrapperForm);

    const divPassword = document.createElement('div');
    form.appendChild(divPassword);
    const labelPassword = document.createElement('label');
    labelPassword.for = "password";
    labelPassword.innerHTML = "Пароль";
    const inputPassword = document.createElement('input');
    inputPassword.className = "h-full-width";
    inputPassword.type = "password";
    inputPassword.placeholder = "********";
    divPassword.appendChild(labelPassword);
    divPassword.appendChild(inputPassword);
    const submitButton = document.createElement('input');
    submitButton.className = "btn--primary";
    submitButton.classList.add('h-full-width');
    submitButton.type = "submit";
    submitButton.value = "Войти";
    form.appendChild(submitButton);

    //Question block
    const divQuestion = document.createElement('div');
    divQuestion.cssText = "text-align: center; padding: 25px;";
    const pQuestion = document.createElement('p');
    pQuestion.innerHTML = "Ещё нет аккаунта?";
    const aQuestion = document.createElement('a');
    aQuestion.href = "/signup";
    aQuestion.text = "Зарегистрируйтесь";
    divQuestion.appendChild(pQuestion);
    divQuestion.appendChild(aQuestion);
    wrapperForm.appendChild(divQuestion);

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const email = inputEmail.value.trim();
        const password = inputPassword.value.trim();

        ajax(
            'POST',
            '/login',
            {email, password},
            (status, response) => {
                if (status === 200) {
                    profilePage();
                } else {
                    const {error} = JSON.parse(response);
                    //alert block
                    const divError = document.createElement('div');
                    divError.cssText = "width: 450px; margin: auto;";
                    const alertBoxError = document.createElement('div');
                    alertBoxError.className = "alert-box";
                    alertBoxError.classList.add('alert-box--error');
                    const pError = document.createElement('p');
                    pError.cssText = "text-align: center;";
                    pError.innerText = error;
                    const alertBoxClose = document.createElement('span');
                    alertBoxClose.className = "alert-box__close";
                    divError.appendChild(alertBoxError);
                    alertBoxError.appendChild(pError);
                    alertBoxError.appendChild(alertBoxClose);
                }
            }
        )

    });

}

function profilePage() {
container.innerHTML = '';

    const profile = new ProfilePage(container);
    profile.data = "eeee";
    profile.render();

    // ajax('GET', '/me', null, (status, responseText) => {
    //     let isAuthorized = false;
    //
    //     if (status === 200) {
    //         isAuthorized = true;
    //     }
    //
    //     if (status === 401) {
    //         isAuthorized = false;
    //     }
    //
    //     if (isAuthorized) {
    //         const responseBody = JSON.parse(responseText);
    //
    //         const profile = new ProfilePage(application);
    //         profile.data = responseBody;
    //         profile.render();
    //
    //     console.log('Нет авторизации');
    //     loginPage();
    //     }
    // });
}

function singlePage() {
    container.innerHTML = '';

    const post = new PostPage(container);
    post.data = "eeee";
    post.render();
}

function signupPage() {
    container.innerHTML = '';

    //временная статика

    const contentDiv = document.createElement('div');
    contentDiv.className = "s-content";
    contentDiv.classList.add('s-styles');

    const wrapperDiv = document.createElement('div');
    wrapperDiv.cssText = "width: 450px; margin: auto;";
    contentDiv.appendChild(wrapperDiv);

    //alert success
    const alertBox = document.createElement('div');
    alertBox.className = "alert-box";
    alertBox.classList.add('alert-box--success');

    const authregWrapper = document.createElement('div');
    authregWrapper.className = "authreg-wrapper";

    const entryTextDiv = document.createElement('div');
    entryTextDiv.className = "entry__text";
    entryTextDiv.cssText = "width: 450px; margin-left: auto; margin-right: auto;";
    entryTextDiv.appendChild(authregWrapper);

    container.innerHTML = `
    <div class="s-content s-styles">
    
        <div style="width: 450px; margin:auto;">
        
            <div class="alert-box alert-box--success">
                <p style="text-align: center;">Вы успешно зарегистрировались!</p>
                <span class="alert-box__close"></span>
            </div>
            
            
            
            <div class="authreg-wrapper">
            
                <div class="entry__text" style="width: 450px; margin-left: auto; margin-right: auto;">
                
                    <div class="column">
                    
                        <h2 class="s-content__title s-content__title--post">Регистрация</h2>
                    
                        <form>
                            <div>
                            <label for="inputName">Ваше имя</label>
                            <input class="h-full-width" type="name" placeholder="Иван" id="inputName" required>
                            </div>
                            <div>
                            <label for="inputSecondName">Ваша фамилия</label>
                            <input class="h-full-width" type="name" placeholder="Иванов" id="inputSecondName">
                            </div>
                            <div>
                            <label for="inputEmail">Ваш email</label>
                            <input class="h-full-width" type="email" placeholder="test@mail.ru" id="inputEmail" required>
                            </div>
                            <div>
                            <label for="inputAvatar">Аватар</label>
                            <input class="h-full-width" type="file" accept=".jpg, .jpeg, .png" id="inputAvatar">
                            </div>
                            <div>
                            <label for="aboutAvatar">Описание картинки</label>
                            <textarea class="h-full-width" placeholder="Описание..." id="aboutAvatar"></textarea>
                            </div>
                            <div>
                            <label for="inputQuote">Любимая цитата</label>
                            <textarea class="h-full-width" type="text" placeholder="Цитата..." id="inputQuote"></textarea>
                            </div>
                            <div>
                            <label for="quoteAuthor">Автор цитаты</label>
                            <input class="h-full-width"  type="name" placeholder="Автор..." id="quoteAuthor">
                            </div>
                            <div>
                            <label for="aboutInput">О себе</label>
                            <textarea class="h-full-width" placeholder="Хороший фуллстэк-программист..." id="aboutInput"></textarea>
                            </div>
                            <div>
                            <label for="password">Пароль</label>
                            <input class="h-full-width" type="password" placeholder="********" id="password" required>
                            </div>
                            <div>
                            <label for="passwordRepeat">Пароль ещё раз</label>
                            <input class="h-full-width" type="password" placeholder="********" id="passwordRepeat" required >
                            </div>
                            
                            <input class="btn--primary h-full-width" type="submit" value="Зарегистрироваться">
                        </form>
                    
                    </div>
                </div>
            
                <div style="text-align: center; padding: 25px;">
                Уже есть аккаунт? Тогда <a href="/login">войдите</a>
                </div>
        
            </div>
        </div>
    
    </section>
    `;
    //конец временной статики

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const age = +ageInput.value;

        ajaxPost({
            url: '/signup',
            body: {email, password, age},
            callback: (status, response) => {
                if (status === 201) {
                    profilePage();
                } else {
                    const {error} = JSON.parse(response);
                    alert(error);
                }
            }
        })
    });


}

function addPage() {
container.innerHTML = '';

//временная статика
container.innerHTML = `
<section class="s-content site-page">
<div class="row">
<div class="column large-12">

<section>
<div class="s-content__primary">
<h1 class="s-content__title">Добавьте новость</h1>

<form name="cForm" id="cForm" class="s-content__form" method="post" action="">
<fieldset>

<div class="form-field">
<input name="postName" type="text" id="postName" class="h-full-width" placeholder="Заголовок поста" value="">
</div>

<div class="form-field">
<textarea name="postBody" type="text" id="postBody" class="h-full-width" placeholder="О чём хотите рассказать?"  value=""></textarea>
</div>

<div class="message form-field">
<input name="postTags" type="text" id="postTags" class="h-full-width" placeholder="Тэги" value="">
</div>

<button type="submit" class="submit btn btn--primary btn--medium h-full-width">Опубликовать</button>

</fieldset>
</form> <!-- end form -->
</div>
</section>

</div>
</div>
</section>

`;
}

application.addEventListener('click', (evt) => {
    const {target} = evt;

    if (target instanceof HTMLAnchorElement) {
        evt.preventDefault();
        config[target.dataset.section].open();
    }
});



headerView();
MobileMenu();
homePage();
ssSearch();
footerView();