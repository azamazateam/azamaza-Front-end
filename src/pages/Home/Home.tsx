import React from 'react';
import FooterMain from '../../components/Footers/FooterMain.tsx';
import Main from '../../components/Main/Main.tsx';
import Header from '../../components/Header/Header.tsx';
import CategoriesSlider from '../Categories/CategoriesSlider/CategoriesSlider.tsx';
import MainTitle from '../../components/MainTitle/MainTitle.tsx';
import MainSearchForm from '../../components/Forms/MainSearchForm/MainSearchForm.tsx';
import LabelCarousel from '../../components/LabelCarousel/LabelCarousel.tsx';
import s from './Home.module.css';
import {
	carouselData1,
	carouselData2,
} from '../../components/LabelCarousel/carouselData1.ts';
import Advantages from './components/Advantages/Advantages.tsx';
import ServiceAdvantages from './components/ServiceAdvantages/ServiceAdvantages.tsx';
import ReferralsProgramCard from '../ReferralsProgram/components/ReferralsProgramCard/ReferralsProgramCard.tsx';
import UniqueOffersForYou from './components/UniqueOffersForYou/UniqueOffersForYou.tsx';
import TopFAQ from './components/TopFAQ/TopFAQ.tsx';
import HowItWorks from './components/HowItWorks/HowItWorks.tsx';
import ReferralsInfoBanner from '../ReferralsProgram/components/ReferralsInfoBanner/ReferralsInfoBanner.tsx';
import OurSubscriptions from './components/OurSubscriptions/OurSubscriptions.tsx';

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Main>
				<CategoriesSlider />
				<div className={s.container}>
					<MainTitle />
				</div>
				<div className={s.container}>
					<MainSearchForm />
				</div>
				<div className={s.container}>
					<LabelCarousel data={carouselData1} />
					<LabelCarousel data={carouselData2} revers />
				</div>
				<div className={s.container}>
					<Advantages />
				</div>
				<div className={s.container}>
					<UniqueOffersForYou />
				</div>
				<div className={s.container}>
					<HowItWorks />
				</div>
				<div className={s.container}>
					<ReferralsProgramCard />
				</div>
				<div className={s.container}>
					<OurSubscriptions />
				</div>
				<div className={s.container}>
					<ReferralsInfoBanner />
				</div>
				<div className={s.container}>
					<ServiceAdvantages />
				</div>
				<div className={s.container}>
					<TopFAQ />
				</div>
			</Main>
			<FooterMain />
			{/*<FooterCommon />*/}
		</>
	);
};

export default Home;
