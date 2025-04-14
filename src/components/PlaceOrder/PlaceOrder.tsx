import React from 'react';
import s from './PlaceOrder.module.css';
import ContainerSubTitle from '../../pages/OneServiceCard/components/ContainerSubTitle.tsx';
import {useTranslation} from 'react-i18next';
import EasyInput from '../Inputs/EasyInput/EasyInput.tsx';
import ButtonYellow from '../Buttons/ButtonYellow/ButtonYellow.tsx';
const PlaceOrder: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<div className={s.title}>
				<ContainerSubTitle
					title={t('Enter your order details')}
					isShowMore={false}
				/>
			</div>
			<div className={s.inputsContainer}>
				<div>
					<EasyInput placeholder={t('Vallnord Ski Resort')} />
				</div>
				<div className={s.inputRow}>
					<div className={s.inputsColumn}>
						<EasyInput placeholder={t('San, 01 Nov, 2024')} />
						<EasyInput placeholder={'09:00 '} />
					</div>
					<div className={s.inputsColumn}>
						<EasyInput placeholder={'15'} />
						<button>Apply</button>
					</div>
				</div>
			</div>
			<div className={s.buttonContainer}>
				<ButtonYellow type={'button'} text={t('Place an order')} />
			</div>
		</div>
	);
};

export default PlaceOrder;
