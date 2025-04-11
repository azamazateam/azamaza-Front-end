import React from 'react';
import s from './SomeUserProfileCard.module.css';
import {FakeUser} from '../../../pages/OneServiceCard/components/WhatGuestsLike/fakeUsers.ts';
import {useTranslation} from 'react-i18next';

type Props = {
	user: FakeUser;
};
const SomeUserProfileCard: React.FC<Props> = ({user}) => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<div className={s.row}>
				<div className={s.profileInfo}>
					<div className={s.profileImage}>
						<img src={user.avatar} alt="avatar" />
					</div>
					<div className={s.nameContainer}>
						<div className={s.name}>{user.name}</div>
						<div className={s.date}>{user.date}</div>
					</div>
				</div>
				<div className={s.commentContainer}>{user.comment}</div>
			</div>
			<div className={s.details}>
				<button>{t('More details')}</button>
			</div>
		</div>
	);
};

export default SomeUserProfileCard;
