import React from 'react';
import {Autoplay, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {AdvantagesDataType} from '../../../pages/Home/components/Advantages/advantagesData.ts';
import s from './SliderWithPagination.module.css';
import './SliderWithPagination.css';

type Props = {
	data: AdvantagesDataType[];
};

const SliderWithPagination: React.FC<Props> = ({data}) => {
	return (
		<div className={s.container}>
			<Swiper
				centeredSlides={true}
				loop={true}
				spaceBetween={10}
				slidesPerView={1}
				modules={[Autoplay, Pagination]}
				watchOverflow={true}
				className={'sliderWithPagination'}
				pagination={{
					clickable: true,
				}}
			>
				{data.map((item, index) => (
					<SwiperSlide key={index + item.image}>
						<div
							style={{backgroundImage: `url(${item.image})`}}
							className={s.bannerContainer}
						>
							<h4 className={s.title}>{item.title ?? ''}</h4>
							<p
								className={`${s.description} ${item.title ? '' : s.noTitleDescription}`}
							>
								{item.description}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SliderWithPagination;
