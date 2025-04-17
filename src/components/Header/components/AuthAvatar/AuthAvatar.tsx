import React, {useEffect, useState} from 'react';
import s from './AuthAvatar.module.css';
import {useTranslation} from 'react-i18next';
import ButtonYellow from '../../../Buttons/ButtonYellow/ButtonYellow.tsx';
import fakeProfile from '../../../../assets/images/fakeProfile.jpg';
import {useMediaQuery} from 'react-responsive';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store.ts';
import {setUserAvatar} from '../../../../redux/slices/userSlice.ts';
const AuthAvatar: React.FC = () => {
	const dispatch = useDispatch();
	const isDesktop = useMediaQuery({minWidth: 600});
	const avatar = useSelector((state: RootState) => state.user.avatar);
	const {t} = useTranslation();
	const [auth, setAuth] = useState(false);
	const handleAuth = () => {
		setAuth(!auth);
	};
	useEffect(() => {
		dispatch(setUserAvatar(fakeProfile));
	}, [dispatch]);
	return (
		<div className={s.container}>
			{auth ? (
				<div
					className={s.authImageContainer}
					onClick={handleAuth}
					role={'button'}
				>
					<div className={s.imageContainer}>
						{avatar ? (
							<img src={avatar} alt="avatar" />
						) : (
							<div className={s.initialsContainer}>MS</div>
						)}
					</div>
					{isDesktop && (
						<div className={s.info}>
							<div className={s.name}>Johan Flik</div>
							<div className={s.level}>Loyalty level 1</div>
						</div>
					)}
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
