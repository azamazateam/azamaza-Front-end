import React, {useState} from 'react';
import s from '../../SearchForm.module.css';
import {BsGeoAlt} from 'react-icons/bs';
import ResetButton from '../ResetButton.tsx';
import SearchLocationPopup from '../../popups/SearchLocationPopup/SearchLocationPopup.tsx';
import {useTranslation} from 'react-i18next';
import Modal from '../../../../Modal/Modal.tsx';
import {useFormikContext} from 'formik';

type Props = {
	fieldName: string;
	border?: string;
};
const SearchLocationField: React.FC<Props> = ({fieldName, border}) => {
	const {t} = useTranslation();
	const {values} = useFormikContext<any>();

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
				style={{border: border ?? ''}}
				onClick={handleClick}
				role={'button'}
				tabIndex={0}
			>
				<div>
					<BsGeoAlt size={18} />
				</div>
				<div className={s.calendarValue}>
					{values[fieldName]
						? values[fieldName]
						: t('Destination, city, address')}
				</div>
				<ResetButton fieldName={'location'} />
			</div>
			<Modal fullScreen isOpen={isOpenPopup} onClose={closeModal}>
				<SearchLocationPopup closeModal={closeModal} fieldName={fieldName} />
			</Modal>
		</div>
	);
};

export default SearchLocationField;
