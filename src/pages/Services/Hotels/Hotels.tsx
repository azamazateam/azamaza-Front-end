import React, {useEffect} from 'react';
import s from '../Service.module.css';
import ServiceHead from '../components/ServiceHead/ServiceHead.tsx';
import background from '../../../assets/images/serviceBackgrounds/hotels.png';
import CategoriesSlider from '../../../components/CategoriesSlider/CategoriesSlider.tsx';
import SearchForm from '../../../components/Forms/SearchForm/SearchForm.tsx';
import LocationBlueButton from '../../../components/Buttons/NextPositionButton/LocationBlueButton.tsx';
import {useTranslation} from 'react-i18next';
import AzamazaSelections from '../../../components/AzamazaSelections/AzamazaSelections.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store.ts';
import {setAzamazaSelection} from '../../../redux/slices/azamazaSelectionsSlice.ts';
import {azamazaSelectionsData} from '../../../mocks/azamazaSelectionsData.ts';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';

const Hotels: React.FC = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const azamazaSelections = useSelector(
		(state: RootState) => state.azamazaSelections.azamazaSelections,
	);
	const popularCards = useSelector(
		(state: RootState) => state.homePage.mostPopularService,
	);
	const selectionsAll =
		azamazaSelections?.filter((e) => e.periodOffers === 'all') ?? null;
	const selectionsWeekend =
		azamazaSelections?.filter((e) => e.periodOffers === 'weekend') ?? null;
	useEffect(() => {
		const selectionData = azamazaSelectionsData.filter(
			(i) => i.serviceName === 'hotels',
		);
		dispatch(setAzamazaSelection(selectionData ?? null));
	}, []);
	return (
		<div>
			<ServiceHead
				size={342}
				title={t('The best hotels, exclusive offers, favorable bookings!')}
				background={background}
			/>
			<div className={s.container24}>
				<CategoriesSlider />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<SearchForm
					title={t('Dream hotels for the best price')}
					showDate
					numberOfPeople
					showLocation
					onSubmitFn={() => console.log('onSubmitPhotography')}
				/>
				<div className={s.container12}>
					<LocationBlueButton text={t('Near the current location')} />
				</div>
				<div className={`${s.container32}`}>
					<AzamazaSelections
						data={selectionsAll}
						buttonText={t('View more')}
						title={t('Special offer by Azamaza')}
						description={t('Promotions, discounts and special offers for you')}
					/>
				</div>
				<div className={`${s.container32}`}>
					<AzamazaSelections
						data={selectionsWeekend}
						buttonText={t('View more')}
						title={t('The weekend offer')}
						description={t(
							'Save on lodging this weekend, unique offers from our partners',
						)}
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
				<div className={`${s.container32} ${s.padding}`}>
					<CardsSliderRecommend
						title={t('Also order with this')}
						data={popularCards}
						isShowMore
					/>
				</div>
			</div>
		</div>
	);
};

export default Hotels;
