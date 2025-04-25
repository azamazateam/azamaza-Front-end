import React from 'react';
import BlockHeader from '../../../../Home/components/BlockHeader/BlockHeader.tsx';
import {useTranslation} from 'react-i18next';
import HowItWorkCardReferral from './components/HowItWorkCardReferral.tsx';
import YourFootsteps from './components/YourFootsteps.tsx';
import s from './HowItWorkReferral.module.css';
const HowItWorkReferral: React.FC = () => {
	const {t} = useTranslation();
	return (
		<>
			<div>
				<BlockHeader
					title={t('How does it work?')}
					description={t(
						'Check out the benefits of a referral program for you, the more the better',
					)}
				/>
			</div>
			<div className={s.container}>
				<HowItWorkCardReferral />
			</div>
			<div>
				<YourFootsteps />
			</div>
		</>
	);
};

export default HowItWorkReferral;
