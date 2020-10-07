import View from '../api/view.js';

export default class AddPageView extends View { 
    #parent

    constructor(parent) {
    	super();

    	this.#parent = parent;
    }

    render(data) {
    	this.#parent.innerHTML = window.fest['js/components/AddPage/AddPage.tmpl'](data);
    }
}