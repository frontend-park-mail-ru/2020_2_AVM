import View from '../api/view.js';

export default class CategoryView extends View {
    /**
     * constructor description
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent) {
        super();

        this.parent = parent;
        this.template = 'js/components/CategoryPage/CategoryPage.tmpl';
    }
}