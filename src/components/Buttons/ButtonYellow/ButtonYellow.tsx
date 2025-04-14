import React from 'react';
import s from './ButtonYellow.module.css';
type Props = {
	text: string;
	callback?: () => void;
	type: 'button' | 'submit' | 'reset';
	disabled?: boolean;
};
const ButtonYellow: React.FC<Props> = ({text, type, callback, disabled}) => {
	return (
		<button
			disabled={disabled}
			onClick={callback && callback}
			type={type}
			className={s.button}
		>
			{text}
		</button>
	);
};

export default ButtonYellow;
