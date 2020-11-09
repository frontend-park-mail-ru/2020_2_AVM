import {categories} from '../settings/categories.js';

import Controller from '../api/controller.js';
import TagView from '../views/tag-view.js';
import Article from '../models/article-model.js';

let value = 'test';

export default class TagPageController extends Controller {
    /**
     * constructor of controller
     * @param {HTMLElement} parent - HTML container
     * @param {HTMLElement} header - HTML container
     * @param {Object} config - list menu
     */
    constructor(parent) {
        super();
        this.parent = parent;
        this.view = new TagView(this.parent);
        this.data.currentId = -1;
        this.data.categories = categories;
    }

    /**
     * action of controller, logic of profile
     */
    action() {

        this.data.key = "Тег:";
        this.data.value = '';
        this.getAritcles('test');
    }

    getAritcles (tag) {
        Article.getArticlesByTag(tag)
            .then((res) => {

            if (res.status === 200) {
                res.json().then((res) => {
                    if (res === null) {
                        this.data.articles = [{
                            article_title: 'Статей нет',
                            description: '',
                        }];
                        this.data.value = value;
                        this.view.render(this.data);
                    } else {
                        this.data.articles = res;
                        this.data.articles = this.data.articles.reverse();
                        this.data.value = value;
                        this.view.render(this.data);
                    }

                    const form = document.querySelector('form#form-tag');
                    const input = form.querySelector('input#tagTitle');

                    form.addEventListener('submit', (evt) => {
                        evt.preventDefault();
                        const tagName = input.value.trim();
                        value = tagName;
                        this.getAritcles(tagName);
                    });
                });
            } else {
                console.log('error');
                value = 'test';
                this.action();
            }
        })
            .catch((err) => {
                if (err instanceof Error) {
                    console.log(err);
                    value = 'test';
                    this.action();
                }

            });
    }

}