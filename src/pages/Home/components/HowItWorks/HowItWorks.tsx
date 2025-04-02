import React from 'react';
import s from './HowItWorks.module.css';
import BlockHeader from '../BlockHeader/BlockHeader.tsx';
import {useTranslation} from 'react-i18next';
import HowItWorksCard from './components/HowItWorksCard.tsx';
import {howItWorksData, HowItWorksDataType} from './howItWorksData.ts';

const HowItWorks: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<BlockHeader
				title={t('How It Works')}
				description={t(
					'We make services convenient to use with discounts and unique offers that are available only with us',
				)}
			/>
			<div className={s.cardsListContainer}>
				<ul className={s.cardsList}>
					{howItWorksData.map((howItWork: HowItWorksDataType, index) => (
						<li key={index + howItWork.description}>
							<HowItWorksCard data={howItWork} index={index} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default HowItWorks;
