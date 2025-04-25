import React from 'react';
import s from './page404.module.css';
import image404 from '../../assets/images/ErrorPage/image.png';
import image204 from '../../assets/images/ErrorPage/204.png';
import Header from '../../components/Header/Header.tsx';
import FooterGrey from '../../components/Footers/FooterGrey.tsx';
import Main from '../../components/Main/Main.tsx';
import {useTranslation} from 'react-i18next';
import Button from '../../components/Buttons/Button/Button.tsx';
import {useNavigate} from 'react-router-dom';

type Props = {
	codePage: '404' | '204';
};
const Page404: React.FC<Props> = ({codePage}) => {
	const {t} = useTranslation();
	const navigate = useNavigate();
	const dataMap = [
		{
			id: '404',
			title: t('Page not found'),
			description: t(
				'Sorry, webpage you are trying to access cannot be found on the server',
			),
			image: image404,
		},
		{
			id: '204',
			title: t('This functionality is in development'),
			description: t(
				'We are already working on this section. It will be available for you soon!',
			),
			image: image204,
		},
	];
	const page = dataMap.find((d) => d.id === codePage);
	const handleClick = () => {
		navigate('/');
	};
	if (!page) return null;
	return (
		<>
			<Header />
			<Main>
				<div className={s.container}>
					<div className={s.imageContainer}>
						<img src={page.image} alt={codePage} />
					</div>
					<div className={s.infoContainer}>
						<div className={s.title}>{page.title}</div>
						<div className={s.text}>{page.description}</div>
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
