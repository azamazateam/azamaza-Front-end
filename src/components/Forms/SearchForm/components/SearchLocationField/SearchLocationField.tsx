import React, {useState} from 'react';
import s from '../../SearchForm.module.css';
import {BsGeoAlt} from 'react-icons/bs';
import ResetButton from '../ResetButton.tsx';
import SearchLocationPopup from '../../popups/SearchLocationPopup/SearchLocationPopup.tsx';
import {useTranslation} from 'react-i18next';
import Modal from '../../../../Modal/Modal.tsx';

type Props = {
	value: string;
};
const SearchLocationField: React.FC<Props> = ({value}) => {
	const {t} = useTranslation();
	const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
	const handleClick = () => {
		setIsOpenPopup(!isOpenPopup);
	};
	const closeModal = () => {
		setIsOpenPopup(false);
	};
	return (
		<div className={s.fieldContainer}>
			<div
				className={s.containerInput}
				onClick={handleClick}
				role={'button'}
				tabIndex={0}
			>
				<div>
					<BsGeoAlt size={18} />
				</div>
				<div className={s.calendarValue}>
					{value ? value : t('Destination, city, address')}
				</div>
				<ResetButton fieldName={'location'} />
			</div>
			<Modal fullScreen isOpen={isOpenPopup} onClose={closeModal}>
				<SearchLocationPopup closeModal={closeModal} />
			</Modal>
		</div>
	);
};

export default SearchLocationField;
