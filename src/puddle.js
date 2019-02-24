import './index.css';
import './App.css';
import ReactDOM from 'react-dom';
import { createElement } from 'react';

[...document.querySelectorAll('x-island')].forEach(element => {
	const result = element.children[0];
	const from = element.attributes.getNamedItem('from').value;
	const props = Object.entries({ ...element.dataset })
		.filter(([key]) => key.indexOf('prop') === 0)
		.map(([key, val]) => [key.substring(4).toLowerCase(), JSON.parse(val)])
		.reduce((prev, [key, val]) => ({ ...prev, [key]: val }), {});

	console.log([result, from, props]);

	import('./' + from).then(({ default: Island }) => {
		ReactDOM.hydrate(createElement(Island, props, props.children), result);
	});
});
