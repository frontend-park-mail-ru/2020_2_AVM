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

        Methods.makeLogout()
            .then(({statusCode, responseObject}) => {
                if (statusCode === 200) {
                    this.#data.success = true;
                } else {
                    const {error} = JSON.parse(responseObject);
                    console.log(error);
                }
            })
            .catch((err) => {
                if (err instanceof Error) {
                    console.log(err);
                }
            });

        this.#parent.innerHTML = window.fest['js/components/LogoutPage/LogoutPage.tmpl'](this.#data);
    }
}