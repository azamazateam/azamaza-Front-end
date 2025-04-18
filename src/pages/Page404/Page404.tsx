import React from 'react';
import s from './page404.module.css';
import image404 from '../../assets/images/image.png';
import Header from '../../components/Header/Header.tsx';
import FooterGrey from '../../components/Footers/FooterGrey.tsx';
import Main from '../../components/Main/Main.tsx';
import {useTranslation} from 'react-i18next';
import Button from '../../components/Buttons/ButtonYellow/Button.tsx';
import {useNavigate} from 'react-router-dom';

const Page404: React.FC = () => {
	const {t} = useTranslation();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<>
			<Header />
			<Main>
				<div className={s.container}>
					<div className={s.imageContainer}>
						<img src={image404} alt="404" />
					</div>
					<div className={s.infoContainer}>
						<div className={s.title}>{t('Page not found')}</div>
						<div className={s.text}>
							{t(
								'Sorry, webpage you are trying to access cannot be found on the server',
							)}
						</div>
					</div>
					<div className={s.buttonContainer}>
						<Button
							text={t('Back home')}
							type={'button'}
							callback={handleClick}
						/>
					</div>
				</div>
			</Main>
			<FooterGrey />
		</>
	);
};

export default Page404;
