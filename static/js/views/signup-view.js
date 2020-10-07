import View from '../api/view.js';

export default class SignUpView extends View { 
	#parent

	constructor(parent) {
		super();

		this.#parent = parent;
	}

	render(data) {
		this.#parent.innerHTML = window.fest['js/components/SignUpPage/SignUpPage.tmpl'](data);
	}
}