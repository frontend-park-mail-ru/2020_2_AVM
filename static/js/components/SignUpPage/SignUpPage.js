export class SignUpPage {
    #parent
    #data

    constructor(parent) {
        this.#parent = parent;
        this.#data = {};
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
    }

    render() {
        this.#parent.innerHTML = window.fest['js/components/SignUpPage/SignUpPage.tmpl'](this.#data);
    }

}