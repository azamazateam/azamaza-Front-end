import React from 'react';
import s from '../Footer.module.css';
import {useTranslation} from 'react-i18next';
import SocialNetworkIcon from '../../../assets/common/SocialNetworkIcon.tsx';

const BottomSectionMain: React.FC = () => {
	const {t} = useTranslation();
	const date = new Date();
	const year = date.getFullYear();
	return (
		<section className={s.sectionInfo}>
			<div className={s.infoContainer}>
				<div className={s.copyright}>
					<SocialNetworkIcon id={'copyright'} />{' '}
					<div
						className={s.text}
					>{`${year} Azamaza.com. ${t('All right reserved')}`}</div>
				</div>
				<ul className={s.rowNoJustify}>
					<li className={s.column}>
						<a href="#" target="_blank" rel="noopener noreferrer">
							{t('Privacy')} Azamaza.com
						</a>
					</li>
					<li className={s.column}>
						<a href="#" target="_blank" rel="noopener noreferrer">
							{t('Terms')}
						</a>
					</li>
					<li className={s.column}>
						<a href="#" target="_blank" rel="noopener noreferrer">
							{t('Cookies')}
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default BottomSectionMain;
