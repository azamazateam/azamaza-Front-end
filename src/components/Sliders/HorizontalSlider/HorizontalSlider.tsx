import React, {ReactNode} from 'react';
import {Autoplay, FreeMode, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import './sliderHorizontal.css';

type Props = {
	children: ReactNode[] | ReactNode;
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
}) => {
	return (
		<div>
			<Swiper
				loop={true}
				spaceBetween={20}
				slidesPerView={'auto'}
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
					<SwiperSlide
						key={`${index + Math.random()}`} /*style={{maxWidth: '236px'}}*/
					>
						{child}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HorizontalSlider;
