import Fetching from './fetch.js';

export default class Methods {

    static getUserData() {
        return Fetching.queryGet({
            url: '/user',
        });
    }

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
                          login = '',
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

    static updateUser({
                          login = '',
                          password = '',
                          email = ''
                      } = {}) {
        return Fetching.queryUpdate({
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
        return Fetching.queryPost({
            url: '/user/image',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
            },
        });
    }

    static makeLogout() {
        return Fetching.queryDelete({
            url: '/logout',
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
            },
        });
    }
}