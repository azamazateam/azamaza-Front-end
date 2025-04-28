import React, {useEffect} from 'react';
import s from '../Service.module.css';
import background from '../../../assets/images/serviceBackgrounds/rent.png';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {azamazaSelectionsData} from '../../../mocks/azamazaSelectionsData.ts';
import {uniqueOffers} from '../../../mocks/userData.ts';
import {serviceProposeData} from '../../../mocks/serviceProposeData.ts';
import {setAzamazaSelection} from '../../../redux/slices/azamazaSelectionsSlice.ts';
import {setIconsSliderFilter} from '../../../redux/slices/filtersSlice.ts';
import {rentFilterData} from '../../../mocks/iconSliderFilterData.ts';
import {setUniqueOfferForYou} from '../../../redux/slices/userSlice.ts';
import {setProposeList} from '../../../redux/slices/proposeSlice.ts';
import BasicUniquePage from '../BasicUniquePage.tsx';
import useServiceFilter from '../../../hooks/useServiceFilter.tsx';

const Rent: React.FC = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const {serviceFilter} = useServiceFilter();
	useEffect(() => {
		const selectionData = azamazaSelectionsData.filter(
			(i) => i.serviceName === 'rent',
		);
		const uniqueOffersRent = uniqueOffers.filter(
			(o) => o.serviceName === 'rent',
		);
		const proposeListRent = serviceProposeData.filter(
			(p) => p.serviceName === 'rent',
		);
		dispatch(setAzamazaSelection(selectionData ?? null));
		dispatch(setIconsSliderFilter(rentFilterData));
		dispatch(setUniqueOfferForYou(uniqueOffersRent));
		dispatch(setProposeList(proposeListRent));
	}, [dispatch]);
	return (
		<>
			<BasicUniquePage
				mainTitle={t('Everything for rent in one place')}
				background={background}
				searchFormSettings={{
					showDate: true,
					showLocation: true,
					showRentService: true,
					onSubmitFn: () => console.log('onSubmitRent'),
				}}
				locationButtonText={t('Near the current location')}
				azaSelectionsDescription={t('We have selected the best deals for you')}
			/>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Car rental services')}
					data={serviceFilter('rent', 'car')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Ski equipment rental services')}
					data={serviceFilter('rent', 'skyEquipment')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Motorcycle rental services')}
					data={serviceFilter('rent', 'motorcycle')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Scooter rental services')}
					data={serviceFilter('rent', 'scooter')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					isShowMore
					title={t('Bicycle rental services')}
					data={serviceFilter('rent', 'bicycle')}
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					isShowMore
					title={t('Also order with this')}
					data={serviceFilter('rent')}
				/>
			</div>
		</>
	);
};

export default Rent;
