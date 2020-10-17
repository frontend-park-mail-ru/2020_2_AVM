import Model from '../api/model.js';
import Fetching from '../api/fetch.js';
import {URLS} from '../settings/config.js'

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Credentials', 'true')

/**
 * TODO:
 * перенести часть логики обработки запросов
 * из соответствубщих компонентов (контроллеров)
 */
export default class UserModel extends Model {
    constructor() {
        super();
        
        this.user = null;
    }
    
    static getUserAvatar(author = '') {
        return Fetching.queryGet({
            url: URLS.getAvatar + author,
        });
    }

    static getUserData() {
        return Fetching.queryGet({
            url: URLS.getUserDataUrl,
        });
    }

    static makeLogin({
                         login = '',
                         password = '',
                     }) {
        return Fetching.queryPost({
            url: URLS.makeLogin,
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
            url: URLS.makeSignUp,
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
        return Fetching.queryUpdate({
            url: URLS.updateUser,
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

    static updateUserAvatar(data) {
        return Fetching.queryUpdate({
            url: URLS.upAvatar,
            body: data,
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
            },
        });
    }


    static makeLogout() {
        return Fetching.queryPost({
            url: URLS.makeLogout,
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
            },
        });
    }
    
}