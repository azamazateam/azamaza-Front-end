import React, {useEffect} from 'react';
import CategoriesSlider from '../../../components/CategoriesSlider/CategoriesSlider.tsx';
import ServiceHead from '../components/ServiceHead/ServiceHead.tsx';
import {useTranslation} from 'react-i18next';
import background from '../../../assets/images/serviceBackgrounds/photography.png';
import s from '../Service.module.css';
import ServicePropose from '../components/ServicePropose/ServicePropose.tsx';
import UniqueOffersForYou from '../../../components/UniqueOffersForYou/UniqueOffersForYou.tsx';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import SearchForm from '../../../components/Forms/SearchForm/SearchForm.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store.ts';
import LocationBlueButton from '../../../components/Buttons/NextPositionButton/LocationBlueButton.tsx';
import IconSliderFilter from '../../../components/Filters/IconSliderFilter/IconSliderFilter.tsx';
import {photographyFilterData} from '../../../mocks/iconSliderFilterData.ts';
import {setIconsSliderFilter} from '../../../redux/slices/filtersSlice.ts';
import {azamazaSelectionsData} from '../../../mocks/azamazaSelectionsData.ts';
import {setAzamazaSelection} from '../../../redux/slices/azamazaSelectionsSlice.ts';
import AzamazaSelections from '../../../components/AzamazaSelections/AzamazaSelections.tsx';
import {uniqueOffers} from '../../../mocks/userData.ts';
import {setUniqueOfferForYou} from '../../../redux/slices/userSlice.ts';
import {setProposeList} from '../../../redux/slices/proposeSlice.ts';
import {serviceProposeData} from '../../../mocks/serviceProposeData.ts';

const Photography: React.FC = () => {
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
			(i) => i.serviceName === 'photography',
		);
		const uniqueOffersPhotography = uniqueOffers.filter(
			(o) => o.serviceName === 'photography',
		);
		const proposeListPhotography = serviceProposeData.filter(
			(p) => p.serviceName === 'photography',
		);
		dispatch(setAzamazaSelection(selectionData ?? null));
		dispatch(setIconsSliderFilter(photographyFilterData));
		dispatch(setUniqueOfferForYou(uniqueOffersPhotography));
		dispatch(setProposeList(proposeListPhotography));
	}, [dispatch]);
	//const popularPartnersIcons =useSelector((state:RootState)=>state)

	return (
		<>
			<ServiceHead
				size={342}
				title={t('Professional photo and video shooting')}
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
					approximateTime
					showLocation
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
					title={t('Recommendation for you')}
					data={popularCard}
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend
					title={t('Also order with this')}
					data={popularCard}
					isShowMore
				/>
			</div>
		</>
	);
};

export default Photography;
