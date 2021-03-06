const loginUrls = ['/', '/category', '/tags', '/logout', '/profile', '/settings', '/add'];
const NotLoginUrls = ['/', '/category', '/tags', '/login', '/signup'];

export default class Router {

    /**
     * constructor of router
     */
    constructor(login) {
        this.currentController = null;

        this.controllersMap = new Map();

        this.login = login;
    }
    /**
     * adding route of controller
     * @param  {string} url - url of route
     * @param  {function} controller - controller of page
     */
    addRoute(url, controller) {
        this.controllersMap.set(url, controller);
    }

    /**
     * route of controller
     */
    route() {
        window.addEventListener('popstate', () => {
            const path = window.location.pathname;
            this.handleRoute(path);
        });
        this.handleRoute(window.location.pathname);
    }

    /**
     * handle of route
     * @param  {string} url - url of route
     */
    handleRoute(url) {
        console.log(url);

        if (this.login && loginUrls.includes(url, 0)
            || !this.login  && NotLoginUrls.includes(url, 0)) {

            const activeController = this.controllersMap.get(url);
            this.currentController = activeController;
            this.currentController.action();

        } else {
            window.history.pushState({}, '', '/');
            window.history.pushState({}, '', '/');
            window.history.back();
        }
    }

    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event
     * Note that just calling history.pushState() or history.replaceState() 
     * won't trigger a popstate event. 
     * The popstate event will be triggered by doing 
     * a browser action such as a click on the back or forward button 
     * (or calling history.back() or history.forward() in JavaScript).
     */

    /**
     * redirect of route
     * @param  {string} url - url of route
     */
    redirect(url) {

        if (this.login && loginUrls.includes(url, 0)
            || !this.login  && NotLoginUrls.includes(url, 0)) {

            window.history.pushState({}, '', url);
            window.history.pushState({}, '', url);
            window.history.back();

        } else {
            window.history.pushState({}, '', '/');
            window.history.pushState({}, '', '/');
            window.history.back();
        }
    }

    isLogin(state) {
        this.login = state;
    }
}