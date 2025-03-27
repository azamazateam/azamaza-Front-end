import React, {useState} from 'react';
import s from './AuthAvatar.module.css';
import {useTranslation} from 'react-i18next';
import ButtonYellow from '../../../ButtonYellow/ButtonYellow.tsx';

const AuthAvatar: React.FC = () => {
	const {t} = useTranslation();
	const [auth, setAuth] = useState(false);
	const handleAuth = () => {
		setAuth(!auth);
	};
	return (
		<div className={s.container}>
			{auth ? (
				<div className={s.authImageContainer} onClick={handleAuth}>
					<button>
						JS
						{/*<img src={authImage} alt="avatar" onClick={handleAuth} />*/}
					</button>
				</div>
			) : (
				<div className={s.buttonContainer}>
					<ButtonYellow
						text={t('Login')}
						type={'button'}
						callback={handleAuth}
					/>
				</div>
			)}
		</div>
	);
};

export default AuthAvatar;
