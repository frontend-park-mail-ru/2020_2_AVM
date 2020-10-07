import Model from '../api/model.js';
import Fetching from '../api/fetch.js';

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
            url: urls.getUserArticles,
        });
    }

    static makeArticle({
                          title = '',
                          text = '',
                      }) {
        return Fetching.queryPost({
            url: urls.makeArticle,
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