import React from 'react';
import s from './SearchLocationPopup.module.css';
import CloseCross from '../../../../CloseCross/CloseCross.tsx';

type Props = {
	closeModal: () => void;
	title: string;
};
const PopupHeadLeft: React.FC<Props> = ({closeModal, title}) => {
	return (
		<div className={s.headPanel}>
			<div className={s.title}>{title}</div>
			<div className={s.close}>
				<CloseCross closeFn={closeModal} size={32} />
			</div>
		</div>
	);
};

export default PopupHeadLeft;
