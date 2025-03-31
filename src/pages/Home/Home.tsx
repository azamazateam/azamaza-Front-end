import React from 'react';
import FooterMain from '../../components/Footers/FooterMain.tsx';
import Main from '../../components/Main/Main.tsx';
import Header from '../../components/Header/Header.tsx';
import CategoriesSlider from '../Categories/CategoriesSlider/CategoriesSlider.tsx';
import MainTitle from '../../components/MainTitle/MainTitle.tsx';
import MainSearchForm from '../../components/Forms/MainSearchForm/MainSearchForm.tsx';

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Main>
				<CategoriesSlider />
				<MainTitle />
				<MainSearchForm />
			</Main>
			<FooterMain />
			{/*<FooterCommon />*/}
		</>
	);
};

export default Home;
