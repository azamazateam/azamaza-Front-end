import React from 'react';
import s from '../Selectors.module.css';
import CloseCross from '../../../Buttons/CloseCross/CloseCross.tsx';
import {useTranslation} from 'react-i18next';
import LanguageSelectorList from './LanguageSelectorList.tsx';

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
			<div className={s.popupHead}>
				<div className={s.title}>{t('Select language')}</div>
				<div className={s.closeCross}>
					<CloseCross closeFn={closePopup} size={32} />
				</div>
			</div>
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
