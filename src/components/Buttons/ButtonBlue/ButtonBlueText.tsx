import React from 'react';
import s from './ButtonBlue.module.css';
type Props = {
	text: string;
	callback?: () => void;
	type: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	active?: boolean;
};
const ButtonBlueText: React.FC<Props> = ({
	text,
	type,
	callback,
	disabled,
	active,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={callback && callback}
			type={type}
			className={`${s.button} ${!active ? s.active : ''}`}
		>
			{text}
		</button>
	);
};

export default ButtonBlueText;
