import React, {useEffect} from 'react';
import s from '../Service.module.css';
import ServiceHead from '../components/ServiceHead/ServiceHead.tsx';
import background from '../../../assets/images/serviceBackgrounds/referralProgram.png';
import CategoriesSlider from '../../../components/CategoriesSlider/CategoriesSlider.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import {RootState} from '../../../redux/store.ts';
import {setProductCards} from '../../../redux/slices/marketplacesSlice.ts';
import {productsListData} from '../../../mocks/ProductsListData.ts';
import ShareYouLink from '../../../components/ShareYouLink/ShareYouLink.tsx';
import TemplatesReferral from './components/TemplatesReferral/TemplatesReferral.tsx';
import HowItWorkReferral from './components/HowItWorkReferral/HowItWorkReferral.tsx';
const ReferralProgram: React.FC = () => {
	const dispatch = useDispatch();
	const productsList = useSelector(
		(state: RootState) => state.marketplaces.productCards,
	);
	const {t} = useTranslation();

	useEffect(() => {
		dispatch(setProductCards(productsListData));
	}, [dispatch]);
	return (
		<>
			<ServiceHead
				size={342}
				title={t('Invite, create groups! Get money')}
				background={background}
			/>
			<div className={s.container24}>
				<CategoriesSlider />
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<ShareYouLink />
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<TemplatesReferral />
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<HowItWorkReferral />
			</div>
			{productsList && (
				<div className={`${s.container32} ${s.padding}`}>
					<CardsSliderRecommend
						isProduct
						title={t('Also order with this')}
						data={productsList}
						isShowMore
						maxWidth={150}
					/>
				</div>
			)}
		</>
	);
};

export default ReferralProgram;
