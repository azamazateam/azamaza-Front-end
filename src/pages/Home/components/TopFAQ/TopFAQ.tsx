import React from 'react';
import s from './TopFAQ.module.css';
import {useTranslation} from 'react-i18next';
import BlockHeader from '../BlockHeader/BlockHeader.tsx';
import MyAccordion from '../../../../components/MyAccordion/MyAccordion.tsx';
import {topFAQdata} from './topFAQdata.ts';

const TopFAQ: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<BlockHeader
				title={t('Top FAQ')}
				description={t(
					'Check out our popular answers to questions asked by users',
				)}
			/>
			<div className={s.accordionContainer}>
				<MyAccordion data={topFAQdata} />
			</div>
		</div>
	);
};

export default TopFAQ;
