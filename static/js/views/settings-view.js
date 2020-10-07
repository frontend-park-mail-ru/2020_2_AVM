import View from '../api/view.js';

export default class SettingsView extends View { 
    #parent

    constructor(parent) {
    	super();

    	this.#parent = parent;
    }

    render(data) {
    	this.#parent.innerHTML = window.fest['js/components/SettingsPage/SettingsPage.tmpl'](data);
    }
}