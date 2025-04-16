import React from 'react';
import s from './UniqueOffersCard.module.css';
import {Link} from 'react-router-dom';
import ButtonYellow from '../../Buttons/ButtonYellow/ButtonYellow.tsx';
import {useTranslation} from 'react-i18next';
import {UniqueOffersSlideType} from '../../../redux/types/userTypes.ts';

type Props = {card: UniqueOffersSlideType};
const UniqueOffersCard: React.FC<Props> = ({card}) => {
	const {t} = useTranslation();
	return (
		<div style={{backgroundImage: `url(${card.image})`}} className={s.slideImg}>
			<div className={s.cardTitle}>{card.title}</div>
			<div className={s.cardPropose}>{card.propose}</div>
			<div className={s.cardButton}>
				<Link to={card.link}>
					<ButtonYellow type={'button'} text={t('Book now')} />
				</Link>
			</div>
		</div>
	);
};

export default UniqueOffersCard;
