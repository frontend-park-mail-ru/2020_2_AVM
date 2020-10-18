import Controller from '../api/controller.js';
import LogoutView from '../views/logout-view.js';
import UserModel from '../models/user-model.js';

export default class LogOutController extends Controller {
    #parent
    #data

    /**
     * constructor of controller
     * @param  {HTMLElement} parent - HTML container
     */
    constructor(parent) {
        super();

        this.#parent = parent;
        this.#data = {};

        this.view = new LogoutView(parent);
    }

    /**
     * get data of controller
     */
    get data() {
        return this.#data;
    }

    /**
     * set data of controller
     * @param  {object} data - object of data of controller
     */
    set data(data) {
        this.#data = data;
    }

    /**
     * action of controller, logic of logout
     */
    action() {
        this.view.render(this.#data);
        UserModel.makeLogout()
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