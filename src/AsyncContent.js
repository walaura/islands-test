import React from 'react';

export default props => {
	return (
		<div style={{ color: props.color ? props.color : '#000' }}>
			{props.children || 12}
		</div>
	);
};
