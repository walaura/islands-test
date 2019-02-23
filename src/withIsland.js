import React from 'react';

export const withIsland = original => {
	return props => {
		const mounted = original(props);
		return (
			<x-island
				{...Object.entries(props).reduce(
					(prev, [key, val]) => ({
						...prev,
						[`data-prop-${key}`]: JSON.stringify(val),
					}),
					{}
				)}
				for={mounted._source.fileName}
			>
				<x-island-result>{mounted}</x-island-result>
			</x-island>
		);
	};
};
