import Model from '../api/model.js';
import Fetching from '../api/fetch.js';
import {URLS} from '../settings/config.js';

import Xss from '../utils/xss.js';

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
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

    /**
     * This is a request to get user avatar.
     *
     * @param {string} author - name of user
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     getUserAvatar('mark')
     */
    static getUserAvatar(author = '') {

        author = Xss.removeScript(author);

        return Fetching.queryGet({
            url: URLS.getAvatar + author,
        });
    }

    /**
     * This is a request to get user data.
     *
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     getUserAvatar()
     */
    static getUserData() {
        return Fetching.queryGet({
            url: URLS.getUserDataUrl,
        });
    }

    /**
     * This is a authorization request.
     *
     * @param {string} login - login  of user
     * @param {string} password - password of user
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     makeLogin('mark', 'secret')
     */
    static makeLogin({
                         login = '',
                         password = '',
                     }) {

        login = Xss.removeScript(login);
        password = Xss.removeScript(password);

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

    /**
     * This is a registration request.
     *
     * @param {string} login - login  of user
     * @param {string} email - email  of user
     * @param {string} password - password of user
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     makeSignUp('mark', 'email@mail.ru', 'secret')
     */
    static makeSignUp({
                          login = '',
                          email = '',
                          password = '',
                      }) {

        login = Xss.removeScript(login);
        email = Xss.removeScript(email);
        password = Xss.removeScript(password);

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

    /**
     * This is a profile data update request.
     *
     * @param {string} login - login  of user
     * @param {string} email - email  of user
     * @param {string} password - password of user
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     updateUser('mark', 'email@mail.ru', 'secret')
     */
    static updateUser({
                          login = '',
                          email = '',
                          password = '',
                      } = {}) {

        login = Xss.removeScript(login);
        email = Xss.removeScript(email);
        password = Xss.removeScript(password);

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

    /**
     * This is a request to update user avatar.
     *
     * @param {FormData} data - FormData with image of user
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     updateUserAvatar(new FormData(form))
     */
    static updateUserAvatar(data) {
        return Fetching.queryUpdate({
            url: URLS.upAvatar,
            body: data,
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
            },
        });
    }


    /**
     * This is a request to leave.
     *
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     makeLogout()
     */
    static makeLogout() {
        return Fetching.queryPost({
            url: URLS.makeLogout,
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
            },
        });
    }
    
}