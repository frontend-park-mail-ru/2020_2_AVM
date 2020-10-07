import Controller from '../api/controller.js';
import AddPageView from '../views/addpage-view.js';
import Router from '../api/router.js';
import ArticleModel from '../models/article-model.js';

export default class AddPageController extends Controller {
    #parent
    #data

    constructor(parent) {
    	super();

    	this.#parent = parent;
    	this.#data = {};

    	this.view = new AddPageView(this.#parent);
    }

    get data() {
    	return this.#data;
    }

    set data(data) {
    	this.#data = data;
    }

    action() {
    	this.view.render(this.#data);

    	const form = document.querySelector('form#form-add-article');
    	const articleTitleInput = form.querySelector('input#articleTitle');
    	const articleTextInput = form.querySelector('textarea#articleText');

    	form.addEventListener('submit', (evt) => {
    		evt.preventDefault();

    		const title = articleTitleInput.value.trim();
    		const text = articleTextInput.value.trim();

    		ArticleModel.makeArticle({
    			title,
    			text,
    		})
    			.then(({statusCode, responseObject}) => {
    				if (statusCode === 200) {
    					Router.redirect('/profile');
    				} else {
    					const {error} = JSON.parse(responseObject);
    					console.log(error);
    				}
    			})
    			.catch((err) => {
    				if (err instanceof Error) {
    					console.log(err);
    				}
    				this.#data.success = true;
    				this.render();
    			});
    	});
    }

}