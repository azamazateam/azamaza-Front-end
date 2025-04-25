import React from 'react';
import s from './IconSliderFilter.module.css';
import IconSliderElement from './IconSliderElement.tsx';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store.ts';

/*type Props = {
	filterData: IconSliderFilterType[] | null;
};*/
const IconSliderFilter: React.FC = () => {
	const iconsSliderFilter = useSelector(
		(state: RootState) => state.filters.iconsSliderFilter,
	);

	return (
		<div className={s.container}>
			<Swiper
				pagination={{clickable: true}}
				spaceBetween={12}
				slidesPerView="auto"
			>
				{iconsSliderFilter?.map((foodData) => (
					<SwiperSlide key={foodData.id} style={{width: 'auto'}}>
						<IconSliderElement data={foodData} />
					</SwiperSlide>
				))}{' '}
			</Swiper>
		</div>
	);
};

export default IconSliderFilter;
