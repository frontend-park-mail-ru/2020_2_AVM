import View from '../api/view.js';

export default class ProfileView extends View {
    /**
     * constructor description
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent) {
        super();

        this.parent = parent;
        this.template = 'js/components/ProfilePage/ProfilePage.tmpl';
    }
}