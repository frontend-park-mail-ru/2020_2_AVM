import Controller from '../api/controller.js';
import LogoutView from '../views/logout-view.js';
import UserModel from '../models/user-model.js';

import Router from "../api/router.js";
import {headerView} from "../components/Header/header.js";

export default class LogOutController extends Controller {
    /**
     * constructor of controller
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent, header, config, router) {
        super();
        this.parent = parent;
        this.headerContainer = header;
        this.router = router;
        this.view = new LogoutView(parent);
    }

    /**
     * action of controller, logic of logout
     */
    action() {
        this.view.render(this.data);
        UserModel.makeLogout()
            .then(({status}) => {
                if (status === 200) {
                    this.router.redirect('/');
                    headerView(this.headerContainer, this.configLogout);
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