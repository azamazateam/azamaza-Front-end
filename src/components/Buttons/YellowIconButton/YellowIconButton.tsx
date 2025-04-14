import React from 'react';
import s from './YellowIconButton.module.css';
type Props = {
	text: string;
	callback?: () => void;
	type: 'button' | 'submit' | 'reset';
	icon: React.ReactNode;
	disabled?: boolean;
};
const YellowIconButton: React.FC<Props> = ({
	text,
	type,
	callback,
	disabled,
	icon,
}) => {
	return (
		<button
			className={s.button}
			onClick={callback}
			disabled={disabled}
			type={type}
		>
			<div className={s.icon}>{icon}</div>
			<div className={s.text}>{text}</div>
		</button>
	);
};

export default YellowIconButton;
