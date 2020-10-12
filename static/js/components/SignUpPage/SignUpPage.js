import Methods from "../../api/methods.js";
import {profilePage} from "../../views/ProfilePage/profilePage.js";

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

    submitForm() {
        const form = document.querySelector('form#form-sing-up');
        const loginInput = form.querySelector('input#inputLogin');
        const emailInput = form.querySelector('input#inputEmail');
        const passwordInput = form.querySelector('input#password');

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const login = loginInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            Methods.makeSignUp({
                login,
                email,
                password,
            })
                .then(({status}) => {
                    if (status === 201) {
                        // profilePage(this.#parent);
                        this.#data.sign = true;
                        this.render();
                        this.submitForm();
                    } else {
                        console.log('no sign');
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    // this.#data.sign = true;
                    // this.render();
                });
        })
    }

}