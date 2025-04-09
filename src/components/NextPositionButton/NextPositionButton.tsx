import React from 'react';
import s from './NextPositionButton.module.css';
import {BsCursor} from 'react-icons/bs';
import {useTranslation} from 'react-i18next';
type Props = {
	callback: () => void;
};
const NextPositionButton: React.FC<Props> = ({callback}) => {
	const {t} = useTranslation();
	return (
		<button className={s.button} type="button" onClick={callback}>
			<div>
				<BsCursor size={20} />
			</div>
			<div>{t('Offer next to current position')}</div>
		</button>
	);
};

export default NextPositionButton;
