import React from 'react';
import s from './ServiceHead.module.css';

type Props = {
	title: string;
	background: string;
	size: number;
};
const ServiceHead: React.FC<Props> = ({title, background, size}) => {
	return (
		<div
			className={s.container}
			style={{backgroundImage: `url(${background})`, minHeight: size}}
		>
			<h1 className={s.title}>{title}</h1>
		</div>
	);
};

export default ServiceHead;
