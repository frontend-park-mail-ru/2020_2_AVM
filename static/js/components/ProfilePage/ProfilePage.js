import Methods from '../../api/methods.js';

export class ProfilePage {
    #parent
    #data

    constructor(parent) {
        this.#parent = parent;
        this.#data = {login: 'Вы не вошли'};
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        this.#data = data;
    }

    render() {
        Methods.getUserData()
            .then((res) => {
            if (res.status !== 201) {
                return Promise.reject(res);
            }


            res.json().then((res) => {
                    this.#data = {
                        id: res.id,
                        login: res.login,
                        email: res.email,
                        avatar: res.avatar,
                    };

                    Methods.getUserAvatar(this.#data.avatar)
                        .then((res) =>{
                            this.#data.image = res.url

                            Methods.getUserArticles(this.#data.id)
                                .then((res) => {
                                    if (res.status === 200) {
                                        res.json().then((res) => {
                                            this.#data.articles = res;
                                            console.log(this.#data.articles);
                                            this.#parent.innerHTML = window.fest['js/components/ProfilePage/ProfilePage.tmpl'](this.#data);
                                        });
                                    }
                                })
                                .catch((err) => {
                                    if (err.status === 500) {
                                        console.error('failed to fetch articles');
                                    }
                                });
                        })
                        .catch((err) => {
                            if (err.status === 500) {
                                console.error('failed to fetch avatar');
                            }
                        });


                    // Methods.getUserArticles(this.#data.login)
                    //     .then((res) => {
                    //         if (res.status === 200) {
                    //             res.json().then((res) => {
                    //                 this.#data.articles = res;
                    //                 console.log(this.#data.articles);
                    //                 this.#parent.innerHTML = window.fest['js/components/ProfilePage/ProfilePage.tmpl'](this.#data);
                    //             });
                    //         }
                    //     })
                    //     .catch((err) => {
                    //         if (err.status === 500) {
                    //             console.error('failed to fetch articles');
                    //         }
                    //     });
                }
            )
                // console.log(profileData);
                // Methods.getUserArticles(this.#data.id)
                //     .then((res) => {
                //         if (res.status === 200) {
                //             res.json().then((res) => {
                //                 // this.#data.articles = res.body.articles;
                //             });
                //         }
                //     })
                //     .catch((err) => {
                //         if (err.status === 500) {
                //             console.error('failed to fetch articles');
                //         }
                //     });
                //
                // })
            .catch((err) => {
                    if (err.status === 500) {
                        this.#parent.innerHTML = window.fest['js/components/ProfilePage/ProfilePage.tmpl'](this.#data);
                        console.error('fail to fetch profile');
                    }
                });

            })
    }

}