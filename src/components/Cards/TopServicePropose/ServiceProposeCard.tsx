import React from 'react';
import s from './ServiceProposeCard.module.css';
import {ServiceProposeData} from '../../../pages/Services/components/ServicePropose/serviceProposeData.ts';
import ButtonYellow from '../../Buttons/ButtonYellow/ButtonYellow.tsx';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
type Props = {
	card: ServiceProposeData;
};
const ServiceProposeCard: React.FC<Props> = ({card}) => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<div className={s.containerInfo}>
				<div className={s.title}>{card.title}</div>
				<div className={s.price}>{card.price}</div>
				<div className={s.button}>
					<Link to={`${card.link}`}>
						<ButtonYellow type={'button'} text={t('Order now')} />
					</Link>
				</div>
			</div>
			<div className={s.containerImage}>
				<div
					className={s.image}
					style={{backgroundImage: `url(${card.image})`}}
				>
					{/*<img src={card.image} alt={card.title} />*/}
				</div>
				<div className={s.discount}>{card.discount}</div>
			</div>
		</div>
	);
};

export default ServiceProposeCard;
