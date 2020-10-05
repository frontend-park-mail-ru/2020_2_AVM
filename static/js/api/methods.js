import Fetching from './fetch.js';

export default class Methods {

    static getUserData() {
        return Fetching.queryGet({
            url: '/user',
        });
    }

    static getUserArticles(id) {
        return Fetching.queryGet({
            url: 'user/${id}/article',
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
                          avatar = '',
                          quote = '',
                          quoteAuthor = '',
                          about = '',
                          password = '',
                          passwordRepeat = '',
                      }) {
        return Fetching.queryPost({
            url: '/signup',
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
            url: '/user/update',
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
            url: '/logout',
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
            url: '/add',
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