import Controller from '../api/controller.js';
import SettingsView from '../views/settings-view.js';
import UserModel from '../models/user-model.js';

import Router from "../api/router.js";
import {headerView} from "../components/Header/header.js";

export default class SettingsPageController extends Controller {
    /**
     * constructor of controller
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent) {
        super();
        this.parent = parent;
        this.view = new SettingsView(parent);
    }

    /**
     * action of controller, logic of settings
     */
    action() {
        this.view.render(this.data);

        const form = document.querySelector('form#form-update');
        const loginInput = form.querySelector('input#updateLogin');
        const emailInput = form.querySelector('input#updateEmail');
        const passwordInput = form.querySelector('input#updatePassword');

        const fileInput = form.querySelector('input#updateAvatar');
        const imageData = new FormData();

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            let login = loginInput.value.trim();
            let email = emailInput.value.trim();
            let password = passwordInput.value.trim();

            UserModel.getUserData()
                .then((res) => {
                    if (res.status !== 201) {
                        return Promise.reject(res);
                    }
                    res.json().then((res) => {
                        const currentProfileData = {
                            login: res.login,
                            email: res.email,
                            password: res.password,
                        }
                        if (login === '') {
                            login = currentProfileData.login
                        }
                        if (email === '') {
                            email = currentProfileData.email
                        }
                        if (password === '') {
                            password = currentProfileData.password
                        }

                        UserModel.updateUser({
                            login,
                            email,
                            password,
                        })
                            .then(({status}) => {
                                console.log(status);
                                if (status === 200) {
                                    this.data.settings = true;
                                    this.data.success = false;
                                    this.action();
                                } else {
                                    console.log('error');
                                    this.data.settings = false;
                                    this.data.success = true;
                                    this.action();
                                }
                            })
                            .catch((err) => {
                                if (err instanceof Error) {
                                    console.log(err);
                                }
                                this.data.success = true;
                                this.data.settings = false;
                                this.action();
                            });


                    }).catch((err) => {
                        if (err.status === 500) {
                            console.error('fail to fetch profile');
                            this.data.success = true;
                            this.data.settings = false;
                            this.view.render(this.data);
                        }
                    });
                });
        });

        fileInput.addEventListener('change', (evt) => {

            imageData.append("avatar", fileInput.files[0], fileInput.files[0].name);
            UserModel.updateUserAvatar(imageData)
                .then(({status}) => {
                    console.log(status);
                    if (status === 200) {
                        this.data.settingsPhoto = true;
                        this.data.successPhoto = false;
                        this.action();
                    } else {
                        console.log('error');
                        this.data.successPhoto = true;
                        this.data.settingsPhoto = false;
                        this.action();
                    }
                })
                .catch((err) => {
                    if (err instanceof Error) {
                        console.log(err);
                    }
                    this.data.successPhoto = true;
                    this.data.settingsPhoto = false;
                    this.action();
                });
        })
    }

}