import React from 'react';
import s from '../SearchForm.module.css';
import {BsX} from 'react-icons/bs';
import {useFormikContext} from 'formik';
type Props = {
	fieldName: string;
};
const ResetButton: React.FC<Props> = ({fieldName}) => {
	const {setFieldValue, setFieldTouched} = useFormikContext();

	const reset = () => {
		setFieldValue(fieldName, '');
		setFieldTouched(fieldName, false);
	};
	return (
		<button className={s.fieldIconRight} type="button" onClick={reset}>
			<BsX size={18} />
		</button>
	);
};

export default ResetButton;
