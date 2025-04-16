import React, {useEffect} from 'react';
import ServiceHead from '../components/ServiceHead/ServiceHead.tsx';
import s from '../Service.module.css';
import {useTranslation} from 'react-i18next';
import CategoriesSlider from '../../../components/CategoriesSlider/CategoriesSlider.tsx';
import excursions from '../../../assets/images/serviceBackgrounds/excursion.png';
import ServicePropose from '../components/ServicePropose/ServicePropose.tsx';
import UniqueOffersForYou from '../../../components/UniqueOffersForYou/UniqueOffersForYou.tsx';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import SearchForm from '../../../components/Forms/SearchForm/SearchForm.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store.ts';
import PopularPartnersBrands from '../../../components/PopularPartnersBrands/PopularPartnersBrands.tsx';
import {serviceProposeData} from '../../../mocks/serviceProposeData.ts';
import {setProposeList} from '../../../redux/slices/proposeSlice.ts';

const Excursion: React.FC = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const tours = useSelector(
		(state: RootState) => state.excursionPage.alsoOrderWith,
	);
	const popularPartnersIcons = useSelector(
		(state: RootState) => state.excursionPage.popularPartnersIcons,
	);
	const uniqueOfferForYou = useSelector(
		(state: RootState) => state.user.uniqueOfferForYou,
	);
	const proposeList = useSelector(
		(state: RootState) => state.proposeData.proposeList,
	);
	useEffect(() => {
		const proposeListExcursion = serviceProposeData.filter(
			(p) => p.serviceName === 'excursion',
		);
		dispatch(setProposeList(proposeListExcursion));
	}, [dispatch]);
	return (
		<>
			<ServiceHead
				size={342}
				title={t('History, adventure, and discounts - together!')}
				background={excursions ?? 'transparent'}
			/>
			<div className={s.container24}>
				<CategoriesSlider />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<ServicePropose data={proposeList} />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<SearchForm
					showLocation
					showDate
					approximateTime
					numberOfPeople
					onSubmitFn={() => console.log('onSubmitExcursion')}
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<PopularPartnersBrands
					data={popularPartnersIcons}
					title={t('Choose the best!')}
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<UniqueOffersForYou data={uniqueOfferForYou} />
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Also order with this')}
					data={tours}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Similar options')}
					data={tours}
					isShowMore
				/>
			</div>
		</>
	);
};

export default Excursion;
