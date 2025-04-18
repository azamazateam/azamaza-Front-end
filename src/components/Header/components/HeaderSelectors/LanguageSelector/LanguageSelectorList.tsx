import React from 'react';
import s from '../Selectors.module.css';
import CountryFlagsIcons from '../../../../../assets/common/CountryFlagsIcons.tsx';
import {BsCheckLg} from 'react-icons/bs';
import {useTranslation} from 'react-i18next';

type Props = {
	list: {flag: string; name: string}[];
	handleChangeLanguage: (lang: string) => void;
};
const LanguageSelectorList: React.FC<Props> = ({
	list,
	handleChangeLanguage,
}) => {
	const {i18n} = useTranslation();
	return (
		<ul className={s.listContainer}>
			{list.map((flag, i: number) => {
				const checked = i18n.language === flag.flag;
				return (
					<li
						className={`${s.listElement} ${checked ? s.active : ''}`}
						key={i + flag.name}
						role={'button'}
						onClick={() => {
							!checked && handleChangeLanguage(flag.flag);
						}}
					>
						<div className={s.flag}>
							<CountryFlagsIcons id={flag.flag} />
						</div>
						<div className={s.name}>{flag.name}</div>
						{checked && (
							<div className={s.checked}>
								<BsCheckLg color={'#13B652'} size={24} />
							</div>
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default LanguageSelectorList;
