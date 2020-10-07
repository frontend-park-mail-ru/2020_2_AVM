"use strict";

/* Mobile Menu
* ---------------------------------------------------- */
const ssMobileMenu = function() {

    const $navWrap = document.querySelector('.s-header__nav-wrap');
    const $closeNavWrap = $navWrap.querySelectorAll('.s-header__overlay-close');
    const $menuToggle = document.querySelector('.s-header__toggle-menu');
    const $siteBody = document.querySelector('body');

    $menuToggle.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();

        $siteBody.classList.add('nav-wrap-is-visible');

    };

    $closeNavWrap.forEach((item)=>
        item.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();

            if($siteBody.classList.contains('nav-wrap-is-visible')) {
                $siteBody.classList.remove('nav-wrap-is-visible');
            }
    })


    document.querySelector('.s-header__nav')
        .querySelectorAll('.has-children').forEach((item) => {
            item.querySelectorAll('a')
                .onclick = function (e) {
                e.preventDefault();

                if (document.querySelector(".close-mobile-menu").is(":visible") === true) {

                    this.toggleClass('sub-menu-is-open')
                        .next('ul')
                        .slideToggle(200)
                        .end()
                        .parent('.has-children')
                        .siblings('.has-children')
                        .children('a')
                        .removeClass('sub-menu-is-open')
                        .next('ul')
                        .slideUp(200);
                }
            }
        }
    )

}; // end ssMobileMenu


/* search
* ------------------------------------------------------ */
const ssSearch = function() {

    const searchWrap = document.querySelector('.s-header__search');
    const searchTrigger = document.querySelector('.s-header__search-trigger');

    if (!(searchWrap && searchTrigger)) return;

    const searchField = searchWrap.querySelector('.s-header__search-field');
    const closeSearch = searchWrap.querySelector('.s-header__overlay-close');
    const siteBody = document.querySelector('body');

    searchTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        siteBody.classList.add('search-is-visible');
    });

    closeSearch.addEventListener('click', function(e) {
        e.stopPropagation();

        if(siteBody.classList.contains('search-is-visible')) {
            siteBody.classList.remove('search-is-visible');
        }
    });

    searchWrap.addEventListener('click', function(e) {
        if( !(e.target.matches('.s-header__search-field')) ) {
            closeSearch.dispatchEvent(new Event('click'));
        }
    });

    searchField.addEventListener('click', function(e) {
        e.stopPropagation();
    })

    searchField.setAttribute('placeholder', 'Введите запрос');
    searchField.setAttribute('autocomplete', 'off');

}; // end ssSearch


/* Initialize
* ------------------------------------------------------ */
(function ssInit() {
    ssSearch();
    ssMobileMenu();
})();