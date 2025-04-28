import React, {useEffect} from 'react';
import s from '../Service.module.css';
import background from '../../../assets/images/serviceBackgrounds/Restaurants.png';
import {useTranslation} from 'react-i18next';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store.ts';
import {setIconsSliderFilter} from '../../../redux/slices/filtersSlice.ts';
import {foodFilterData} from '../../../mocks/iconSliderFilterData.ts';
import {azamazaSelectionsData} from '../../../mocks/azamazaSelectionsData.ts';
import {setAzamazaSelection} from '../../../redux/slices/azamazaSelectionsSlice.ts';
import BasicUniquePage from '../BasicUniquePage.tsx';

const Restaurants: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch();

	const popularCards = useSelector(
		(state: RootState) => state.homePage.mostPopularService,
	);
	useEffect(() => {
		const selectionData = azamazaSelectionsData.filter(
			(i) => i.serviceName === 'restaurants',
		);
		dispatch(setAzamazaSelection(selectionData ?? null));
		dispatch(setIconsSliderFilter(foodFilterData));
	}, [dispatch]);

	return (
		<div>
			<BasicUniquePage
				background={background}
				searchFormSettings={{
					title: t('Discover and book the best restaurant'),
					showDate: true,
					numberOfPeople: true,
					showLocation: true,
					onSubmitFn: () => console.log('onSubmitRestaurant'),
				}}
				azaSelectionsDescription={t('We have selected the best deals for you')}
				locationButtonText={t('Near the current location')}
				mainTitle={t('Best restaurants, unique offers, best chefs.')}
			/>
			<div className={`${s.container32}`}>
				<CardsSliderRecommend
					data={popularCards}
					description={t(
						'Plan your trip easily and quickly, with the best and unique offers',
					)}
					title={t('The most popular services')}
					isShowMore={false}
				/>
			</div>
			<div className={`${s.container32}`}>
				<CardsSliderRecommend
					data={popularCards}
					title={t('Recommendation for you')}
					description={t(
						'These positions have been selected based on your searches and are recommended to you',
					)}
					isShowMore={false}
				/>
			</div>
			<div className={`${s.container32}`}>
				<CardsSliderRecommend
					data={popularCards}
					title={t('Highest score in the region')}
					description={t(
						'These services have won the highest ratings and reviews on our platform',
					)}
					isShowMore={false}
				/>
			</div>
			<div className={`${s.container32}`}>
				<CardsSliderRecommend
					data={popularCards}
					title={t('Also order with this')}
					isShowMore
				/>
			</div>
		</div>
	);
};

export default Restaurants;
