import Controller from '../api/controller.js';
import AddPageView from '../views/addpage-view.js';
import ArticleModel from '../models/article-model.js';

export default class AddPageController extends Controller {
    #parent
    #data

    /**
     * constructor of controller
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent) {
        super();

        this.#parent = parent;
        this.#data = {};

        this.view = new AddPageView(this.#parent);
    }

    /**
     * get of controller
     */
    get data() {
        return this.#data;
    }

    /**
     * set of controller
     * @param  {object} data - object of data of controller
     */
    set data(data) {
        this.#data = data;
    }

    /**
     * action of controller, logic of add
     */
    action() {
        this.view.render(this.#data);

        const form = document.querySelector('form#form-add-article');
        const articleTitleInput = form.querySelector('input#articleTitle');
        const articleDescInput = form.querySelector('input#articleDesc');
        const articleTextInput = form.querySelector('textarea#articleText');

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const title = articleTitleInput.value.trim();
            const desc = articleDescInput.value.trim();
            const content = articleTextInput.value.trim();

            ArticleModel.makeArticle({
                title,
                desc,
                content,
            })
                .then(({status}) => {
                    if (status === 201) {
                        //TODO: перенаправление в профиль
                    } else {
                        console.log("error add");
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    this.#data.success = true;
                    this.view.render();
                });
        })
    }

}