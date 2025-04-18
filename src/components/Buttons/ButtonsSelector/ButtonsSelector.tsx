import React, {useState} from 'react';
import s from './ButtonsSelector.module.css';
import ButtonBlueText from '../ButtonBlue/ButtonBlueText.tsx';
import {useTranslation} from 'react-i18next';

const ButtonsSelector: React.FC = () => {
	const {t} = useTranslation();
	const [active, setActive] = useState<boolean>(true);

	const handleClick = () => {
		setActive(!active);
	};
	return (
		<div className={s.container}>
			<div className={s.buttonContainer}>
				<ButtonBlueText
					text={t('Month billing')}
					type={'button'}
					active={active}
					callback={handleClick}
				/>
			</div>
			<div className={s.buttonContainer}>
				<ButtonBlueText
					text={t('Yearly billing')}
					type={'button'}
					active={!active}
					callback={handleClick}
				/>
			</div>
		</div>
	);
};

export default ButtonsSelector;
