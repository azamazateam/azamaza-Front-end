import React from 'react';
import s from './CategoriesSlider.module.css';
import {useTranslation} from 'react-i18next';
import CategoriesIcons, {CategoriesIconsType} from './CategoriesIcons.tsx';
import {NavLink} from 'react-router-dom';

type Props = {
	name: string;
	icon: CategoriesIconsType;
	link: string;
};
const SliderButton: React.FC<Props> = ({name, icon, link}) => {
	const {t} = useTranslation();
	return (
		<NavLink to={link} className={`${s.slideButton}`}>
			<div className={s.icon}>
				<CategoriesIcons id={icon} />
			</div>
			<div className={s.name}>{t(name)}</div>
		</NavLink>
	);
};

export default SliderButton;
