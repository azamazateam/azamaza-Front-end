import React from 'react';
import s from './FilterOfferCard.module.css';
import {SelectionsData} from '../../../pages/Services/Restaurants/components/AzamazaSelections/SelectionsData.ts';
import ButtonBlue from '../../Buttons/ButtonBlue/ButtonBlue.tsx';
import {useTranslation} from 'react-i18next';
type Props = {
	data: SelectionsData;
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
			<div className={s.buttonContainer}>
				<ButtonBlue text={t('See offers')} type={'button'} active />
			</div>
		</div>
	);
};

export default FilterOfferCard;
