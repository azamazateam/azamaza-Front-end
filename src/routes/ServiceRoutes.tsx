import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Excursion from '../pages/Services/Excursion/Excursion.tsx';
import Photography from '../pages/Services/Photography/Photography.tsx';
import Restaurants from '../pages/Services/Restaurants/Restaurants.tsx';
import Hotels from '../pages/Services/Hotels/Hotels.tsx';
import Marketplaces from '../pages/Services/Marketplaces/Marketplaces.tsx';
import ReferralProgram from '../pages/Services/ReferralProgram/ReferralProgram.tsx';
import Rent from '../pages/Services/Rent/Rent.tsx';

const ServiceRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path={`excursion`} element={<Excursion />} />
			<Route path={`photography`} element={<Photography />} />
			<Route path={`restaurants`} element={<Restaurants />} />
			<Route path={`hotels`} element={<Hotels />} />
			<Route path={`marketplaces`} element={<Marketplaces />} />
			<Route path={`referral-program`} element={<ReferralProgram />} />
			<Route path={`rent`} element={<Rent />} />
		</Routes>
	);
};

export default ServiceRoutes;
