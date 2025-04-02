import React, {useState} from 'react';
import s from './ButtonsSelector.module.css';
import ButtonBlue from '../ButtonBlue/ButtonBlue.tsx';
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
				<ButtonBlue
					text={t('Month billing')}
					type={'button'}
					active={active}
					callback={handleClick}
				/>
			</div>
			<div className={s.buttonContainer}>
				<ButtonBlue
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
