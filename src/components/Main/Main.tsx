import React from 'react';
import s from './main.module.css';
import {Route, Routes} from 'react-router-dom';
import Page404 from '../../pages/Page404/Page404.tsx';
import Home from '../../pages/Home/Home.tsx';

const Main: React.FC = () => {
	return (
		<section className={s.pageWrapper}>
			<Routes>
				<Route path="/" element={<Home />} />
				{/*<Route
					path="/login"
					element={<ProtectedRoute></ProtectedRoute>}
				/>*/}
				<Route path="*" element={<Page404 />} />
			</Routes>
		</section>
	);
};

export default Main;
