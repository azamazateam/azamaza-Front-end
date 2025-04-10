import React from 'react';
import s from './OneServiceCardHead.module.css';

type Props = {
	title: string;
	description: string;
};
const OneServiceCardHead: React.FC<Props> = ({title, description}) => {
	return (
		<div className={s.container}>
			<div className={s.title}>{title}</div>
			<div className={s.description}>{description}</div>
		</div>
	);
};

export default OneServiceCardHead;
