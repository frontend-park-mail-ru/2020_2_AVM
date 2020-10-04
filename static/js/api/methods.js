import Fetching from './fetch';

export default class Api {
    static makeLogin({
           login = '',
           password = '',
                   }) {
        return Fetching.queryPost({
            url: '/login',
            body: JSON.stringify({
                'username': login,
                'password': password,
            }),
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
                'Content-Type': 'application/json',
            },
        });
    }

    static makeSignUp({
            login= '',
            email = '',
            password = '',
                    }) {
        return Fetching.queryPost({
            url: '/signup',
            body: JSON.stringify({
                'username': login,
                'password': password,
                'email': email,
            }),
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
                'Content-Type': 'application/json',
            },
        });
    }

    static getUserData() {
        return Fetching.queryGet({
            url: '/user',
        });
    }

    static updateUser({login = '', email = '', password = ''} = {}) {
        return Fetching.queryPut({
            url: '/user',
            body: JSON.stringify({
                'username': login,
                'password': password,
                'email': email,
            }),
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
                'Content-Type': 'application/json',
            },
        });
    }

    static uploadUserAvatar(formData) {
        return Network.queryPost({
            url: '/user/image',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
            },
        });
    }

    static makeLogout() {
        return Network.queryDelete({
            url: '/logout',
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
            },
        });
    }
}