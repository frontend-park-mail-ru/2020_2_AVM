import Controller from '../api/controller.js';
import AddPageView from '../views/addpage-view.js';
import ArticleModel from '../models/article-model.js';
import {headerView} from "../components/Header/header.js";
import {footerView} from "../components/Footer/footer.js";

export default class AddPageController extends Controller {
    /**
     * constructor of controller
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent, header, footer, router) {
        super();
        this.parent = parent;
        this.headerContainer = header;
        this.footerContainer = footer;
        this.router = router;
        this.view = new AddPageView(this.parent);
    }


    /**
     * action of controller, logic of add
     */
    action() {
        this.view.render(this.data);

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
                        this.router.redirect('/profile');
                        headerView(this.headerContainer, this.config);
                        footerView(this.footerContainer, this.config);
                    } else {
                        console.log("error add");
                        this.data.success = true;
                        this.view.render(this.data);
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    this.data.success = true;
                    this.view.render(this.data);
                });
        })
    }

}