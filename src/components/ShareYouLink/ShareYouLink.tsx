import React from 'react';
import BlockHeader from '../../pages/Home/components/BlockHeader/BlockHeader.tsx';
import {useTranslation} from 'react-i18next';
import PersonalInfoPanel from './components/PersonalInfoPanel.tsx';
import s from './ShareYouLink.module.css';
import LinkCopier from './components/LinkCopier.tsx';
const ShareYouLink: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<div>
				<BlockHeader
					title={t('Share your link')}
					description={t(
						'Send your invitation to friends, colleagues, share it on social media and get a cash reward',
					)}
				/>
			</div>
			<div>
				<PersonalInfoPanel />
			</div>
			<div>
				<LinkCopier />
			</div>
		</div>
	);
};

export default ShareYouLink;
