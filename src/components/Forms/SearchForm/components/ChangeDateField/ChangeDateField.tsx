import React, {useState} from 'react';
import s from '../../SearchForm.module.css';
import {BsCalendar3} from 'react-icons/bs';
import ResetButton from '../ResetButton.tsx';
import {useFormikContext} from 'formik';
import {useTranslation} from 'react-i18next';
import Modal from '../../../../Modal/Modal.tsx';
import CalendarPopup from '../../../../MyCalendar/CalendarPopup/CalendarPopup.tsx';
type Props = {
	fieldName: string;
};
const ChangeDateField: React.FC<Props> = ({fieldName}) => {
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
				onClick={handleClick}
				role={'button'}
				tabIndex={0}
			>
				<div>
					<BsCalendar3 size={18} />
				</div>
				<div className={s.calendarValue}>
					{values[fieldName] ? values[fieldName] : t('Date or period')}
				</div>
				<ResetButton fieldName={'date'} />
			</div>
			<Modal isOpen={isOpenPopup} onClose={closeModal}>
				<CalendarPopup closeModal={closeModal} fieldName={fieldName} />
			</Modal>
		</div>
	);
};

export default ChangeDateField;
