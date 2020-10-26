export default class View {
    constructor() {
        this.parent = {};
        this.template = '';
    }

    render(data) {
        this.parent.innerHTML = window.fest[this.template](data);
    }
}
