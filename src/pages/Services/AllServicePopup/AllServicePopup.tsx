import React from 'react';
import {setIsOpenPopup} from '../../../redux/slices/categoriesSlice.ts';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import s from './AllServicePopup.module.css';
import CloseCross from '../../../components/Buttons/CloseCross/CloseCross.tsx';
import YellowIconButton from '../../../components/Buttons/YellowIconButton/YellowIconButton.tsx';
import {BsFilter, BsSortAlphaDown} from 'react-icons/bs';
import {categories} from '../../../components/CategoriesSlider/categoriesData.ts';
import SliderButton from '../../../components/CategoriesSlider/SliderButton.tsx';

const AllServicePopup: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch();

	const closePopup = () => {
		dispatch(setIsOpenPopup(false));
	};
	return (
		<div className={s.container}>
			<div className={s.popupHead}>
				<div className={s.title}>{t('Azamaza.com')}</div>
				<div className={s.closeCross}>
					<CloseCross closeFn={closePopup} size={32} />
				</div>
			</div>
			<div className={s.filtersButtonContainer}>
				<YellowIconButton
					type={'button'}
					text={t('Sort')}
					icon={<BsSortAlphaDown size={20} />}
				/>
				<YellowIconButton
					type={'button'}
					text={t('Filter')}
					icon={<BsFilter size={20} />}
				/>
			</div>
			<div className={s.categoriesButtonsContainer}>
				{categories
					.filter((c) => c.link)
					.map((category) => (
						<SliderButton
							key={`popup${category.name}`}
							name={category.name}
							icon={category.icon}
							closePopup={closePopup}
							link={
								category.disabled === 0
									? `/service${category.link}`
									: `/service/in-development`
							}
							disabled={category.link !== null}
							iconColor={'#64666B'}
						/>
					))}
			</div>
		</div>
	);
};

export default AllServicePopup;
