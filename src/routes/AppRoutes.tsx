import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home.tsx';
import Page404 from '../pages/Page404/Page404.tsx';
import Login from '../pages/Login/Login.tsx';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Page404 />} />
			<Route path={'/login'} element={<Login />} />
		</Routes>
	);
};

export default AppRoutes;
