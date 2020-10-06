/* 
TODO: 
сообщения об ошибке (некоторые поля проверяются по нескольким параметрам)
использовать регулярные выражения
что является логином (почта, никнейм, телефон)
*/
export default class Validation {
    static validateLogin = (login) => {
        if (login.length < 8) {
            return false;
        }
        return true;
    };

    static validatePassword(password) {

    }
}