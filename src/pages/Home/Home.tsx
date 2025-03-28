import React from 'react';
import FooterMain from '../../components/Footers/FooterMain.tsx';
import Main from '../../components/Main/Main.tsx';
import Header from '../../components/Header/Header.tsx';

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Main>
				<div className="container"></div>
			</Main>
			<FooterMain />
			{/*<FooterCommon />*/}
		</>
	);
};

export default Home;
