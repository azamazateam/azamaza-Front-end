import React from 'react';
import BlockHeader from '../../../../Home/components/BlockHeader/BlockHeader.tsx';
import {useTranslation} from 'react-i18next';
import s from './TemplatesReferral.module.css';
import {referralData} from './referralData.ts';
import ReferralLinkCard from './ReferralLinkCard.tsx';
import Button from '../../../../../components/Buttons/Button/Button.tsx';

const TemplatesReferral: React.FC = () => {
	const {t} = useTranslation();
	return (
		<>
			<div>
				<BlockHeader
					title={t('Use the templates')}
					description={t(
						'Use templates to send invitations through your referral program',
					)}
				/>
			</div>
			<div className={s.referralCardsContainer}>
				<ul className={s.cardsList}>
					{referralData.map((r) => (
						<li key={r.id}>
							<ReferralLinkCard card={r} position={r.position} />
						</li>
					))}
				</ul>
			</div>
			<div className={s.mainButton}>
				<Button text={'Send invitation'} type={'button'} color={'yellow'} />
			</div>
		</>
	);
};

export default TemplatesReferral;
