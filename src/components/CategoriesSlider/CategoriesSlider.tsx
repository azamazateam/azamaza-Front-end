import React from 'react';
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
const CategoriesSlider: React.FC = () => {
	return (
		<div className={s.container}>
			<Swiper
				pagination={{clickable: true}}
				spaceBetween={12}
				slidesPerView="auto"
			>
				{categories.map((category) => (
					<SwiperSlide key={category.name} style={{width: 'auto'}}>
						<div className={s.slideContainer}>
							<SliderButton
								name={category.name}
								icon={category.icon}
								link={`/service${category.link}`}
								disabled={category.link !== null}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CategoriesSlider;
