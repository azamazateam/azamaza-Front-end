import React, {useEffect} from 'react';
import s from '../Selectors.module.css';
import SelectorsHead from '../SelectorsHead.tsx';
import {useTranslation} from 'react-i18next';
import {BsCheckLg} from 'react-icons/bs';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/store.ts';
import {currencyData} from '../../../../../mocks/HomePageData.ts';
import {
	setCurrency,
	setCurrencyList,
} from '../../../../../redux/slices/userSlice.ts';
type Props = {
	closeFn: () => void;
};
const CurrencySelectorPopup: React.FC<Props> = ({closeFn}) => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const currency = useSelector((state: RootState) => state.user.currency);
	const currencyList = useSelector(
		(state: RootState) => state.user.currencyList,
	);
	const handleChangeCurrency = (name: string) => {
		dispatch(setCurrency(name));
		closeFn();
	};
	const iconMap: Record<string, string> = {
		usd: String.fromCodePoint(0x0024), // $
		eur: String.fromCodePoint(0x20ac), // €
		grn: String.fromCodePoint(0x20b4), // ₴
		rub: String.fromCodePoint(0x20bd), // ₽
		yen: String.fromCodePoint(0x00a5), // ¥
		pound: String.fromCodePoint(0x00a3), // £
		inr: String.fromCodePoint(0x20b9), // ₹
		krw: String.fromCodePoint(0x20a9), // ₩
		btc: String.fromCodePoint(0x20bf), // ₿
	};

	useEffect(() => {
		dispatch(setCurrencyList(currencyData));
	}, [dispatch]);
	return (
		<div className={s.currencyPopupContainer}>
			<SelectorsHead title={t('Select currency')} closeFn={closeFn} />
			<div className={s.currencyDescription}>
				{t(
					'Where necessary, prices will be converted and displayed in the currency of your choice. The currency you pay in depends on your booking. In addition, a service fee may apply',
				)}
			</div>
			<ul className={s.currencyList}>
				{currencyList?.map((cur) => {
					const checked = cur.name.toLowerCase() === currency?.toLowerCase();
					return (
						<li
							className={`${s.currencyItem} ${checked ? s.active : ''}`}
							key={cur.id}
							role={'button'}
							onClick={() => handleChangeCurrency(cur.name)}
						>
							<div className={s.nameContainer}>
								<div className={s.currencyIcon}>{iconMap[cur.icon]}</div>
								<div className={s.currencyName}>{cur.name}</div>
								<div className={s.description}>{cur.description}</div>
							</div>
							{checked && (
								<div className={s.checkContainer}>
									<BsCheckLg size={24} color={'#13B652'} />
								</div>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CurrencySelectorPopup;
