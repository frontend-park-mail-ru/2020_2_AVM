import Methods from '../../api/methods.js';

export class LogoutPage {
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
        this.#parent.innerHTML = window.fest['js/components/LogoutPage/LogoutPage.tmpl'](this.#data);
    }

    submitForm() {
        Methods.makeLogout()
            .then(({status}) => {
                if (status === 200) {
                    this.#data.success = true;
                    this.render();
                } else {
                    console.log('no logout');
                }
            })
            .catch((err) => {
                if (err instanceof Error) {
                    console.log(err);
                }
            });
    }
}