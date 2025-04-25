import React from 'react';
import s from './ViewSelector.module.css';
import {useTranslation} from 'react-i18next';
import ButtonBlueText from '../../../../components/Buttons/ButtonBlue/ButtonBlueText.tsx';
const ViewSelector: React.FC = () => {
	const {t} = useTranslation();

	return (
		<div className={s.container}>
			<ButtonBlueText
				type={'button'}
				text={t('About the product')}
				active={true}
			/>
			<ButtonBlueText type={'button'} text={t('Features')} />
			<ButtonBlueText type={'button'} text={t('Reviews')} />
		</div>
	);
};

export default ViewSelector;
