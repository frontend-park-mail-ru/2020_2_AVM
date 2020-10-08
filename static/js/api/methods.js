import Fetching from './fetch.js';

const urls = {
    getUserDataUrl : '/profile',
    getUserArticles : '/article/',
    makeLogin: '/signin',
    makeSignUp: '/signup',
    updateUser: '/setting',
    makeLogout: '/logout',
    makeArticle: '/article',
}


let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

// headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Origin', 'https://vc-ru-app.herokuapp.com/');
headers.append('Access-Control-Allow-Credentials', 'true');

export default class Methods {

    static getUserData() {
        return Fetching.queryGet({
            url: urls.getUserDataUrl,
        });
    }

    static getUserArticles(author) {
        return Fetching.queryGet({
            url: urls.getUserArticles + author,
        });
    }

    static makeLogin({
                         login = '',
                         password = '',
                     }) {
        return Fetching.queryPost({
            url: urls.makeLogin,
            body: JSON.stringify({
                'Login': login,
                'Password': password,
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
            url: urls.makeSignUp,
            body: JSON.stringify({
                'Login': login,
                'Email': email,
                'Password': password,
            }),
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
                'Content-Type': 'application/json',
            },
        });
    }

    static updateUser({
                          login = '',
                          email = '',
                          password = '',
                      } = {}) {
        return Fetching.queryPost({
            url: urls.updateUser,
            body: JSON.stringify({
                'login': login,
                'email': email,
                'password': password,
            }),
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
                'Content-Type': 'application/json',
            },
        });
    }


    static makeLogout() {
        return Fetching.queryPost({
            url: urls.makeLogout,
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
            },
        });
    }

    static makeArticle({
                          title = '',
                           desc = '',
                           content = '',
                      }) {
        return Fetching.queryPost({
            url: urls.makeArticle,
            body: JSON.stringify({
                'title': title,
                'desc': desc,
                'content': content,
            }),
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
                'Content-Type': 'application/json',
            },
        });
    }
}