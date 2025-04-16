import React, {useEffect} from 'react';
import s from '../Service.module.css';
import ServiceHead from '../components/ServiceHead/ServiceHead.tsx';
import background from '../../../assets/images/serviceBackgrounds/Restaurants.png';
import CategoriesSlider from '../../../components/CategoriesSlider/CategoriesSlider.tsx';
import {useTranslation} from 'react-i18next';
import SearchForm from '../../../components/Forms/SearchForm/SearchForm.tsx';
import LocationBlueButton from '../../../components/Buttons/NextPositionButton/LocationBlueButton.tsx';
import IconSliderFilter from '../../../components/Filters/IconSliderFilter/IconSliderFilter.tsx';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store.ts';
import {setIconsSliderFilter} from '../../../redux/slices/filtersSlice.ts';
import {foodFilterData} from '../../../mocks/iconSliderFilterData.ts';
import {azamazaSelectionsData} from '../../../mocks/azamazaSelectionsData.ts';
import AzamazaSelections from '../../../components/AzamazaSelections/AzamazaSelections.tsx';
import {setAzamazaSelection} from '../../../redux/slices/azamazaSelectionsSlice.ts';

const Restaurants: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const iconsSliderFilter = useSelector(
		(state: RootState) => state.filters.iconsSliderFilter,
	);
	const azamazaSelections = useSelector(
		(state: RootState) => state.azamazaSelectionsData.azamazaSelections,
	);
	useEffect(() => {
		const selectionData = azamazaSelectionsData.filter(
			(i) => i.serviceName === 'restaurants',
		);
		dispatch(setAzamazaSelection(selectionData ?? null));
		dispatch(setIconsSliderFilter(foodFilterData));
	}, []);
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
					<IconSliderFilter filterData={iconsSliderFilter} />
				</div>
				<div className={s.container32}>
					<AzamazaSelections
						data={azamazaSelections}
						title={t('Azamaza selections')}
						description={t('We have selected the best deals for you')}
					/>
				</div>
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
		</div>
	);
};

export default Restaurants;
