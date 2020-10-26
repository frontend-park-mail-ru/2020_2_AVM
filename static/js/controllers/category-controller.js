import Controller from '../api/controller.js';
import CategoryView from '../views/category-view.js';


export default class CategoryPageController extends Controller {
    /**
     * constructor of controller
     * @param {HTMLElement} parent - HTML container
     * @param {HTMLElement} header - HTML container
     * @param {Object} config - list menu
     */
    constructor(parent, header, config) {
        super();
        this.parent = parent;
        this.data = {login: 'Вы не вошли'};
        this.view = new CategoryView(this.parent);
    }

    /**
     * action of controller, logic of profile
     */
    action() {

        const articles =[
            {
                title: "Первый заголовок",
                date: "1 сентября 2020",
                author: "Автор 1",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 1",
            },
            {
                title: "Второй заголовок",
                date: "1 сентября 2020",
                author: "Автор 2",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 2",
            },
            {
                title: "Третий заголовок",
                date: "1 сентября 2020",
                author: "Автор 3",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 3",
            },
            {
                title: "Четвертый заголовок",
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Первый заголовок",
                date: "1 сентября 2020",
                author: "Автор 1",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 1",
            },
            {
                title: "Второй заголовок",
                date: "1 сентября 2020",
                author: "Автор 2",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 2",
            },
            {
                title: "Третий заголовок",
                date: "1 сентября 2020",
                author: "Автор 3",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 3",
            },
            {
                title: "Четвертый заголовок",
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
            {
                title: "Первый заголовок",
                date: "1 сентября 2020",
                author: "Автор 1",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 1",
            },
            {
                title: "Второй заголовок",
                date: "1 сентября 2020",
                author: "Автор 2",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 2",
            },
            {
                title: "Третий заголовок",
                date: "1 сентября 2020",
                author: "Автор 3",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 3",
            },
            {
                title: "Четвертый заголовок",
                date: "1 сентября 2020",
                author: "Автор 4",
                categories: ["Дизайн", "Фотографии"],
                description: "Описание к статье 4",
            },
        ];

        this.data.key = "Категория:";
        this.data.value = "Текущая категория";
        this.data.articles = articles;

        this.view.render(this.data);

    }

}