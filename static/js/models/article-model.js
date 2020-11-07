import Model from '../api/model.js';
import Fetching from '../api/fetch.js';
import {URLS} from '../settings/config.js'

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
headers.append('Access-Control-Allow-Credentials', 'true')

/**
 * TODO:
 * перенести часть логики обработки запросов
 * из соответствубщих компонентов (контроллеров)
 */
export default class ArticleModel extends Model {
    constructor() {
        super();
    }

    /**
     * This is a user articles request.
     *
     * @param {string} author - id of user
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     getUserArticles('1')
     */
    static getUserArticles(author) {
        return Fetching.queryGet({
            url: URLS.getUserArticles + author,
        });
    }

    /**
     * This is a request to publish an article.
     *
     * @param {string} title - title of article
     * @param {string} desc - desc of article
     * @param {string} content - content of article
     * @return {function} - call of fetch method
     *
     * @example
     *
     *     getUserArticles('hello', 'world', 'bro')
     */
    static makeArticle({
                        title = '',
                        desc = '',
                        content = '',
                        category_name = '',
                        tags = [],
                    }) {
        return Fetching.queryPost({
            url: URLS.makeArticle,
            body: JSON.stringify({
                'article_title': title,
                'description': desc,
                'content': content,
                // 'category_name': category_name,
                // 'tags': tags,
            }),
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
                'Content-Type': 'application/json',
            },
        });
    };


    static getArticlesByCategory(category) {
        return Fetching.queryGet({
            url: URLS.getArticlesByCategory + Category,
        });
    }

    static getArticlesBySubscribe() {
        return Fetching.queryGet({
            url: URLS.getArticlesBySubscribe,
        });
    }
    
}