import React from 'react';
import s from './FilterOfferCard.module.css';
import ButtonBlueText from '../../Buttons/ButtonBlue/ButtonBlueText.tsx';
import {useTranslation} from 'react-i18next';
import {AzamazaSelection} from '../../../redux/slices/azamazaSelectionsSlice.ts';
import CardLocation from '../commonCardComponents/CardLocation.tsx';

type Props = {
	data: AzamazaSelection;
};
const FilterOfferCard: React.FC<Props> = ({data}) => {
	const {t} = useTranslation();
	const {image, title} = data;
	return (
		<div className={s.container}>
			<div className={s.imageContainer}>
				<img src={image} alt={title} />
			</div>
			<div className={s.title}>{data.title}</div>
			<div className={s.description}>{data.description}</div>
			{data.location && (
				<div className={s.locationContainer}>
					<CardLocation location={data.location} size={18} />
				</div>
			)}
			{data.actionOffers && (
				<div className={s.actionOffersContainer}>
					<div className={s.actionOffers}>
						{data.actionOffers} {t('auction offers especially for you')}
					</div>
				</div>
			)}
			{data.price && (
				<div className={s.priceContainer}>
					<div
						className={s.price}
					>{`${t('From')} €${data.price} ${t('per night')}`}</div>
				</div>
			)}
			<div className={s.buttonContainer}>
				<ButtonBlueText text={t('See offers')} type={'button'} active />
			</div>
		</div>
	);
};

export default FilterOfferCard;
