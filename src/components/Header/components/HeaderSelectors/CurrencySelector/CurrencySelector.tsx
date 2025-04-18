import React, {useState} from 'react';
import {BsCashStack} from 'react-icons/bs';
import s from '../Selectors.module.css';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/store.ts';
import Modal from '../../../../Modal/Modal.tsx';
import CurrencySelectorPopup from './CurrencySelectorPopup.tsx';

const CurrencySelector: React.FC = () => {
	const [openSelector, setOpenSelector] = useState<boolean>(false);
	const handleClose = () => {
		setOpenSelector(false);
	};
	const handleOpen = () => {
		setOpenSelector(true);
	};
	const currency = useSelector((state: RootState) => state.user.currency);
	return (
		<>
			<button type={'button'} className={s.container} onClick={handleOpen}>
				<div className={s.flag}>
					<BsCashStack size={24} />
				</div>
				<div className={s.languageName}>{currency}</div>
			</button>
			<Modal onClose={handleClose} isOpen={openSelector}>
				<CurrencySelectorPopup closeFn={handleClose} />
			</Modal>
		</>
	);
};

export default CurrencySelector;
