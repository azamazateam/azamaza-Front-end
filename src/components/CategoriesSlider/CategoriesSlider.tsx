import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import s from './CategoriesSlider.module.css';
import SliderButton from './SliderButton.tsx';
import {categories} from './categoriesData.ts';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import {setIsOpenPopup} from '../../redux/slices/categoriesSlice.ts';
import {useDispatch} from 'react-redux';
import {useMediaQuery} from 'react-responsive';
import {useLocation} from 'react-router-dom';

const CategoriesSlider: React.FC = () => {
	const dispatch = useDispatch();
	const isMobile = useMediaQuery({maxWidth: 600});
	const location = useLocation();
	const [swiperInstance, setSwiperInstance] = useState<any>(null);
	const handleOpenCategoriesPopup = () => {
		dispatch(setIsOpenPopup(true));
	};
	const categoriesToRender = isMobile ? categories : categories.slice(0, 6);
	const renderAllCategoriesButton = () => (
		<SwiperSlide style={{width: 'auto'}}>
			<div className={`${s.slideContainer}`}>
				<SliderButton
					name={'all'}
					icon={'all'}
					link={'/'}
					disabled={false}
					callbackAll={handleOpenCategoriesPopup}
				/>
			</div>
		</SwiperSlide>
	);

	useEffect(() => {
		if (!swiperInstance) return;

		const activeSlide = document
			.querySelector(`.${s.active}`)
			?.closest('.swiper-slide');
		const allSlides = swiperInstance.slides;

		if (activeSlide) {
			const index = Array.from(allSlides).indexOf(activeSlide);
			if (index >= 0) {
				swiperInstance.slideTo(index, 300); // Прокрутка с анимацией
			}
		}
	}, [swiperInstance, location.pathname]);

	return (
		<div className={s.container}>
			<Swiper
				onSwiper={setSwiperInstance}
				pagination={{clickable: true}}
				spaceBetween={12}
				slidesPerView="auto"
				className={'swiper-category'}
			>
				{isMobile && renderAllCategoriesButton()}
				{categoriesToRender.map((category) => (
					<SwiperSlide key={`homePage${category.name}`} style={{width: 'auto'}}>
						<div className={s.slideContainer}>
							<SliderButton
								name={category.name}
								icon={category.icon}
								link={
									category.disabled === 0
										? `/service${category.link}`
										: `/service/in-development`
								}
								disabled={category.link !== null}
								callbackAll={handleOpenCategoriesPopup}
							/>
						</div>
					</SwiperSlide>
				))}
				{!isMobile && renderAllCategoriesButton()}
			</Swiper>
		</div>
	);
};

export default CategoriesSlider;
