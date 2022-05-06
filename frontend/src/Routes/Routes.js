import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Example start ---
import { TemplateS } from '../Components/Templates/Styles/Template.styles';
import ChildTemplate from '../Components/Templates/ChildTemplate';
import Template from '../Components/Templates/Template';
// Example end ---
import PageError from '../Components/Error/PageError';

const RoutesPath = () => {
	return (
		<TemplateS>
			<BrowserRouter>
				<Routes>
					{/* Route '/' */}
					<Route exact path={'/'} element={<Template />}>
						{/* Template with Childrens, you need add the father path on the children route */}
						<Route exact path={'/child'} element={<ChildTemplate />} />
					</Route>
					{/* Page Error for Any Other Page */}
					<Route exact path={'*'} element={<PageError />} />
				</Routes>
			</BrowserRouter>
		</TemplateS>
	);
};

export default RoutesPath;
