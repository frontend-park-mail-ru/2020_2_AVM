import Model from '../api/model.js';
import Fetching from '../api/fetch.js';
import {URLS} from '../settings/config.js'

/**
 * TODO:
 * перенести часть логики обработки запросов
 * из соответствубщих компонентов (контроллеров)
 */
export default class ArticleModel extends Model {
    constructor() {
        super();
    }
    
    static getUserArticles(id) {
        return Fetching.queryGet({
            url: URLS.getUserArticles,
        });
    }

    static makeArticle({
                          title = '',
                          text = '',
                      }) {
        return Fetching.queryPost({
            url: URLS.makeArticle,
            body: JSON.stringify({
                'title': title,
                'text': text,
            }),
            headers: {
                'X-CSRF-TOKEN': Fetching.getCookie('X-CSRF-TOKEN'),
                'Content-Type': 'application/json',
            },
        });
    }
    
}