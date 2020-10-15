import Methods from "../../api/methods.js";
import {profilePage} from "../../views/ProfilePage/profilePage.js";

export class SettingsPage {
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
        this.#parent.innerHTML = window.fest['js/components/SettingsPage/SettingsPage.tmpl'](this.#data);
    }

    submitForm() {
        const form = document.querySelector('form#form-update');
        const loginInput = form.querySelector('input#updateLogin');
        const emailInput = form.querySelector('input#updateEmail');
        const passwordInput = form.querySelector('input#updatePassword');

        const fileInput = form.querySelector('input#updateAvatar') ;
        const imageData = new FormData();

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const login = loginInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            imageData.append("avatar", fileInput.files[0], fileInput.files[0].name);

            Methods.updateUser({
                login,
                email,
                password,
            })
                .then(({status}) => {
                    console.log(status);
                    if (status === 200) {
                        Methods.updateUserAvatar(imageData)
                            .then(({status}) => {
                                console.log(status);
                                if (status === 200) {
                                    profilePage(this.#parent);
                                } else {
                                    console.log('error');
                                }
                            })
                            .catch((err) => {
                                if (err instanceof Error) {
                                    console.log(err);
                                }
                                this.#data.success = true;
                                this.render();
                            });
                        profilePage(this.#parent);
                    } else {
                        console.log('error');
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    this.#data.success = true;
                    this.render();
                });
        })
    }

}