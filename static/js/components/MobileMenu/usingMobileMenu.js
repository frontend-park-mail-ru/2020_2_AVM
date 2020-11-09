export function mobileMenu () {
    const navWrap = document.querySelector('.s-header__nav-wrap');
    const closeNavWrap = navWrap.querySelectorAll('.s-header__overlay-close');
    const menuToggle = document.querySelector('.s-header__toggle-menu');
    const siteBody = document.querySelector('body');

    menuToggle.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        siteBody.classList.add('nav-wrap-is-visible');

    };

    closeNavWrap.forEach((item) =>
        item.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();

            if (siteBody.classList.contains('nav-wrap-is-visible')) {
                siteBody.classList.remove('nav-wrap-is-visible');
            }
        })

    document.querySelector('.s-header__nav')
        .querySelectorAll('.has-children').forEach((item) => {
            item.querySelectorAll('a')
                .onclick = function (e) {
                e.preventDefault();
            }
        }
    )
};