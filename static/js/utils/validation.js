/* 
TODO: 
сообщения об ошибке (некоторые поля проверяются по нескольким параметрам)
использовать регулярные выражения
что является логином (почта, никнейм, телефон)
*/
export default class Validation {
    static validateLoginLength = (login) => {
        if (login.length < 8) {
            return false;
        }
        return true;
    };

    static validateLogin = (login) => {
        const re = /^[a-zA-Z][a-zA-Z0-9\-_]{7,}$/;
        return re.test(login);
    };

    static validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };

    static validatePassword(password) {

    }
}