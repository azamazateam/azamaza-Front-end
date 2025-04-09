import React from 'react';
import s from './SearchLocationPopup.module.css';
import {useTranslation} from 'react-i18next';
import CloseCross from '../../../../CloseCross/CloseCross.tsx';
import GrayInput from '../../../../GrayInput/GrayInput.tsx';
import NextPositionButton from '../../../../NextPositionButton/NextPositionButton.tsx';
import {searchLocationData} from './searchLocationData.ts';
import {BsGeoAlt} from 'react-icons/bs';
import ButtonYellow from '../../../../ButtonYellow/ButtonYellow.tsx';

type Props = {
	closeModal: () => void;
};
const SearchLocationPopup: React.FC<Props> = ({closeModal}) => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<div>
				<div className={s.headPanel}>
					<div className={s.title}>{t('Enter your search details')}</div>
					<div className={s.close}>
						<CloseCross closeFn={closeModal} size={32} />
					</div>
				</div>
				<div className={s.inputContainer}>
					<div className={s.input}>
						<GrayInput />
					</div>
					<div className={s.nextPosition}>
						<NextPositionButton callback={() => {}} />
					</div>
				</div>
				<div className={s.listTitle}>{t('Popular offers in the region')}</div>
				<ul className={s.popularOffers}>
					{searchLocationData.map((location) => (
						<li key={location.id} className={s.popularOfferEl}>
							<button>
								<div className={s.icon}>
									<BsGeoAlt size={20} />
								</div>
								<div className={s.nameContainer}>
									<div className={s.name}>{location.serviceName}</div>
									<div className={s.location}>{location.location}</div>
								</div>
							</button>
						</li>
					))}
				</ul>
			</div>
			<div className={s.submitButton}>
				<ButtonYellow type={'button'} text={t('Apply')} />
			</div>
		</div>
	);
};

export default SearchLocationPopup;
