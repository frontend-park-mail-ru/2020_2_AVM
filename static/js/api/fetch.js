let serverAddress = 'http://localhost:1323'

export default class Fetching {

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

    static getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : '';
    }
}