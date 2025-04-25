import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import './swiperCarousel.css';
import {useMediaQuery} from 'react-responsive';

export type CarouselDataType = {
	name: string;
	img: string;
};

type Props = {
	data: CarouselDataType[];
	revers?: boolean;
};

const LabelCarousel: React.FC<Props> = ({data, revers}) => {
	const isSmall = useMediaQuery({maxWidth: 400});
	return (
		<div>
			<Swiper
				spaceBetween={22}
				centeredSlides
				navigation={false}
				slidesPerView={isSmall ? 4 : 5}
				loopAdditionalSlides={1}
				loop={true}
				modules={[Autoplay]}
				watchOverflow={true}
				autoplay={{
					delay: 3000,
					reverseDirection: revers,
					disableOnInteraction: false,
				}}
				className={'swiperCarousel'}
			>
				{data?.map((item, index) => (
					<SwiperSlide key={index + item.name}>
						<img
							loading="lazy"
							src={item.img}
							className={'carouselImage'}
							alt={item.name}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default LabelCarousel;
