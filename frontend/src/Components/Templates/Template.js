import React from 'react';
import { useNavigate, Outlet } from 'react-router';
import { TemplateS } from './Styles/Template.styles';

const Template = () => {
	const navigate = useNavigate();

	return (
		<TemplateS>
			<code>Rauqoz</code>
			<button onClick={() => navigate('/child', { state: 'See the URL' })}>Go to Child</button>
			<Outlet />
		</TemplateS>
	);
};

export default Template;
