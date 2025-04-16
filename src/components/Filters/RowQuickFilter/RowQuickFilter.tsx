import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import QuickFilterButton from './QuickFilterButton.tsx';
import {quickFiltersData} from './filtersData.ts';
import {useDispatch, useSelector} from 'react-redux';
import {setRowQuickFilters} from '../../../redux/slices/filtersSlice.ts';
import {RootState} from '../../../redux/store.ts';

const RowQuickFilter: React.FC = () => {
	const dispatch = useDispatch();
	const quickFilters = useSelector(
		(state: RootState) => state.filters.rowQuickFilters,
	);

	useEffect(() => {
		dispatch(setRowQuickFilters(quickFiltersData));
	}, [dispatch]);

	return (
		<div>
			<Swiper
				pagination={{clickable: true}}
				spaceBetween={12}
				slidesPerView="auto"
			>
				{quickFilters?.map((filter) => (
					<SwiperSlide
						key={`RowQuickFilter${filter.name}`}
						style={{width: 'auto'}}
					>
						<QuickFilterButton filter={filter} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default RowQuickFilter;
