/* 
TODO: 
сообщения об ошибке (некоторые поля проверяются по нескольким параметрам)
использовать регулярные выражения
что является логином (почта, никнейм, телефон)
*/
export default class Validation {

    /**
     * This is validation of length of Login.
     *
     * @param {string} login - login of user
     * @return {boolean} - result of validation
     *
     * @example
     *
     *     validateLoginLength('smtlogin')
     */
    static validateLoginLength = (login) => {
        if (login.length < 8) {
            return false;
        }
        return true;
    };

    /**
     * This is validation of right of Login.
     *
     * @param {string} login - login of user
     * @return {string} - result of validation
     *
     * @example
     *
     *     validateLogin('smtlogin')
     */
    static validateLogin = (login) => {
        const re = /^[a-zA-Z][a-zA-Z0-9\-_]{7,}$/;
        return re.test(login);
    };

    /**
     * This is validation of right of email.
     *
     * @param {string} email - email of user
     * @return {string} - result of validation
     *
     * @example
     *
     *     validateEmail('smtemail')
     */
    static validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };

    /**
     * This is a string check.
     *
     * @param {string} input - input from form
     * @return {boolean} - result of checking
     *
     * @example
     *
     *     isString('input')
     */
    static isString = (input) => {
        return typeof input === 'string' || input instanceof String;
    };

    /**
     * This is a empty check.
     *
     * @param {string} input - input from form
     * @return {boolean} - result of checking
     *
     * @example
     *
     *     isEmpty('input')
     */
    static isEmpty = (input) => {
        return !input;
    };

    /**
     * This is a password check.
     *
     * @param {string} password - password of user
     * @return {Array} - result of checking
     *
     * @example
     *
     *     validatePassword('wjfkljweflj434340')
     */
    static validatePassword(password) {
        // const re = /^[a-z+A-Z+\d+[\-_!@#$%\^&*]+]{8,}$/;
        // return re.test(password);

        const errors = [];
    
        if (this.isEmpty(password) || !this.isString(password)) {
            errors.push('empty or invalid');
        }

        if (password.length < 8) {
            errors.push('short');
        }
        if (!/[0-9]/.test(password)) {
            errors.push('no nums');
        }
        if (password.match(/\d+/g)) {
            if (password.match(/\d+/g).join('').length < 2) {
                errors.push('few nums');
            }
        }
        if (!/[A-z]/.test(password)) {
            errors.push('no latin');
        }
        if (!/^[\w\dA-z]+$/.test(password)) {
            errors.push('nums and latin');
        }
    
        return errors;
    }

    /**
     * This is a password equality check.
     *
     * @param {string} pass - password of user
     * @param {string} repPass - repeated password of user
     * @return {boolean} - result of checking
     *
     * @example
     *
     *     validatePasswordRepeat('wjfkljweflj434340', 'wjfkljweflj434340')
     */
    static validatePasswordRepeat(pass, repPass) {
        if (pass !== repPass) {
            return false;
        }
        return true;
    }
}