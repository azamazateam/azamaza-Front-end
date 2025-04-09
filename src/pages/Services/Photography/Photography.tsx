import React from 'react';
import CategoriesSlider from '../../../components/CategoriesSlider/CategoriesSlider.tsx';
import ServiceHead from '../components/ServiceHead/ServiceHead.tsx';
import {useTranslation} from 'react-i18next';
import background from '../../../assets/images/serviceBackgrounds/photography.png';
import s from '../Service.module.css';
import ServicePropose from '../components/ServicePropose/ServicePropose.tsx';
import LabelsCarousel from '../../../components/LabelsCarousel/LabelsCarousel.tsx';
import UniqueOffersForYou from '../../Home/components/UniqueOffersForYou/UniqueOffersForYou.tsx';
import CardsSliderRecommend from '../../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import SearchForm from '../../../components/Forms/SearchForm/SearchForm.tsx';
const Photography: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div>
			<ServiceHead
				size={342}
				title={t('Professional photo and video shooting')}
				background={background}
			/>
			<div className={s.container24}>
				<CategoriesSlider />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<ServicePropose />
			</div>
			<div className={`${s.container24} ${s.padding}`}>
				<SearchForm
					showDate
					approximateTime
					showLocation
					onSubmitFn={() => console.log('onSubmitPhotography')}
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
		</div>
	);
};

export default Photography;
