import React from 'react';
import s from './ReferralsInfoBanner.module.css';
import banner from '../../../../assets/images/refferal_main_banner.png';
import Button from '../../../../components/Buttons/Button/Button.tsx';
import {useTranslation} from 'react-i18next';
import {BsCheckLg} from 'react-icons/bs';
import {Desktop, Mobile} from '../../../../assets/utils/responsive.tsx';
import BlockHeader from '../../../Home/components/BlockHeader/BlockHeader.tsx';

const ReferralsInfoBanner: React.FC = () => {
	const {t} = useTranslation();
	return (
		<>
			<Desktop>
				<BlockHeader
					title={t('Partnership Program')}
					description={t(
						"If you have a business you want to grow, we'd love to help you!",
					)}
				/>
			</Desktop>
			<div className={s.container}>
				<div className={s.imageContainer}>
					<img src={banner} alt="refferalBaner" />
				</div>
				<div className={s.infoContainer}>
					<Mobile>
						<div className={s.infoWindow}>
							<div className={s.title}>
								{t('Become a partner of the Azamaza platform')}
							</div>
							<ul className={s.infoList}>
								<li className={s.infoElement}>
									<span>
										<BsCheckLg color={'#36B715'} size={24} />
									</span>
									<span>
										{t('Provide a unique offer and get your regular customers')}
									</span>
								</li>
								<li className={s.infoElement}>
									<span>
										<BsCheckLg color={'#36B715'} size={24} />
									</span>
									<span>
										{t(
											'More than 15,000 businesses that have registered on our platform are successfully operating and acquiring customers',
										)}
									</span>
								</li>
								<li className={s.infoElement}>
									<span>
										<BsCheckLg color={'#36B715'} size={24} />
									</span>
									<span>
										{t(
											'We honestly and fairly evaluate and evaluate your services, regardless of the volume and size of the company',
										)}
									</span>
								</li>
							</ul>
						</div>
					</Mobile>
					<Desktop>
						<div className={s.desktopInfo}>
							<div className={s.desktopTitle}>
								{t('Become a partner of the Azamaza platform')}
							</div>
							<ul className={s.desktopInfoList}>
								<li className={s.infoElement}>
									<span>
										<BsCheckLg color={'#36B715'} size={24} />
									</span>
									<span>
										{t('Provide a unique offer and get your regular customers')}
									</span>
								</li>
								<li className={s.infoElement}>
									<span>
										<BsCheckLg color={'#36B715'} size={24} />
									</span>
									<span>
										{t(
											'More than 15,000 businesses that have registered on our platform are successfully operating and acquiring customers',
										)}
									</span>
								</li>
								<li className={s.infoElement}>
									<span>
										<BsCheckLg color={'#36B715'} size={24} />
									</span>
									<span>
										{t(
											'We honestly and fairly evaluate and evaluate your services, regardless of the volume and size of the company',
										)}
									</span>
								</li>
							</ul>
						</div>
					</Desktop>
					<div className={s.buttonContainer}>
						<div className={s.button}>
							<Button type={'button'} text={t('Send a message')} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReferralsInfoBanner;
