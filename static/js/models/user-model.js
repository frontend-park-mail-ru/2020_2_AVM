import Model from "../api/model.js"
import Fetching from '../api/fetch.js';

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
    
    static getUserData() {
        return Fetching.queryGet({
            url: urls.getUserDataUrl,
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
    
}