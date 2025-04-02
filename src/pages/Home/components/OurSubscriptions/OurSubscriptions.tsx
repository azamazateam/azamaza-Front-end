import React from 'react';
import s from './OurSubscriptions.module.css';
import BlockHeader from '../BlockHeader/BlockHeader.tsx';
import {useTranslation} from 'react-i18next';
import header from '../../../../assets/images/referal header.png';
import {Link} from 'react-router-dom';
import ButtonsSelector from '../../../../components/ButtonsSelector/ButtonsSelector.tsx';
import SubscriptionsCard from './components/SubscriptionsCard/SubscriptionsCard.tsx';
import {ourSubscriptionsData} from './ourSubscriptionsData.ts';
const OurSubscriptions: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div>
			<BlockHeader
				title={t('Our subscriptions')}
				description={t(
					'Travel, relax, communicate, meet, find friends, buy, rent, economize - do whatever you want with an Azamaza subscription',
				)}
			/>
			<div className={s.imageContainer}>
				<img src={header} alt="referal-header" />
			</div>
			<div className={s.limitedOferContainer}>
				<div className={s.limitedOfferHead}>
					<div className={s.limitedOfferTitle}>{t('Limited Offer')}</div>
					<div className={s.limitedOfferDescription}>
						Special price only for the <Link to={''}>first 10,000</Link>{' '}
						subscribers who will receive unique bonuses and opportunities
					</div>
				</div>
				<div className={s.offerSelector}>
					<div className={s.offerSelectorTitle}>{t('Select Plan')}</div>
					<div className={s.offerSelectorButtons}>
						<ButtonsSelector />
					</div>
				</div>
				<div className={s.cardsContainer}>
					{ourSubscriptionsData.map((item, index) => (
						<SubscriptionsCard data={item} key={index + item.type} />
					))}
				</div>
			</div>
		</div>
	);
};

export default OurSubscriptions;
