import React from 'react';
import FooterCommon from '../../components/Footers/FooterCommon.tsx';
import Header from '../../components/Header/Header.tsx';
import Main from '../../components/Main/Main.tsx';
import ServiceRoutes from '../../routes/ServiceRoutes.tsx';

const Service: React.FC = () => {
	return (
		<div>
			<Header />
			<Main>
				<ServiceRoutes />
			</Main>
			<FooterCommon />
		</div>
	);
};

export default Service;
