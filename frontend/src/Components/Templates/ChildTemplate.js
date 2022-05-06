import React from 'react';
import { useLocation } from 'react-router';

const ChildTemplate = () => {
	const { state } = useLocation();

	return (
		<div>
			<code>{state}</code>
		</div>
	);
};

export default ChildTemplate;
