import React from 'react';
import s from './BlockHeader.module.css';

type Props = {
	title: string;
	description: string;
};
const BlockHeader: React.FC<Props> = ({title, description}) => {
	return (
		<>
			<div className={s.title}>{title}</div>
			<div className={s.description}>{description}</div>
		</>
	);
};

export default BlockHeader;
