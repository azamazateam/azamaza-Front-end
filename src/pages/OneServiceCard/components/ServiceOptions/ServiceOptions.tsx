import React from 'react';
import s from './ServiceOptions.module.css';

import {
	BsCamera,
	BsCarFront,
	BsCloudSun,
	BsCompass,
	BsCupHot,
	BsEvStation,
	BsFillEyeFill,
	BsFillPeopleFill,
	BsFillVolumeUpFill,
	BsFuelPump,
	BsLightbulb,
	BsPaintBucket,
	BsPeople,
	BsPeopleFill,
	BsPersonCheck,
	BsPhone,
	BsTruck,
	BsWifi,
} from 'react-icons/bs';
import {FaFish, FaHiking} from 'react-icons/fa';
import {TbSeeding} from 'react-icons/tb';
import {ServiceOptionsType} from '../../../../redux/types/commonTypes.ts';

type Props = {
	serviceOptions: ServiceOptionsType[];
};
const ServiceOptions: React.FC<Props> = ({serviceOptions}) => {
	const iconMap: any = {
		BsCarFront: <BsCarFront size={20} />,
		BsFuelPump: <BsFuelPump size={20} />,
		BsEvStation: <BsEvStation size={20} />,
		BsCompass: <BsCompass size={20} />,
		BsCupHot: <BsCupHot size={20} />,
		BsCamera: <BsCamera size={20} />,
		BsLightbulb: <BsLightbulb size={20} />,
		BsPaintBucket: <BsPaintBucket size={20} />,
		BsWifi: <BsWifi size={20} />,
		BsFillPeopleFill: <BsFillPeopleFill size={20} />,
		BsTruck: <BsTruck size={20} />,
		BsPeople: <BsPeople size={20} />,
		BsPhone: <BsPhone size={20} />,
		BsPersonCheck: <BsPersonCheck size={20} />,
		BsFillEyeFill: <BsFillEyeFill size={20} />,
		FaHiking: <FaHiking size={20} />,
		BsFillVolumeUpFill: <BsFillVolumeUpFill size={20} />,
		BsPeopleFill: <BsPeopleFill size={20} />,
		FaFish: <FaFish size={20} />,
		BsCloudSun: <BsCloudSun size={20} />,
		TbSeeding: <TbSeeding size={20} />,
	};
	return (
		<ul className={s.container}>
			{serviceOptions.map((serviceOption) => (
				<li className={s.row} key={serviceOption.id}>
					<div className={s.icon}>{iconMap[serviceOption.icon]}</div>
					<div className={s.name}>{serviceOption.name}</div>
				</li>
			))}
		</ul>
	);
};

export default ServiceOptions;
