import React from 'react';
import s from '../HowItWorks.module.css';
import {HowItWorksDataType} from '../../../../../redux/types/homePageTypes.ts';

type Props = {
	data: HowItWorksDataType;
	index: number;
};

const HowItWorksCard: React.FC<Props> = ({data, index}) => {
	return (
		<div className={s.cardContainer}>
			<div className={s.infoContainer}>
				<div className={s.numberContainer}>{index + 1}</div>
				<div className={s.descriptionContainer}>{data.description}</div>
			</div>
			<div
				className={s.imageContainer}
				style={{backgroundImage: `url(${data.image})`}}
			></div>
		</div>
	);
};

export default HowItWorksCard;
