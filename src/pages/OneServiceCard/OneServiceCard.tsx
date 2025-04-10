import React, {useEffect, useState} from 'react';
import s from './OneServiceCard.module.css';
import {useParams} from 'react-router-dom';
import {
	mostPopularServicesData,
	MostPopularServicesType,
} from '../Home/components/MostPopularServices/mostPopularServicesData.ts';
import Header from '../../components/Header/Header.tsx';
import Main from '../../components/Main/Main.tsx';
import FooterSmallGrey from '../../components/Footers/FooterSmallGrey.tsx';
import OneServiceCardHead from './components/OneServiceCardHead/OneServiceCardHead.tsx';
import {useTranslation} from 'react-i18next';
import Gallery from '../../components/Gallery/Gallery.tsx';

const OneServiceCard: React.FC = () => {
	const {id} = useParams();
	const {t} = useTranslation();
	const [service, setService] = useState<MostPopularServicesType | null>(null);
	useEffect(() => {
		if (id) {
			const foundedService = mostPopularServicesData.find(
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
						<div className={s.ratingPanel}>
							<div className={s.ratingContainer}>
								<div className={s.ratingNumber}>{service.rating}</div>
								<div className={s.ratingText}>{t('Excellent rating')}</div>
							</div>
							<div className={s.views}>
								{service.views + ' '}
								{t('reviews')}
							</div>
						</div>
					</div>
					<div className={s.galleryContainer}>
						<Gallery images={service.image} />
					</div>
				</Main>
				<FooterSmallGrey />
			</>
		);
	} else return null;
};

export default OneServiceCard;
