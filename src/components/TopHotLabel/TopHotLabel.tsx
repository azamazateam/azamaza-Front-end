import React from 'react';
import s from './TopHotLabel.module.css';
import {BsFire} from 'react-icons/bs';

type Props = {
	active: boolean;
};
const TopHotLabel: React.FC<Props> = ({active}) => {
	if (active) {
		return (
			<button className={s.container}>
				<div className={s.icon}>
					<BsFire color={'#FFF'} size={15} />
				</div>
				<div className={s.top}>Top</div>
			</button>
		);
	} else {
		return null;
	}
};

export default TopHotLabel;
