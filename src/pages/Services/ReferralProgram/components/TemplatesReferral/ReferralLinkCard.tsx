import React from 'react';
import {ReferralDataType} from './referralData.ts';
import s from './TemplatesReferral.module.css';
import Button from '../../../../../components/Buttons/Button/Button.tsx';
type Props = {
	card: ReferralDataType;
	position: 'center' | 'left' | 'right';
};
const ReferralLinkCard: React.FC<Props> = ({card, position}) => {
	return (
		<div
			className={`${s.cardContainer} ${s[position]}`}
			style={{
				backgroundImage: `url(${card.background})`,
			}}
		>
			<div className={`${s.contentContainer} ${s[position]}`}>
				<div className={s.titleContainer}>{card.title}</div>
				{card.description && (
					<div className={s.description}>{card.description}</div>
				)}
				<div className={`${s.inputContainer} ${s[position]}`}>
					<input value={card.link} />
					<Button type={'button'} text={'Copy'} color={'blue'} />
				</div>
				<div className={`${s.buttonContainer} ${s[position]}`}>
					<Button type={'button'} text={'Go to Azamaza'} color={'yellow'} />
				</div>
			</div>
		</div>
	);
};

export default ReferralLinkCard;
