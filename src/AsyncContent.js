import React, { useState } from 'react';

const AsyncContent = props => {
	const [content, setContent] = useState(null);
	return (
		<div
			onClick={() => {
				alert(12);
				setContent(content + 'test-');
			}}
			style={{ color: props.color ? props.color : '#000' }}
		>
			{props.children || 12} {content}
		</div>
	);
};

export default AsyncContent;
