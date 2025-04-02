import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import './swiperCarousel.css';

export type CarouselDataType = {
	name: string;
	img: string;
};

type Props = {
	data: CarouselDataType[];
	revers?: boolean;
};

const LabelCarousel: React.FC<Props> = ({data, revers}) => {
	return (
		<div>
			<Swiper
				spaceBetween={22}
				centeredSlides
				navigation={false}
				slidesPerView={5}
				loopAdditionalSlides={1}
				loop={true}
				modules={[Autoplay]}
				watchOverflow={true}
				autoplay={{
					delay: 3000,
					reverseDirection: revers,
				}}
				className={'swiperCarousel'}
			>
				{data.map((item, index) => (
					<SwiperSlide key={index + item.name}>
						<img src={item.img} className={'carouselImage'} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default LabelCarousel;
