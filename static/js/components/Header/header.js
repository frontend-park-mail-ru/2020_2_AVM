import Router from '../../api/router.js';

export function headerView(header, config) {

	header.innerHTML = '';

	const menuElement = document.createElement('header');
	menuElement.className = 's-header';

	const headerContent = document.createElement('div');
	headerContent.className = 'row';
	headerContent.classList.add('s-header__content');

	const sHeaderLogo = document.createElement('div');
	sHeaderLogo.className = 's-header__logo';

	const aLogo = document.createElement('a');
	aLogo.className = 'logo';

	const imgLogo = document.createElement('img');

	menuElement.appendChild(headerContent);
	headerContent.appendChild(sHeaderLogo);
	sHeaderLogo.appendChild(aLogo);
	aLogo.appendChild(imgLogo);

	imgLogo.src = 'images/logo.svg';
	imgLogo.alt = 'Логотип';


	const sHeaderNavWrap = document.createElement('nav');
	sHeaderNavWrap.className = 's-header__nav-wrap';

	const sHeaderNavHeading = document.createElement('h2');
	sHeaderNavHeading.className = 's-header__nav-heading';
	sHeaderNavHeading.classList.add('h6');
	sHeaderNavHeading.textContent = 'Навигация';

	const sHeaderNav = document.createElement('ul');
	sHeaderNav.className = 's-header__nav';

	headerContent.appendChild(sHeaderNavWrap);
	sHeaderNavWrap.appendChild(sHeaderNavHeading);
	sHeaderNavWrap.appendChild(sHeaderNav);

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

			menuLink.addEventListener('click', (evt) => {
				evt.preventDefault();

				Router.redirect(href);
			});

			return menuItem;
		})
		.forEach((element) => {
			sHeaderNav.appendChild(element);
		})
	;


	const aCloseMenu = document.createElement('a');
	aCloseMenu.className = 's-header__overlay-close';
	aCloseMenu.classList.add('close-mobile-menu');
	aCloseMenu.textContent = 'Закрыть';

	sHeaderNavWrap.appendChild(aCloseMenu);

	const aSHeaderToggleMenu = document.createElement('a');
	aSHeaderToggleMenu.className = 's-header__toggle-menu';
	const spanText = document.createElement('span');
	spanText.textContent = 'Навигация';
	aSHeaderToggleMenu.appendChild(spanText);

	headerContent.appendChild(aSHeaderToggleMenu);


	const divSearch = document.createElement('div');
	divSearch.className = 's-header__search';

	headerContent.appendChild(divSearch);

	const formSearch = document.createElement('form');
	formSearch.className = 's-header__search-form';
	formSearch.role = 'search';
	formSearch.method = 'get';
	formSearch.action = '#';

	divSearch.appendChild(formSearch);

	const label = document.createElement('label');

	formSearch.appendChild(label);

	const hideContent = document.createElement('span');
	hideContent.className = 'hide-content';
	hideContent.textContent = 'Искать для:';

	const inputSearch = document.createElement('input');
	inputSearch.type = 'search';
	inputSearch.className = 's-header__search-field';
	inputSearch.placeholder = 'Введите запрос';
	inputSearch.name = 's';
	inputSearch.title = 'Search for:';
	inputSearch.autocomplete = 'off';
	inputSearch.title = 'Search for:';

	label.appendChild(hideContent);
	label.appendChild(inputSearch);

	const submitSearch = document.createElement('input');
	submitSearch.type = 'submit';
	submitSearch.className = 's-header__search-submit';
	submitSearch.value = 'Search';

	formSearch.appendChild(submitSearch);

	const aCloseSearch = document.createElement('a');
	submitSearch.title = 'Close Search';
	submitSearch.className = 's-header__overlay-close';
	submitSearch.textContent = 'Закрыть';

	divSearch.appendChild(aCloseSearch);

	const aHeaderSearchTrigger = document.createElement('a');
	aHeaderSearchTrigger.className = 's-header__search-trigger';
	aHeaderSearchTrigger.href = '#';

	headerContent.appendChild(aHeaderSearchTrigger);

	const svgItem = document.createElement('svg');
	svgItem.xmlns = 'http://www.w3.org/2000/svg';
	svgItem.viewBox = '0 0 24 24';

	aHeaderSearchTrigger.appendChild(svgItem);

	const pathItem = document.createElement('path');
	pathItem.d = 'M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z';

	svgItem.appendChild(pathItem);

	header.appendChild(menuElement);

}