import React from 'react';
import {BsCashStack} from 'react-icons/bs';
import s from '../Selectors.module.css';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store.ts';

const CurrencySelector: React.FC = () => {
	const currency = useSelector((state: RootState) => state.user.currency);
	return (
		<button type={'button'} className={s.container}>
			<div className={s.flag}>
				<BsCashStack size={24} />
			</div>
			<div className={s.languageName}>{currency}</div>
		</button>
	);
};

export default CurrencySelector;
