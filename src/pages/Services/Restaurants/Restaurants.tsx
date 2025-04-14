import React from 'react';
import s from '../Service.module.css';
import ServiceHead from '../components/ServiceHead/ServiceHead.tsx';
import background from '../../../assets/images/serviceBackgrounds/Restaurants.png';
import CategoriesSlider from '../../../components/CategoriesSlider/CategoriesSlider.tsx';
import {useTranslation} from 'react-i18next';
import SearchForm from '../../../components/Forms/SearchForm/SearchForm.tsx';
import LocationBlueButton from '../../../components/Buttons/NextPositionButton/LocationBlueButton.tsx';
import FoodFilter from '../../../components/Filters/FoodFilter/FoodFilter.tsx';
import AzamazaSelections from './components/AzamazaSelections/AzamazaSelections.tsx';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store.ts';

const Restaurants: React.FC = () => {
	const {t} = useTranslation();
	const popularCards = useSelector(
		(state: RootState) => state.homePage.mostPopularService,
	);
	return (
		<div>
			<ServiceHead
				size={342}
				title={t('Best restaurants, unique offers, best chefs.')}
				background={background}
			/>
			<div className={s.container24}>
				<CategoriesSlider />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<SearchForm
					title={t('Discover and book the best restaurant')}
					showLocation
					approximateTime
					numberOfPeople
					onSubmitFn={() => console.log('onSubmitRestaurant')}
				/>
				<div className={s.container12}>
					<LocationBlueButton text={t('Near the current location')} />
				</div>
				<div className={s.container32}>
					<FoodFilter />
				</div>
				<div className={s.container32}>
					<AzamazaSelections />
				</div>
				<div className={`${s.container32} ${s.padding}`}>
					<CardsSliderRecommend
						data={popularCards}
						description={t(
							'Plan your trip easily and quickly, with the best and unique offers',
						)}
						title={t('The most popular services')}
						isShowMore={false}
					/>
				</div>
				<div className={`${s.container32} ${s.padding}`}>
					<CardsSliderRecommend
						data={popularCards}
						title={t('The most popular services')}
						description={t(
							'These positions have been selected based on your searches and are recommended to you',
						)}
						isShowMore={false}
					/>
				</div>
				<div className={`${s.container32} ${s.padding}`}>
					<CardsSliderRecommend
						data={popularCards}
						title={t('Highest score in the region')}
						description={t(
							'These services have won the highest ratings and reviews on our platform',
						)}
						isShowMore={false}
					/>
				</div>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
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
