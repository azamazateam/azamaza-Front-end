import React from 'react';
import s from './IconSliderFilter.module.css';
import IconSliderElement from './IconSliderElement.tsx';

import {IconSliderFilterType} from '../../../redux/slices/filtersSlice.ts';
import {Swiper, SwiperSlide} from 'swiper/react';

type Props = {
	filterData: IconSliderFilterType[] | null;
};
const IconSliderFilter: React.FC<Props> = ({filterData}) => {
	return (
		<div className={s.container}>
			<Swiper
				pagination={{clickable: true}}
				spaceBetween={12}
				slidesPerView="auto"
			>
				{filterData?.map((foodData) => (
					<SwiperSlide key={foodData.id} style={{width: 'auto'}}>
						<IconSliderElement data={foodData} />
					</SwiperSlide>
				))}{' '}
			</Swiper>
		</div>
	);
};

export default IconSliderFilter;
