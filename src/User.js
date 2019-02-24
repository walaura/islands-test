import React, { useState, useEffect } from 'react';

const User = props => {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 2000);
	}, []);
	return loaded ? <button>Your account</button> : null;
};

export default User;
