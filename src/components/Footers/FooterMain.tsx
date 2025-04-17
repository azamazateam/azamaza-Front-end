import React from 'react';
import s from './Footer.module.css';
import {useTranslation} from 'react-i18next';
import SocialNetworkIcon from '../../assets/common/SocialNetworkIcon.tsx';
import BottomSectionMain from './components/BottomSectionMain.tsx';
import DomainTitle from './components/DomainTitle.tsx';
import FeedbackForm from '../Forms/FeedbackForm/FidbackForm.tsx';
import SectionsOfTheWebsite from './components/SectionsOfTheWebsite.tsx';

const FooterMain: React.FC = () => {
	const {t} = useTranslation();
	const socialNetworkIcons = [
		'instagram',
		'telegram',
		'viber',
		'facebook',
		'tiktok',
	];

	const renderMenuItem = (id: string, path?: string) => (
		<li className={s.socialIcon} key={id}>
			<a href={path ?? '#'} target="_blank" rel="noopener noreferrer">
				<SocialNetworkIcon id={id} />
			</a>
		</li>
	);

	return (
		<footer>
			<section className={s.section}>
				<DomainTitle />
				<FeedbackForm />
				<SectionsOfTheWebsite />
				<div className={s.containerTitleSections}>
					<h3>{t('More information about the project')}</h3>
				</div>
				<div className={s.socialIconContainer}>
					<ul className={s.socialIconsList}>
						{socialNetworkIcons.map((icon) => renderMenuItem(icon))}
					</ul>
				</div>
				<BottomSectionMain />
			</section>
		</footer>
	);
};

export default FooterMain;
