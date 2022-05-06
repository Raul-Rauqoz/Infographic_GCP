import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageError from '../Components/Error/PageError';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
import User from '../Components/User/User';

const RoutesPath = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					{/* Route '/' */}
					<Route path={'/'} element={<Login />} />
					<Route path={'/signup'} element={<Signup />} />
					<Route path={'/user'} element={<User />} />
					{/* Page Error for Any Other Page */}
					<Route path={'*'} element={<PageError />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default RoutesPath;
