import React from 'react';
import s from './TopFAQ.module.css';
import {useTranslation} from 'react-i18next';

import MyAccordion from '../../../../components/MyAccordion/MyAccordion.tsx';
import {topFAQdata} from './topFAQdata.ts';

const TopFAQ: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<div className={s.centered}>
				<div>
					<div className={s.title}>{t('Top FAQ')}</div>
					<div className={s.description}>
						{t('Check out our popular answers to questions asked by users')}
					</div>
				</div>
			</div>
			<div className={s.accordionContainer}>
				<MyAccordion data={topFAQdata} />
			</div>
		</div>
	);
};

export default TopFAQ;
