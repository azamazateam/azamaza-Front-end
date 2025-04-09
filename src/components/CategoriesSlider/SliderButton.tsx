import React from 'react';
import s from './CategoriesSlider.module.css';
import {useTranslation} from 'react-i18next';
import CategoriesIcons, {CategoriesIconsType} from './CategoriesIcons.tsx';
import {NavLink} from 'react-router-dom';

type Props = {
	name: string;
	icon: CategoriesIconsType;
	link: string;
	disabled: boolean;
};
const SliderButton: React.FC<Props> = ({name, icon, link, disabled}) => {
	const {t} = useTranslation();
	return disabled ? (
		<NavLink
			to={link}
			className={({isActive}) => `${s.slideButton} ${isActive ? s.active : ''}`}
		>
			<div className={s.icon}>
				<CategoriesIcons id={icon} />
			</div>
			<div className={s.name}>{t(name)}</div>
		</NavLink>
	) : (
		<div className={s.slideButton}>
			<div className={s.icon}>
				<CategoriesIcons id={icon} />
			</div>
			<div className={s.name}>{t(name)}</div>
		</div>
	);
};

export default SliderButton;
