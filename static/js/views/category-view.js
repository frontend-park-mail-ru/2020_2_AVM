import View from '../api/view.js';

export default class CategoryView extends View {
    #parent

    /**
     * constructor description
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent) {
        super();

        this.#parent = parent;
    }

    /**
     * render description
     * @param  {Object} data - object of data for pasting
     */
    render(data) {
        this.#parent.innerHTML = window.fest['js/components/CategoryPage/CategoryPage.tmpl'](data);
    }
}