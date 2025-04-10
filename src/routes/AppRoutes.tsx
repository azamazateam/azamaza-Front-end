import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home.tsx';
import Page404 from '../pages/Page404/Page404.tsx';
import Login from '../pages/Login/Login.tsx';
import Service from '../pages/Services/Service.tsx';
import OneServiceCard from '../pages/OneServiceCard/OneServiceCard.tsx';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path={`/`} element={<Home />} />
			<Route path="*" element={<Page404 />} />
			<Route path={'/login'} element={<Login />} />
			<Route path={'/service/*'} element={<Service />} />
			<Route path={'/service-card/:id'} element={<OneServiceCard />} />
		</Routes>
	);
};

export default AppRoutes;
