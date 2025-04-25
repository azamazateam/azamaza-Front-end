import React, {ReactNode} from 'react';
import {Autoplay, FreeMode, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import './sliderHorizontal.css';
import {useSwiperContext} from '../SwiperContext.tsx';

type Props = {
	children: ReactNode[] | ReactNode;
	slidesPerView?: number | 'auto';
	pagination?: boolean;
	freeMode?: boolean;
	autoplay?: boolean;
	speed?: number;
};
const HorizontalSlider: React.FC<Props> = ({
	children,
	pagination,
	freeMode,
	autoplay,
	speed,
	slidesPerView = 'auto',
}) => {
	const {setSwiper} = useSwiperContext();
	return (
		<div>
			<Swiper
				onSwiper={(swiper) => setSwiper(swiper)}
				loop={false}
				spaceBetween={20}
				slidesPerView={slidesPerView}
				modules={[Autoplay, FreeMode, Pagination]}
				watchOverflow={true}
				className={'sliderHorizontal'}
				pagination={pagination && {clickable: true}}
				autoplay={
					autoplay && {
						delay: 0,
						disableOnInteraction: false,
					}
				}
				freeMode={freeMode}
				speed={speed}
			>
				{React.Children.map(children, (child, index) => (
					<SwiperSlide key={`${index + Math.random()}`}>{child}</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HorizontalSlider;
