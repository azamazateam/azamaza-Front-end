import React from 'react';
import s from '../Footer.module.css';
import {useTranslation} from 'react-i18next';
type Props = {
	grey?: boolean;
};
const BottomSection: React.FC<Props> = ({grey}) => {
	const {t} = useTranslation();

	return (
		<section className={`${s.sectionInfo} ${grey ? s.grey : ''}`}>
			<div className={`${s.infoContainer} ${grey ? s.grey : ''}`}>
				<ul className={s.row}>
					<li className={s.column}>
						<a href="#" target="_blank" rel="noopener noreferrer">
							{t('About')} Azamaza.com
						</a>
					</li>
					<li className={s.column}>
						<a href="#" target="_blank" rel="noopener noreferrer">
							{t('Privacy Statement and Cookies')}
						</a>
					</li>
				</ul>
				<ul className={s.row}>
					<li className={s.column}>
						<a href="#" target="_blank" rel="noopener noreferrer">
							{t('Terms and Conditions')}
						</a>
					</li>
					<li className={s.column}>
						<a href="#" target="_blank" rel="noopener noreferrer">
							{t('How we work')}
						</a>
					</li>
					<li className={s.column}>
						<a href="#" target="_blank" rel="noopener noreferrer">
							{t('Support center')}
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default BottomSection;
