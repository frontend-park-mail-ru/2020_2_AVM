import {categories} from '../settings/categories.js';

import Controller from '../api/controller.js';
import CategoryView from '../views/category-view.js';
import Article from '../models/article-model.js';


export default class CategoryPageController extends Controller {
    /**
     * constructor of controller
     * @param {HTMLElement} parent - HTML container
     * @param {HTMLElement} header - HTML container
     * @param {Object} config - list menu
     */
    constructor(parent) {
        super();
        this.parent = parent;
        this.view = new CategoryView(this.parent);
        this.data.currentId = -1;
        this.data.categories = categories;
    }

    /**
     * action of controller, logic of profile
     */
    action() {

        this.data.key = "Категория:";
        this.data.value = "фотография";
        this.getAritcles('фотография');


    }

    getAritcles (category) {
        Article.getArticlesByCategory(category)
            .then((res) => {

            if (res.status === 200) {
                res.json().then((res) => {
                    console.log(res);
                    this.data.articles = res;
                    this.data.articles = this.data.articles.reverse();
                    this.view.render(this.data);

                    const categorySelect = document.querySelector('select#select-choose-category.select-category');

                    categorySelect.addEventListener('change', (evt) => {
                        console.log('change');
                        const category = categorySelect.value;
                        this.data.category= category;
                        this.data.currentId = this.data.categories.indexOf(category);
                        let category0 = this.data.categories[0];
                        this.data.categories[0] = category;
                        this.data.categories[this.data.currentId] = category0;
                        this.data.value = category;
                        this.getAritcles(category);
                    });
                });
            } else {
                console.log('error');
                this.data.categories = categories;
                this.data.value = "фотография";
                this.getAritcles('фотография');
            }
        })
            .catch((err) => {
                if (err instanceof Error) {
                    console.log(err);
                    this.data.categories = categories;
                    this.data.value = "фотография";
                    this.getAritcles('фотография');
                }
                this.data.categories = categories;
                this.data.value = "фотография";
                this.getAritcles('фотография');
            });
    }

}