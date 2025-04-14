import React from 'react';
import s from './HowItWorks.module.css';
import BlockHeader from '../BlockHeader/BlockHeader.tsx';
import {useTranslation} from 'react-i18next';
import HowItWorksCard from './components/HowItWorksCard.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store.ts';
import {HowItWorksDataType} from '../../../../redux/types/homePageTypes.ts';

const HowItWorks: React.FC = () => {
	const {t} = useTranslation();
	const howItWorks = useSelector(
		(state: RootState) => state.homePage.howItWorks,
	);
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
					{howItWorks.map((howItWork: HowItWorksDataType, index: number) => (
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
