import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import s from './CategoriesSlider.module.css';
import SliderButton from './SliderButton.tsx';
import {categories} from './categoriesData.ts';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {setIsOpenPopup} from '../../redux/slices/categoriesSlice.ts';
import {useDispatch} from 'react-redux';
import {useMediaQuery} from 'react-responsive';

const CategoriesSlider: React.FC = () => {
	const dispatch = useDispatch();
	const isMobile = useMediaQuery({maxWidth: 600});

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

	return (
		<div className={s.container}>
			<Swiper
				pagination={{clickable: true}}
				spaceBetween={12}
				slidesPerView="auto"
			>
				{isMobile && renderAllCategoriesButton()}

				{categoriesToRender.map((category) => (
					<SwiperSlide key={`homePage${category.name}`} style={{width: 'auto'}}>
						<div className={s.slideContainer}>
							<SliderButton
								name={category.name}
								icon={category.icon}
								link={`/service${category.link}`}
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
