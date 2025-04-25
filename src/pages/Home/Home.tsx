import React, {useEffect} from 'react';
import FooterMain from '../../components/Footers/FooterMain.tsx';
import Main from '../../components/Main/Main.tsx';
import Header from '../../components/Header/Header.tsx';
import CategoriesSlider from '../../components/CategoriesSlider/CategoriesSlider.tsx';
import MainTitle from '../../components/MainTitle/MainTitle.tsx';
import s from './Home.module.css';
import Advantages from './components/Advantages/Advantages.tsx';
import ServiceAdvantages from './components/ServiceAdvantages/ServiceAdvantages.tsx';
import ReferralsProgramCard from '../ReferralsProgram/components/ReferralsProgramCard/ReferralsProgramCard.tsx';
import UniqueOffersForYou from '../../components/UniqueOffersForYou/UniqueOffersForYou.tsx';
import TopFAQ from './components/TopFAQ/TopFAQ.tsx';
import HowItWorks from './components/HowItWorks/HowItWorks.tsx';
import ReferralsInfoBanner from '../ReferralsProgram/components/ReferralsInfoBanner/ReferralsInfoBanner.tsx';
import OurSubscriptions from './components/OurSubscriptions/OurSubscriptions.tsx';
import MostPopularServices from './components/MostPopularServices/MostPopularServices.tsx';
import SearchForm from '../../components/Forms/SearchForm/SearchForm.tsx';
import PopularPartnersBrands from '../../components/PopularPartnersBrands/PopularPartnersBrands.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store.ts';
import {FormikValues} from 'formik';
import {useNavigate} from 'react-router-dom';
import {setUniqueOfferForYou} from '../../redux/slices/userSlice.ts';
import {uniqueOffers} from '../../mocks/userData.ts';
import {useMediaQuery} from 'react-responsive';
import {useTranslation} from 'react-i18next';
import {Desktop, Mobile} from '../../assets/utils/responsive.tsx';
import ReferralsProgramBanner from '../ReferralsProgram/components/ReferralsProgramBanner/ReferralsProgramBanner.tsx';
import FooterDesktop from '../../components/Footers/FooterDesktop.tsx';

const Home: React.FC = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const navigate = useNavigate();
	const isMobile = useMediaQuery({maxWidth: 600});
	const popularPartnersIcons = useSelector(
		(state: RootState) => state.homePage.popularPartnersIcons,
	);
	const uniqueOfferForYou = useSelector(
		(state: RootState) => state.user.uniqueOfferForYou,
	);
	const handleSearch = (values: FormikValues) => {
		if (values && values.service !== '') {
			navigate(
				`/search-result?${values?.service && `service=${values.service}`}`,
			);
		}
	};
	useEffect(() => {
		dispatch(setUniqueOfferForYou(uniqueOffers));
	});
	return (
		<>
			<Header />
			<Main>
				<div className={`${s.blueBackground} `}>
					<div className={`${s.categorySliderContainer} __container`}>
						<CategoriesSlider />
					</div>
					<div className={`${s.containerMainTitle} __container`}>
						<MainTitle />
					</div>
					<div className={s.container24}>
						<SearchForm
							onSubmitFn={handleSearch}
							showLocation
							showDate
							showService
						/>
					</div>
				</div>
				<div className={`${s.marginTop} __container`}>
					<div className={s.container24}>
						<PopularPartnersBrands
							description={
								isMobile
									? undefined
									: t(
											'Our partners are leaders in the market of services and offers',
										)
							}
							data={popularPartnersIcons}
							title={isMobile ? undefined : t('We work with the best partners')}
						/>
					</div>
					<div className={s.container}>
						<Advantages />
					</div>
					<div className={s.container32}>
						<UniqueOffersForYou data={uniqueOfferForYou} />
					</div>
					<div className={s.container32}>
						<HowItWorks />
					</div>
					<div className={s.container32}>
						<MostPopularServices />
					</div>
					<Mobile>
						<div className={s.container32}>
							<ReferralsProgramCard />
						</div>
					</Mobile>
					<div className={s.container32}>
						<OurSubscriptions />
					</div>
					<Desktop>
						<div className={s.container32}>
							<ReferralsProgramBanner />
						</div>
					</Desktop>
					<div className={s.container32}>
						<ReferralsInfoBanner />
					</div>
					<div className={s.container32}>
						<ServiceAdvantages />
					</div>
					<div className={s.container32}>
						<TopFAQ />
					</div>
				</div>
			</Main>
			<Mobile>
				<FooterMain />
			</Mobile>
			<Desktop>
				<FooterDesktop />
			</Desktop>
		</>
	);
};

export default Home;
