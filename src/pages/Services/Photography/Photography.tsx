import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import background from '../../../assets/images/serviceBackgrounds/photography.png';
import s from '../Service.module.css';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store.ts';
import {photographyFilterData} from '../../../mocks/iconSliderFilterData.ts';
import {setIconsSliderFilter} from '../../../redux/slices/filtersSlice.ts';
import {azamazaSelectionsData} from '../../../mocks/azamazaSelectionsData.ts';
import {setAzamazaSelection} from '../../../redux/slices/azamazaSelectionsSlice.ts';
import {uniqueOffers} from '../../../mocks/userData.ts';
import {setUniqueOfferForYou} from '../../../redux/slices/userSlice.ts';
import {setProposeList} from '../../../redux/slices/proposeSlice.ts';
import {serviceProposeData} from '../../../mocks/serviceProposeData.ts';
import BasicUniquePage from '../BasicUniquePage.tsx';

const Photography: React.FC = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	const popularCard = useSelector(
		(state: RootState) => state.homePage.mostPopularService,
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
			<BasicUniquePage
				background={background}
				searchFormSettings={{
					showDate: true,
					approximateTime: true,
					showLocation: true,
					onSubmitFn: () => console.log('onSubmitPhotography'),
				}}
				azaSelectionsDescription={t('We have selected the best deals for you')}
				locationButtonText={t('Near the current location')}
				mainTitle={t('Professional photo and video shooting')}
			/>

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
