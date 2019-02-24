import React, { createElement, useState, useEffect, useRef } from 'react';

const Island = ({ from, ...props }) => {
	const element = useRef();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		import('./' + from).then(el => {
			element.current = createElement(el.default, props, props.children);
			setLoading(false);
		});
	}, [from]);

	let initialElement = null;

	if (window.SSR_PRELOAD_ISLANDS && window.SSR_PRELOAD_ISLANDS[from]) {
		initialElement = createElement(
			window.SSR_PRELOAD_ISLANDS[from],
			props,
			props.children
		);
	}

	return (
		<x-island
			from={from}
			{...Object.entries(props).reduce(
				(prev, [key, val]) => ({
					...prev,
					[`data-prop-${key}`]: JSON.stringify(val),
				}),
				{}
			)}
		>
			<x-island-result>
				{loading ? initialElement : element.current}
			</x-island-result>
		</x-island>
	);
};

export default Island;
