import React, {useEffect, useState} from 'react';
import s from './OneServiceCard.module.css';
import {useParams} from 'react-router-dom';
import Header from '../../components/Header/Header.tsx';
import Main from '../../components/Main/Main.tsx';
import FooterSmallGrey from '../../components/Footers/FooterSmallGrey.tsx';
import OneServiceCardHead from './components/OneServiceCardHead/OneServiceCardHead.tsx';
import {useTranslation} from 'react-i18next';
import Gallery from '../../components/Gallery/Gallery.tsx';
import ServiceOptions from './components/ServiceOptions/ServiceOptions.tsx';
import CardsSliderRecommend from '../../components/Sliders/CardsSliderRecomend/CardsSliderRecommend.tsx';
import Reviews from './components/Rewiews/Rewiews.tsx';
import ExcellentRating from './components/Rewiews/components/ExcellentRating.tsx';
import WhatGuestsLike from './components/WhatGuestsLike/WhatGuestsLike.tsx';
import PlaceOrder from '../../components/PlaceOrder/PlaceOrder.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store.ts';
import {ServicesType} from '../../redux/types/commonTypes.ts';
import {servicesListData} from '../../mocks/ServicesListData.ts';

const OneServiceCard: React.FC = () => {
	const {id} = useParams();
	const {t} = useTranslation();
	const [service, setService] = useState<ServicesType | null>(null);
	const mostPopularServices = useSelector(
		(state: RootState) => state.homePage.mostPopularService,
	);

	useEffect(() => {
		if (id) {
			const foundedService = servicesListData?.find(
				(service) => service.id === +id,
			);
			setService(foundedService ?? null);
		}
	}, [id]);
	if (service) {
		return (
			<>
				<Header />
				<Main>
					<div className={s.container}>
						<OneServiceCardHead
							title={service.name}
							description={service.description}
						/>
					</div>
					<div className={`${s.onMapButton} ${s.container}`}>
						<button>{t('Show on map')}</button>
					</div>
					<div className={s.container}>
						<ExcellentRating service={service} />
					</div>
					<div className={s.galleryContainer}>
						<Gallery images={service.image} />
					</div>
					<div className={s.container32}>
						{service.serviceOptions && (
							<ServiceOptions serviceOptions={service.serviceOptions} />
						)}
					</div>
					<div className={s.container32}>
						<Reviews service={service} />
					</div>
					<div className={s.container32}>
						<WhatGuestsLike />
					</div>
					<PlaceOrder />
					<div className={`${s.container32}`}>
						<CardsSliderRecommend
							title={t('Also order with this')}
							isShowMore
							data={mostPopularServices}
						/>
					</div>
					<div className={`${s.container32}`}>
						<CardsSliderRecommend
							title={t('Similar options')}
							isShowMore
							data={mostPopularServices}
						/>
					</div>
				</Main>
				<FooterSmallGrey />
			</>
		);
	} else return null;
};

export default OneServiceCard;
