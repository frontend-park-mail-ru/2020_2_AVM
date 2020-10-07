import View from '../api/view.js';

export default class LoginView extends View { 
    #parent

    constructor(parent) {
    	super();

    	this.#parent = parent;
    }

    render(data) {
    	this.#parent.innerHTML = window.fest['js/components/LoginPage/LoginPage.tmpl'](data);
    }
}