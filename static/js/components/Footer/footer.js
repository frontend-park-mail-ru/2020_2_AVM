export function footerView(footer, config) {
    footer.innerHTML =
        `
        <footer class="s-footer">
            <div class="s-footer__main">
                <div class="row">
                    <div class="column large-4 medium-6 tab-12 s-footer__info">
                        <h5>О проекте</h5>
                        <p>
                           Untitled is copy of vc.ru
                        </p>
                    </div> 
                    <div class="column large-2 medium-3 tab-6 s-footer__site-links">
                        <h5>Навигация</h5>
                        <ul class="footer__menu">
                        </ul>
                    </div>
                    <div class="column large-2 medium-3 tab-6 s-footer__social-links">
                        <h5>Социальные сети</h5>
                        <ul>
                            <li><a href="#">Вконтакте</a></li>
                            <li><a href="#">Фейсбук</a></li>
                            <li><a href="#">Инстаграм</a></li>
                            <li><a href="#">Твиттер</a></li>
                        </ul>
                    </div>
                    <div class="column large-4 medium-12 s-footer__subscribe">
                        <h5>Поиск</h5>
                        <div class="subscribe-form">
                            <form id="mc-form" class="group" novalidate="true">
                                <input type="text" value="" name="dEmail" class="email" id="mc-email" placeholder="Введите запрос" required="">
                                    <input type="submit" name="subscribe" >
                                    <label for="mc-email" class="subscribe-message"></label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="s-footer__bottom">
                <div class="row">
                    <div class="column">
                        <div class="ss-copyright">
                            <span>2020</span>
                            <span>AVM</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;

    const menuFooter = document.getElementsByClassName('footer__menu')[0];
    Object
        .keys(config)
        .map((menuKey) => {
            const {href, text} = config[menuKey];

            const menuItem = document.createElement('li');
            const menuLink = document.createElement('a');

            menuItem.appendChild(menuLink);

            menuLink.href = href;
            menuLink.textContent = text;
            menuLink.dataset.section = menuKey;

            return menuItem;
        })
        .forEach((element) => {
            menuFooter.appendChild(element);
        })
    ;
}