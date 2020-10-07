import Controller from '../api/controller.js';
import LogoutView from '../views/logout-view.js';
import UserModel from '../models/user-model.js';

export default class LogOutController extends Controller {
    #parent
    #data

    constructor(parent) {
        super();

        this.#parent = parent;
        this.#data = {};

        this.view = new LogoutView(parent);
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
    }

    action() {
        UserModel.makeLogout()
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

        this.view.render(this.#data);

    }

}