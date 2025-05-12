import React, {useEffect} from 'react';
import s from '../Service.module.css';
import background from '../../../assets/images/serviceBackgrounds/marketplaces.png';
import ServiceHead from '../components/ServiceHead/ServiceHead.tsx';
import {useTranslation} from 'react-i18next';
import CategoriesSlider from '../../../components/CategoriesSlider/CategoriesSlider.tsx';
import ServicePropose from '../components/ServicePropose/ServicePropose.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store.ts';
import {setProposeList} from '../../../redux/slices/proposeSlice.ts';
import {serviceProposeData} from '../../../mocks/serviceProposeData.ts';
import SearchForm from '../../../components/Forms/SearchForm/SearchForm.tsx';
import LocationBlueButton from '../../../components/Buttons/NextPositionButton/LocationBlueButton.tsx';
import IconSliderFilter from '../../../components/Filters/IconSliderFilter/IconSliderFilter.tsx';
import {setIconsSliderFilter} from '../../../redux/slices/filtersSlice.ts';
import {marketplacesFilterData} from '../../../mocks/iconSliderFilterData.ts';
import UniqueOffersForYou from '../../../components/UniqueOffersForYou/UniqueOffersForYou.tsx';
import {uniqueOffers} from '../../../mocks/userData.ts';
import {setUniqueOfferForYou} from '../../../redux/slices/userSlice.ts';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import {setProductCards} from '../../../redux/slices/marketplacesSlice.ts';
import {productsListData} from '../../../mocks/ProductsListData.ts';

const Marketplaces: React.FC = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();

	const proposeList = useSelector(
		(state: RootState) => state.proposeData.proposeList,
	);
	const uniqueOfferForYou = useSelector(
		(state: RootState) => state.user.uniqueOfferForYou,
	);
	const productsList = useSelector(
		(state: RootState) => state.marketplaces.productCards,
	);
	useEffect(() => {
		const proposeListMarketplaces = serviceProposeData.filter(
			(p) => p.serviceName === 'marketplaces',
		);
		const uniqueOffersMarketplaces = uniqueOffers.filter(
			(o) => o.serviceName === 'marketplaces',
		);
		dispatch(setProposeList(proposeListMarketplaces));
		dispatch(setIconsSliderFilter(marketplacesFilterData));
		dispatch(setUniqueOfferForYou(uniqueOffersMarketplaces ?? null));
		dispatch(setProductCards(productsListData ?? null));
	}, [dispatch]);
	return (
		<>
			<ServiceHead
				size={342}
				title={t("If we were to open today - you wouldn't find lower prices")}
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
					searchByName
					onSubmitFn={() => console.log('onSubmitMarketplaces')}
				/>
				<div className={s.container12}>
					<LocationBlueButton text={t('Near the current location')} />
				</div>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<IconSliderFilter />
			</div>
			{uniqueOfferForYou && (
				<div className={`${s.container32} ${s.padding}`}>
					<UniqueOffersForYou data={uniqueOfferForYou} />
				</div>
			)}
			{productsList && (
				<>
					<div className={`${s.container32} ${s.padding}`}>
						<CardsSliderRecommend
							title={t('Exclusive discounts')}
							data={productsList}
							isProduct
							isShowMore
							maxWidth={150}
						/>
					</div>
					<div className={`${s.container32} ${s.padding}`}>
						<CardsSliderRecommend
							title={t('Recommendation for you')}
							data={productsList}
							isProduct
							isShowMore
							maxWidth={150}
						/>
					</div>
					<div className={`${s.container32} ${s.padding}`}>
						<CardsSliderRecommend
							title={t('Best partnership offers')}
							data={productsList}
							isProduct
							isShowMore
							maxWidth={150}
						/>
					</div>
					<div className={`${s.container32} ${s.padding}`}>
						<CardsSliderRecommend
							isProduct
							title={t('Also order with this')}
							data={productsList}
							isShowMore
							maxWidth={150}
						/>
					</div>
				</>
			)}
		</>
	);
};

export default Marketplaces;
