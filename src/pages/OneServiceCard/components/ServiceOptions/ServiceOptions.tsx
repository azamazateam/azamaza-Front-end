import React from 'react';
import s from './ServiceOptions.module.css';
import {ServiceOptionsType} from '../../../Home/components/MostPopularServices/mostPopularServicesData.tsx';
type Props = {
	serviceOptions: ServiceOptionsType[];
};
const ServiceOptions: React.FC<Props> = ({serviceOptions}) => {
	return (
		<ul className={s.container}>
			{serviceOptions.map((serviceOption) => (
				<li className={s.row} key={serviceOption.id}>
					<div className={s.icon}>{serviceOption.icon}</div>
					<div className={s.name}>{serviceOption.name}</div>
				</li>
			))}
		</ul>
	);
};

export default ServiceOptions;
