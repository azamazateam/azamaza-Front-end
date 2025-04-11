import React from 'react';
import ContainerSubTitle from '../ContainerSubTitle.tsx';
import {useTranslation} from 'react-i18next';
import VerticalSlider from '../../../../components/Sliders/VerticalSlider/VerticalSlider.tsx';
import SomeUserProfileCard from '../../../../components/Cards/SomeUserProfileCard/SomeUserProfileCard.tsx';
import {fakeUsers} from './fakeUsers.ts';

const WhatGuestsLike: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div>
			<ContainerSubTitle title={t('What guests like')} isShowMore={false} />
			<VerticalSlider spaceBetween={5}>
				{fakeUsers.map((user) => (
					<SomeUserProfileCard user={user} key={user.id} />
				))}
			</VerticalSlider>
		</div>
	);
};

export default WhatGuestsLike;
