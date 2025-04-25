import React, {useEffect} from 'react';
import s from '../Service.module.css';
import ServiceHead from '../components/ServiceHead/ServiceHead.tsx';
import background from '../../../assets/images/serviceBackgrounds/rent.png';
import CategoriesSlider from '../../../components/CategoriesSlider/CategoriesSlider.tsx';
import ServicePropose from '../components/ServicePropose/ServicePropose.tsx';
import SearchForm from '../../../components/Forms/SearchForm/SearchForm.tsx';
import LocationBlueButton from '../../../components/Buttons/NextPositionButton/LocationBlueButton.tsx';
import IconSliderFilter from '../../../components/Filters/IconSliderFilter/IconSliderFilter.tsx';
import AzamazaSelections from '../../../components/AzamazaSelections/AzamazaSelections.tsx';
import UniqueOffersForYou from '../../../components/UniqueOffersForYou/UniqueOffersForYou.tsx';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {RootState} from '../../../redux/store.ts';
import {azamazaSelectionsData} from '../../../mocks/azamazaSelectionsData.ts';
import {uniqueOffers} from '../../../mocks/userData.ts';
import {serviceProposeData} from '../../../mocks/serviceProposeData.ts';
import {setAzamazaSelection} from '../../../redux/slices/azamazaSelectionsSlice.ts';
import {setIconsSliderFilter} from '../../../redux/slices/filtersSlice.ts';
import {rentFilterData} from '../../../mocks/iconSliderFilterData.ts';
import {setUniqueOfferForYou} from '../../../redux/slices/userSlice.ts';
import {setProposeList} from '../../../redux/slices/proposeSlice.ts';

const Rent: React.FC = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const popularCard = useSelector(
		(state: RootState) => state.homePage.mostPopularService,
	);

	const azamazaSelections = useSelector(
		(state: RootState) => state.azamazaSelectionsData.azamazaSelections,
	);
	const uniqueOfferForYou = useSelector(
		(state: RootState) => state.user.uniqueOfferForYou,
	);
	const proposeList = useSelector(
		(state: RootState) => state.proposeData.proposeList,
	);
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
			<ServiceHead
				size={342}
				title={t('Everything for rent in one place')}
				background={background}
			/>
			<div className={s.container24}>
				<CategoriesSlider />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<ServicePropose data={proposeList} />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<SearchForm
					showDate
					showLocation
					showRentService
					onSubmitFn={() => console.log('onSubmitPhotography')}
				/>
				<div className={s.container12}>
					<LocationBlueButton text={t('Near the current location')} />
				</div>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<IconSliderFilter />
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<AzamazaSelections
					data={azamazaSelections}
					title={t('Azamaza selections')}
					description={t('We have selected the best deals for you')}
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<UniqueOffersForYou data={uniqueOfferForYou} />
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Car rental services')}
					data={popularCard.filter((c) => c?.categoryName === 'car')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Ski equipment rental services')}
					data={popularCard.filter((c) => c?.categoryName === 'skyEquipment')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Motorcycle rental services')}
					data={popularCard.filter((c) => c?.categoryName === 'motorcycle')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Scooter rental services')}
					data={popularCard.filter((c) => c?.categoryName === 'scooter')}
					isShowMore
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					isShowMore
					title={t('Bicycle rental services')}
					data={popularCard.filter((c) => c?.categoryName === 'bicycle')}
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					isShowMore
					title={t('Also order with this')}
					data={popularCard}
				/>
			</div>
		</>
	);
};

export default Rent;
