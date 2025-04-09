import React from 'react';
import ServiceHead from '../components/ServiceHead/ServiceHead.tsx';
import s from '../Service.module.css';
import {useTranslation} from 'react-i18next';
import CategoriesSlider from '../../../components/CategoriesSlider/CategoriesSlider.tsx';
import excursions from '../../../assets/images/serviceBackgrounds/excursion.png';
import ServicePropose from '../components/ServicePropose/ServicePropose.tsx';
import LabelsCarousel from '../../../components/LabelsCarousel/LabelsCarousel.tsx';
import UniqueOffersForYou from '../../Home/components/UniqueOffersForYou/UniqueOffersForYou.tsx';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import SearchForm from '../../../components/Forms/SearchForm/SearchForm.tsx';

const Excursion: React.FC = () => {
	const {t} = useTranslation();
	return (
		<>
			<ServiceHead
				size={342}
				title={t('History, adventure, and discounts - together!')}
				background={excursions}
			/>
			<div className={s.container24}>
				<CategoriesSlider />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<ServicePropose />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<SearchForm
					showLocation
					showDate
					approximateTime
					numberOfPeople
					onSubmitFn={() => console.log('onSubmitExcursion')}
				/>
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<LabelsCarousel title={t('Choose the best!')} />
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<UniqueOffersForYou />
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend title={t('Also order with this')} />
			</div>
			<div className={`${s.container32} ${s.padding}`}>
				<CardsSliderRecommend title={t('Similar options')} />
			</div>
		</>
	);
};

export default Excursion;
