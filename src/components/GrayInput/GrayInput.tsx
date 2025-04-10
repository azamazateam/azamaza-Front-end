import React from 'react';
import s from './GrayInput.module.css';
import {BsSearch} from 'react-icons/bs';
import {useTranslation} from 'react-i18next';
import {useFormikContext} from 'formik';
type Props = {
	fieldName: string;
	callback: (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.KeyboardEvent<HTMLInputElement>,
	) => void;
};
const GrayInput: React.FC<Props> = ({fieldName, callback}) => {
	const {t} = useTranslation();
	const {values} = useFormikContext<any>();
	const value = values[fieldName];

	return (
		<div className={s.inputContainer}>
			<BsSearch size={20} color={'#64666B'} />
			<input
				onKeyDown={callback}
				onChange={callback}
				value={value}
				type="text"
				placeholder={t('Destination, city, address')}
			/>
		</div>
	);
};

export default GrayInput;
