export function headerView(header, config) {

    header.innerHTML = `
    
    <header class="s-header">
            <div class="row s-header__content">
                <div class="s-header__logo">
                    <a class="logo" href="/">
                        <img src="images/logo.svg" alt="Homepage">
                    </a>
                </div>
                <nav class="s-header__nav-wrap">
                    <h2 class="s-header__nav-heading h6">Навигация</h2>
                    <ul class="s-header__nav">
                    </ul>
                    <a href="#" title="Close Menu" class="s-header__overlay-close close-mobile-menu"></a>
                </nav>
                <a class="s-header__toggle-menu" href="#" title="Menu"><span>Навигация</span></a>
                <div class="s-header__search">
                    <form role="search" method="get" class="s-header__search-form" action="#">
                        <label>
                            <span class="hide-content">Искать для:</span>
                            <input type="search" class="s-header__search-field" placeholder="Введите запрос" value="" name="s" title="Search for:" autocomplete="off">
                        </label>
                        <input type="submit" class="s-header__search-submit" value="Search">
                    </form>
                    <a href="#" title="Close Search" class="s-header__overlay-close"></a>
                </div>
                <a class="s-header__search-trigger" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                </a>
            </div>
        </header>
    `;


    const menuFooter = document.getElementsByClassName('s-header__nav')[0];
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
        });
}