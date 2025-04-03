import React, {ReactNode} from 'react';
import {Autoplay, FreeMode} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

type Props = {
	children: ReactNode[] | ReactNode;
};

const VerticalSlider: React.FC<Props> = ({children}) => {
	return (
		<div>
			<Swiper
				/*centeredSlides={true}*/
				loop={true}
				spaceBetween={20}
				slidesPerView={'auto'}
				modules={[Autoplay, FreeMode]}
				watchOverflow={true}
				className={'sliderWithPagination'}
				pagination={{clickable: true}}
				freeMode={true}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
				}}
				speed={6000}
			>
				{React.Children.map(children, (child, index) => (
					<SwiperSlide key={index} style={{maxWidth: '236px'}}>
						{child}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default VerticalSlider;
