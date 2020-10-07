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
    	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
    	return re.test(email.toLowerCase());
    };

    static isString = (input) => {
    	return typeof input === 'string' || input instanceof String;
    };

    static isEmpty = (input) => {
    	return !input;
    };

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

    static validatePasswordRepeat(pass, repPass) {
    	if (pass !== repPass) {
    		return false;
    	}
    	return true;
    }
}