import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Excursion from '../pages/Services/Excursion/Excursion.tsx';
import Photography from '../pages/Services/Photography/Photography.tsx';
import Restaurants from '../pages/Services/Restaurants/Restaurants.tsx';
import Hotels from '../pages/Services/Hotels/Hotels.tsx';

const ServiceRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path={`excursion`} element={<Excursion />} />
			<Route path={`photography`} element={<Photography />} />
			<Route path={`restaurants`} element={<Restaurants />} />
			<Route path={`hotels`} element={<Hotels />} />
		</Routes>
	);
};

export default ServiceRoutes;
