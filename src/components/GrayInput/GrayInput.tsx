import React from 'react';
import s from './GrayInput.module.css';
import {BsSearch} from 'react-icons/bs';
import {useTranslation} from 'react-i18next';

const GrayInput: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.inputContainer}>
			<BsSearch size={20} color={'#64666B'} />
			<input type="text" placeholder={t('Destination, city, address')} />
		</div>
	);
};

export default GrayInput;
