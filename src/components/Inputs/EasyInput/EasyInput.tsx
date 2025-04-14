import React from 'react';
import s from './EasyInput.module.css';

type Props = {
	placeholder: string;
	callback?: (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.KeyboardEvent<HTMLInputElement>,
	) => void;
};
const EasyInput: React.FC<Props> = ({placeholder, callback}) => {
	/*const {values} = useFormikContext<any>();
	const value = values[fieldName];*/

	return (
		<div className={s.inputContainer}>
			<input
				onKeyDown={callback}
				onChange={callback}
				type="text"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default EasyInput;
