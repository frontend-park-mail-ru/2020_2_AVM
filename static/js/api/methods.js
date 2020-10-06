import Fetching from './fetch.js';

const urls = {
    getUserDataUrl : '/user',
    getUserArticles : 'user/${id}/article',
    makeLogin: '/login',
    makeSignUp: '/signup',
    updateUser: '/user/update',
    makeLogout: '/logout',
    makeArticle: '/add',
}


export default class Methods {

    static getUserData() {
        return Fetching.queryGet({
            url: urls.getUserDataUrl,
        });
    }

    static getUserArticles(id) {
        return Fetching.queryGet({
            url: urls.getUserArticles,
        });
    }

    static makeLogin({
                         login = '',
                         password = '',
                     }) {
        return Fetching.queryPost({
            url: urls.makeLogin,
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
                          avatar = '',
                          quote = '',
                          quoteAuthor = '',
                          about = '',
                          password = '',
                          passwordRepeat = '',
                      }) {
        return Fetching.queryPost({
            url: urls.makeSignUp,
            body: JSON.stringify({
                'login': login,
                'email': email,
                'avatar': avatar,
                'quote': quote,
                'quoteAuthor': quoteAuthor,
                'about': about,
                'password': password,
                'passwordRepeat': passwordRepeat,
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
                          avatar = '',
                          quote = '',
                          quoteAuthor = '',
                          about = '',
                          password = '',
                          passwordRepeat = '',
                      } = {}) {
        return Fetching.queryUpdate({
            url: urls.updateUser,
            body: JSON.stringify({
                'login': login,
                'email': email,
                'avatar': avatar,
                'quote': quote,
                'quoteAuthor': quoteAuthor,
                'about': about,
                'password': password,
                'passwordRepeat': passwordRepeat,
            }),
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
                'Content-Type': 'application/json',
            },
        });
    }


    static makeLogout() {
        return Fetching.queryDelete({
            url: urls.makeLogout,
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
            },
        });
    }

    static makeArticle({
                          title = '',
                          text = '',
                      }) {
        return Fetching.queryPost({
            url: urls.makeArticle,
            body: JSON.stringify({
                'title': title,
                'text': text,
            }),
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
                'Content-Type': 'application/json',
            },
        });
    }
}