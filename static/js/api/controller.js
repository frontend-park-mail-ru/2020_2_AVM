export default class Controller {
    constructor() {
        this.data = {};

        this.config= {
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
        };

        this.configLogout = {
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
        };
    }
}
