import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Excursion from './Excursion/Excursion.tsx';
import FooterCommon from '../../components/Footers/FooterCommon.tsx';
import Header from '../../components/Header/Header.tsx';
import Main from '../../components/Main/Main.tsx';
import Photography from './Photography/Photography.tsx';

const Service: React.FC = () => {
	return (
		<div>
			<Header />
			<Main>
				<Routes>
					<Route path={`excursion`} element={<Excursion />} />
					<Route path={`photography`} element={<Photography />} />
				</Routes>
			</Main>
			<FooterCommon />
		</div>
	);
};

export default Service;
