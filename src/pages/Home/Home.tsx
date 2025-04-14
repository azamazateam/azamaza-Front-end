import React from 'react';
import FooterMain from '../../components/Footers/FooterMain.tsx';
import Main from '../../components/Main/Main.tsx';
import Header from '../../components/Header/Header.tsx';
import CategoriesSlider from '../../components/CategoriesSlider/CategoriesSlider.tsx';
import MainTitle from '../../components/MainTitle/MainTitle.tsx';
import s from './Home.module.css';
import Advantages from './components/Advantages/Advantages.tsx';
import ServiceAdvantages from './components/ServiceAdvantages/ServiceAdvantages.tsx';
import ReferralsProgramCard from '../ReferralsProgram/components/ReferralsProgramCard/ReferralsProgramCard.tsx';
import UniqueOffersForYou from './components/UniqueOffersForYou/UniqueOffersForYou.tsx';
import TopFAQ from './components/TopFAQ/TopFAQ.tsx';
import HowItWorks from './components/HowItWorks/HowItWorks.tsx';
import ReferralsInfoBanner from '../ReferralsProgram/components/ReferralsInfoBanner/ReferralsInfoBanner.tsx';
import OurSubscriptions from './components/OurSubscriptions/OurSubscriptions.tsx';
import MostPopularServices from './components/MostPopularServices/MostPopularServices.tsx';
import LabelsCarousel from '../../components/LabelsCarousel/LabelsCarousel.tsx';
import SearchForm from '../../components/Forms/SearchForm/SearchForm.tsx';

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Main>
				<div className={s.categorySliderContainer}>
					<CategoriesSlider />
				</div>
				<div className={s.container}>
					<MainTitle />
				</div>
				<div className={s.container}>
					<SearchForm
						onSubmitFn={() => console.log('onSubmitMain')}
						showLocation
						showDate
						showService
					/>
				</div>
				<div className={s.container}>
					<LabelsCarousel />
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
					<MostPopularServices />
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
		</>
	);
};

export default Home;
