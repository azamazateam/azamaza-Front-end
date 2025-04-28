import React, {useEffect} from 'react';
import s from '../Service.module.css';
import {useTranslation} from 'react-i18next';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import {useDispatch} from 'react-redux';
import BasicUniquePage from '../BasicUniquePage.tsx';
import background from '../../../assets/images/serviceBackgrounds/excursion.png';
import {azamazaSelectionsData} from '../../../mocks/azamazaSelectionsData.ts';
import {uniqueOffers} from '../../../mocks/userData.ts';
import {setAzamazaSelection} from '../../../redux/slices/azamazaSelectionsSlice.ts';
import {setIconsSliderFilter} from '../../../redux/slices/filtersSlice.ts';
import {excursionFilterData} from '../../../mocks/iconSliderFilterData.ts';
import {setUniqueOfferForYou} from '../../../redux/slices/userSlice.ts';
import useServiceFilter from '../../../hooks/useServiceFilter.tsx';
import {setProposeList} from '../../../redux/slices/proposeSlice.ts';
import {serviceProposeData} from '../../../mocks/serviceProposeData.ts';

const Excursion: React.FC = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const {serviceFilter} = useServiceFilter();

	useEffect(() => {
		const selectionData = azamazaSelectionsData.filter(
			(i) => i.serviceName === 'excursion',
		);
		dispatch(setAzamazaSelection(selectionData ?? null));
		dispatch(setIconsSliderFilter(excursionFilterData));
		dispatch(setUniqueOfferForYou(uniqueOffers));
		dispatch(setProposeList(serviceProposeData));
	}, [dispatch]);
	return (
		<>
			<BasicUniquePage
				background={background}
				searchFormSettings={{
					showDate: true,
					approximateTime: true,
					showLocation: true,
					numberOfPeople: true,
					onSubmitFn: () => console.log('onSubmitExcursion'),
				}}
				azaSelectionsDescription={t('We have selected the best deals for you')}
				locationButtonText={t('Near the current location')}
				mainTitle={t('History, adventure, and discounts - together!')}
			/>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Cultural and city tours')}
					data={serviceFilter('excursion', 'cultural')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Romantic and active tours')}
					data={serviceFilter('excursion', 'romanticActive')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Gastronomic tours')}
					data={serviceFilter('excursion', 'gastro')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Festivals and night tours')}
					data={serviceFilter('excursion', 'festAndNight')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Sports excursions')}
					data={serviceFilter('excursion', 'sports')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Also order with this')}
					data={serviceFilter()}
					isShowMore
				/>
			</div>
		</>
	);
};

export default Excursion;
