import React, {useState} from 'react';
import s from '../Selectors.module.css';
import {useTranslation} from 'react-i18next';
import CountryFlagsIcons from '../../../../../assets/common/CountryFlagsIcons.tsx';
import Modal from '../../../../Modal/Modal.tsx';
import LanguageSelectPopup from './LanguageSelectPopup.tsx';

const LanguageSelector: React.FC = () => {
	const {i18n} = useTranslation();
	const [openSelector, setOpenSelector] = useState<boolean>(false);
	const handleClose = () => {
		setOpenSelector(false);
	};
	const handleOpen = () => {
		setOpenSelector(true);
	};
	return (
		<>
			<button type={'button'} className={s.container} onClick={handleOpen}>
				<div className={s.flag}>
					<CountryFlagsIcons id={i18n.language} />
				</div>
				<div className={s.languageName}>{i18n.language}</div>
			</button>
			<Modal onClose={handleClose} isOpen={openSelector}>
				<LanguageSelectPopup closePopup={handleClose} />
			</Modal>
		</>
	);
};

export default LanguageSelector;
