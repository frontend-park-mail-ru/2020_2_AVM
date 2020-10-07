export function search () {
	const searchWrap = document.querySelector('.s-header__search');
	const searchTrigger = document.querySelector('.s-header__search-trigger');

	if (!(searchWrap && searchTrigger)) return;

	const searchField = searchWrap.querySelector('.s-header__search-field');
	const closeSearch = searchWrap.querySelector('.s-header__overlay-close');
	const siteBody = document.querySelector('body');

	searchTrigger.addEventListener('click', function (e) {
		e.preventDefault();
		e.stopPropagation();

		siteBody.classList.add('search-is-visible');
	});

	closeSearch.addEventListener('click', function (e) {
		e.stopPropagation();

		if (siteBody.classList.contains('search-is-visible')) {
			siteBody.classList.remove('search-is-visible');
		}
	});

	searchWrap.addEventListener('click', function (e) {
		if (!(e.target.matches('.s-header__search-field'))) {
			closeSearch.dispatchEvent(new Event('click'));
		}
	});

	searchField.addEventListener('click', function (e) {
		e.stopPropagation();
	});

	searchField.setAttribute('placeholder', 'Введите запрос');
	searchField.setAttribute('autocomplete', 'off');
}