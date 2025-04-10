import React from 'react';
import s from './SearchLocationPopup.module.css';
import {useTranslation} from 'react-i18next';
import NextPositionButton from '../../../../NextPositionButton/NextPositionButton.tsx';
import ButtonYellow from '../../../../ButtonYellow/ButtonYellow.tsx';
import SearchLocationRecommendList from './SearchLocationRecommendList.tsx';
import PopupHeadLeft from './PopupHeadLeft.tsx';
import GrayInput from '../../../../GrayInput/GrayInput.tsx';
import {useFormikContext} from 'formik';
//import SearchLocationSelect from '../../../../SearchLocationSelect/SearchLocationSelect.tsx';

type Props = {
	closeModal: () => void;
	fieldName: string;
};
const SearchLocationPopup: React.FC<Props> = ({closeModal, fieldName}) => {
	const {t} = useTranslation();
	const {setFieldValue} = useFormikContext<any>();
	const handleSubmit = () => {
		closeModal();
	};
	const handleChange = (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.KeyboardEvent<HTMLInputElement>,
	) => {
		const value = event.currentTarget.value;
		if ('key' in event && event.key === 'Enter') {
			setFieldValue(fieldName, value);
			closeModal();
			return;
		}
		if (!('key' in event)) {
			setFieldValue(fieldName, value);
		}
	};
	return (
		<div className={s.container}>
			<div>
				<PopupHeadLeft
					closeModal={closeModal}
					title={t('Enter your search details')}
				/>
				<div className={s.inputContainer}>
					<div className={s.input}>
						{/*<SearchLocationSelect />*/}
						<GrayInput fieldName={fieldName} callback={handleChange} />
					</div>
					<div className={s.nextPosition}>
						<NextPositionButton callback={() => {}} />
					</div>
				</div>
				<div className={s.listTitle}>{t('Popular offers in the region')}</div>
				<SearchLocationRecommendList />
			</div>
			<div className={s.submitButton}>
				<ButtonYellow
					callback={handleSubmit}
					type={'button'}
					text={t('Apply')}
				/>
			</div>
		</div>
	);
};

export default SearchLocationPopup;
