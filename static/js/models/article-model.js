import Model from '../api/model.js';
import Fetching from '../api/fetch.js';
import {URLS} from '../settings/config.js'

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
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
    
    static getUserArticles(author) {
        return Fetching.queryGet({
            url: urls.getUserArticles + author,
        });
    }

    static makeArticle({
                        title = '',
                        desc = '',
                        content = '',
                    }) {
        return Fetching.queryPost({
            url: urls.makeArticle,
            body: JSON.stringify({
                'title': title,
                'desc': desc,
                'content': content,
            }),
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
                'Content-Type': 'application/json',
            },
        });
    }
    
}