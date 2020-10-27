let serverAddress = 'http://95.163.250.127:1323'
// let serverAddress = 'http://localhost:1323'

export default class Fetching {

    /**
     * This is a get query.
     *
     * @param {string} host - host of API
     * @param {string} url - query url
     * @return {function} - call of fetch
     *
     * @example
     *
     *     queryGet('http://localhost:1323', '/')
     */
    static queryGet({
                    host = serverAddress,
                    url = '/',
                } = {}) {
        return fetch(host + url, {
            method: 'GET',
            credentials: 'include',
        })
        .catch((err) => {
            console.log('get error');
        });
    }

    /**
     * This is a post query.
     *
     * @param {string} host - host of API
     * @param {string} url - query url
     * @param {string} body - json body of query
     * @param {object} headers - headers of query
     * @return {function} - call of fetch
     *
     * @example
     *
     *     queryPost('http://localhost:1323', '/', '"id": "1"', {})
     */
    static queryPost({
                host = serverAddress,
                url = '/',
                body = '',
                headers = {},
            } = {}) {
        return fetch(host + url, {
            method: 'POST',
            credentials: 'include',
            headers: headers,
            body: body,
        })
        .catch((err) => {
            console.log('post error');
        });
    }

    /**
     * This is a update query.
     *
     * @param {string} host - host of API
     * @param {string} url - query url
     * @param {string} body - json body of query
     * @param {object} headers - headers of query
     * @return {function} - call of fetch
     *
     * @example
     *
     *     queryUpdate('http://localhost:1323', '/', '"id": "1"', {})
     */
    static queryUpdate({
                    host = serverAddress,
                    url = '/',
                    body = {},
                    headers = {},
                } = {}) {
            return fetch(host + url, {
                method: 'PUT',
                credentials: 'include',
                headers: headers,
                body: body,
        })
            .catch((err) => {
                if (!navigator.onLine) {
                    location.reload();
                }
            });
    }

    /**
     * This is a delete query.
     *
     * @param {string} host - host of API
     * @param {string} url - query url
     * @param {object} headers - headers of query
     * @return {function} - call of fetch
     *
     * @example
     *
     *     queryDelete('http://localhost:1323', '/', {})
     */
    static queryDelete({
                        host = serverAddress,
                        url = '/',
                        headers = {},
                    } = {}) {
        return fetch(host + url, {
                method: 'DELETE',
                credentials: 'include',
                headers: headers,
        })
        .catch((err) => {
            if (!navigator.onLine) {
                location.reload();
            }
        });
    }

    /**
     * This is a delete query.
     *
     * @param {string} name - name of user
     * @return {string} - cookie
     *
     * @example
     *
     *     getCookie('mark')
     */
    static getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : '';
    }
}
