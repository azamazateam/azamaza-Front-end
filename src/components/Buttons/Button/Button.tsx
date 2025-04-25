import React from 'react';
import s from './ButtonYellow.module.css';
type Props = {
	text: string;
	callback?: () => void;
	type: 'button' | 'submit' | 'reset';
	color?: 'blue' | 'yellow';
	disabled?: boolean;
};
const Button: React.FC<Props> = ({
	text,
	type,
	callback,
	disabled,
	color = 'yellow',
}) => {
	return (
		<button
			disabled={disabled}
			onClick={callback && callback}
			type={type}
			className={`${s.button} ${s[color]}`}
		>
			{text}
		</button>
	);
};

export default Button;
