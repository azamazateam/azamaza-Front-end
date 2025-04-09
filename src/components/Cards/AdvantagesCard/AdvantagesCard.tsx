import React from 'react';
import {AdvantagesDataType} from '../../../pages/Home/components/Advantages/advantagesData.ts';
import s from './AdvantagesCard.module.css';
type Props = {
	card: AdvantagesDataType;
};
const AdvantagesCard: React.FC<Props> = ({card}) => {
	return (
		<div
			style={{backgroundImage: `url(${card.image})`}}
			className={s.bannerContainer}
		>
			<h4 className={s.title}>{card.title ?? ''}</h4>
			<p
				className={`${s.description} ${card.title ? '' : s.noTitleDescription}`}
			>
				{card.description}
			</p>
		</div>
	);
};

export default AdvantagesCard;
