import React from 'react';
import s from '../Footer.module.css';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

const SectionsOfTheWebsite: React.FC = () => {
	const {t} = useTranslation();
	const listItems = [
		{text: 'Referrals program', link: '/'},
		{text: 'How it works', link: '/'},
		{text: 'Our subscriptions', link: '/'},
		{text: 'Affiliate Program', link: '/'},
		{text: 'Top FAQ', link: '#'},
	];
	const renderListItem = (id: number, text: string, link: string) => {
		return (
			<li className={s.row} key={id + text}>
				<Link to={link}>{t(text)}</Link>
			</li>
		);
	};
	return (
		<div className={s.containerSections}>
			<div className={s.containerTitleSections}>
				<h3>{t('Sections of the website')}</h3>
			</div>
			<ul className={s.sectionsItemsList}>
				{listItems.map((item, i) => renderListItem(i, item.text, item.link))}
			</ul>
		</div>
	);
};

export default SectionsOfTheWebsite;
