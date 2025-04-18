import React from 'react';
import s from '../Selectors.module.css';
import {useTranslation} from 'react-i18next';
import LanguageSelectorList from './LanguageSelectorList.tsx';
import SelectorsHead from '../SelectorsHead.tsx';

type Props = {
	closePopup: () => void;
};
const LanguageSelectPopup: React.FC<Props> = ({closePopup}) => {
	const {t, i18n} = useTranslation();

	const handleChangeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
		closePopup();
	};
	const flagsList = [
		{flag: 'uk', name: 'Українська'},
		{flag: 'en', name: 'English (UK)'},
		{flag: 'es', name: 'Español'},
		{flag: 'it', name: 'Italiano'},
		{flag: 'ru', name: 'Русский'},
		{flag: 'fr', name: 'François'},
		{flag: 'de', name: 'Deutsch'},
	];
	return (
		<div className={s.popupContainer}>
			<SelectorsHead closeFn={closePopup} title={t('Select language')} />
			<div className={s.subTitleContainer}>{t('Recommended for you')}</div>
			<LanguageSelectorList
				list={flagsList}
				handleChangeLanguage={handleChangeLanguage}
			/>
			<div className={s.subTitleContainer}>{t('All languages')}</div>
			<LanguageSelectorList
				list={flagsList}
				handleChangeLanguage={handleChangeLanguage}
			/>
		</div>
	);
};

export default LanguageSelectPopup;
