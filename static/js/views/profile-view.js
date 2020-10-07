import View from '../api/view.js';

export default class ProfileView extends View { 
    #parent

    constructor(parent) {
    	super();

    	this.#parent = parent;
    }

    render(data) {
    	this.#parent.innerHTML = window.fest['js/components/ProfilePage/ProfilePage.tmpl'](data);
    }
}