import React from 'react';
import s from './VerticalCard.module.css';
import FavoriteHeart from '../../FavoriteHeart/FavoriteHeart.tsx';
import TopHotLabel from '../../TopHotLabel/TopHotLabel.tsx';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {PopularServicesType} from '../../../redux/types/homePageTypes.ts';

type Props = {
	card: PopularServicesType;
};
const VerticalCard: React.FC<Props> = ({card}) => {
	const {t} = useTranslation();
	const navigate = useNavigate();

	const handleCardClick = () => {
		navigate(`/service-card/${card.id}`);
	};
	const image = Array.isArray(card.image) ? card.image[0] : card.image;
	return (
		<div
			className={s.container}
			onClick={handleCardClick}
			role="button"
			tabIndex={0}
		>
			<div className={s.imageContainer}>
				<img src={image} alt={card.name} />
			</div>
			<div className={s.infoContainer}>
				<div>
					<div className={s.name}>
						<h5>{card.name}</h5>
					</div>
					<div className={s.categoryName}>{card.serviceName}</div>
				</div>
				<div className={s.ratingViewInfo}>
					<div className={s.rating}>{card.rating}</div>
					<div className={s.views}>{`${card.views} ${t('Review')}`}</div>
				</div>
				<div className={s.someDataAbout}></div>
				<div className={s.priceContainer}>
					<div className={s.priceOld}>{card.oldPrice} €</div>
					<div className={s.priceNew}>{card.newPrice} €</div>
				</div>
				<FavoriteHeart active={card.favorite === 1} />
				<TopHotLabel active={card.hot === 1} />
			</div>
		</div>
	);
};

export default VerticalCard;
