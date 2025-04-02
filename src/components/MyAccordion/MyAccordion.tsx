import * as Accordion from '@radix-ui/react-accordion';
import {BsCaretRight, BsStar} from 'react-icons/bs';
import {TopFAQdataType} from '../../pages/Home/components/TopFAQ/topFAQdata.ts';
import s from './MyAccordion.module.css';
import React from 'react';

type Props = {
	data: TopFAQdataType[];
};

const MyAccordion: React.FC<Props> = ({data}) => {
	return (
		<Accordion.Root type="single" className={s.accordion} collapsible={true}>
			{data.map((item) => (
				<Accordion.Item key={item.value} value={item.value} className={s.item}>
					<Accordion.Header className={s.header}>
						<Accordion.Trigger className={s.trigger}>
							<div className={s.valueContainer}>
								<BsStar className={s.star} size={24} />
								<div className={s.value}>{item.value}</div>
							</div>
							<div className={s.chevronContainer}>
								<BsCaretRight className={s.chevron} size={24} />
							</div>
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content className={s.panel}>
						{item.description}
						{item.list && (
							<ul className={s.descriptionList}>
								{item.list.map((item) => (
									<li className={s.descriptionListElement} key={item}>
										{item}
									</li>
								))}
							</ul>
						)}
					</Accordion.Content>
				</Accordion.Item>
			))}
		</Accordion.Root>
	);
};

export default MyAccordion;
