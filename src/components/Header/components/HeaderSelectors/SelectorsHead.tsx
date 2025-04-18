import React from 'react';
import s from './Selectors.module.css';
import CloseCross from '../../../Buttons/CloseCross/CloseCross.tsx';
type Props = {
	title: string;
	closeFn: () => void;
};
const SelectorsHead: React.FC<Props> = ({title, closeFn}) => {
	return (
		<div className={s.popupHead}>
			<div className={s.title}>{title}</div>
			<div className={s.closeCross}>
				<CloseCross closeFn={closeFn} size={32} />
			</div>
		</div>
	);
};

export default SelectorsHead;
