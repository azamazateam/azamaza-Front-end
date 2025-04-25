import React, {useEffect} from 'react';
import HorizontalSlider from '../../../../components/Sliders/HorizontalSlider/HorizontalSlider.tsx';
import AdvantagesCard from '../../../../components/Cards/AdvantagesCard/AdvantagesCard.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store.ts';
import s from '../../../../components/UniqueOffersForYou/UniqueOffersForYou.module.css';
import BlockHeader from '../BlockHeader/BlockHeader.tsx';
import {useTranslation} from 'react-i18next';
import {Desktop} from '../../../../assets/utils/responsive.tsx';
import {setAdvantage} from '../../../../redux/slices/homeSlice.ts';
import {
	advantagesData,
	advantagesDataMobile,
} from '../../../../mocks/HomePageData.ts';
import {useMediaQuery} from 'react-responsive';

const Advantages: React.FC = () => {
	const dispatch = useDispatch();
	const isMobile = useMediaQuery({maxWidth: 600});
	const advantage = useSelector((state: RootState) => state.homePage.advantage);
	useEffect(() => {
		dispatch(setAdvantage(!isMobile ? advantagesData : advantagesDataMobile));
	}, []);
	const {t} = useTranslation();
	return (
		<div>
			<div className={s.container}>
				<Desktop>
					<BlockHeader
						title={t('Our advantages')}
						description={t(
							'Everything you need for vacation, travel, shopping and more on one service, at unique discounts and offers',
						)}
					/>
				</Desktop>
				<div className={s.slider}>
					<HorizontalSlider pagination>
						{advantage?.map((advantage, index) => (
							<AdvantagesCard card={advantage} key={`${index}Advantages`} />
						))}
					</HorizontalSlider>
				</div>
			</div>
		</div>
	);
};

export default Advantages;
