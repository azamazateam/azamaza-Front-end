import React from 'react';
import s from './LocationBlueButton.module.css';
import {BsCursor} from 'react-icons/bs';
type Props = {
	text: string;
	callback?: () => void;
};
const LocationBlueButton: React.FC<Props> = ({callback, text}) => {
	return (
		<button className={s.button} type="button" onClick={callback}>
			<div>
				<BsCursor size={20} />
			</div>
			<div>{text}</div>
		</button>
	);
};

export default LocationBlueButton;
