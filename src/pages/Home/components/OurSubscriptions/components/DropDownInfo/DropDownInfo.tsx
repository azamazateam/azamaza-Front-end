import React from 'react';
import s from './DropDownInfo.module.css';
import Button from '../../../../../../components/Buttons/ButtonYellow/Button.tsx';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {dropDownInfoData} from './dropDownInfoData.tsx';
import {motion} from 'framer-motion';
import {CardType} from '../../../../../../redux/types/homePageTypes.ts';
type Props = {
	type: CardType;
};
const DropDownInfo: React.FC<Props> = ({type}) => {
	const {t} = useTranslation();
	const getFilteredData = (subscriptionType: 'Basic' | 'Premium' | 'Elite') => {
		const levels = {
			Basic: ['Basic'],
			Premium: ['Basic', 'Premium'],
			Elite: ['Basic', 'Premium', 'Elite'],
		};

		return dropDownInfoData.filter((item) =>
			levels[subscriptionType].includes(item.type),
		);
	};
	const filteredData = getFilteredData(type);
	return (
		<motion.div
			initial={{opacity: 0, scale: 0.8}}
			animate={{opacity: 1, scale: 1}}
			exit={{opacity: 0, scale: 0.8}}
			transition={{duration: 0.4, ease: 'easeOut'}}
		>
			<div className={s.container}>
				<Link to={'/subscribe'} className={s.buttonContainer}>
					<Button type={'button'} text={t('Subscribe')} />
				</Link>
				<ul className={s.infoList}>
					{filteredData.map((item, index) => (
						<li className={s.listElement} key={index + item.description}>
							<div className={s.listElementIcon}>{item.icon}</div>
							<div className={s.listElementDescription}>{item.description}</div>
						</li>
					))}
				</ul>
				<div className={s.infoText}>
					<div className={s.infoTextTitle}>{t("Who's good for it:")}</div>
					<div className={s.infoTextDescription}>
						{t(
							'For users who appreciate exclusivity, high level of service and plan to use it actively. For those who always want to be the first and get maximum benefits and advantages!',
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default DropDownInfo;
