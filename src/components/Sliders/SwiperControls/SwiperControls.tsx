import s from './SwiperControls.module.css';
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs';
import {useSwiperContext} from '../SwiperContext.tsx';

const SwiperControls = () => {
	const {swiper} = useSwiperContext();

	const goNext = () => {
		if (swiper) swiper.slideNext(600);
	};
	const goPrev = () => {
		if (swiper) swiper.slidePrev(600);
	};
	return (
		<div className={s.container}>
			<button className={s.button} onClick={goPrev}>
				<BsArrowLeftSquareFill size={40} color={'#AEB0B4'} />
			</button>
			<button className={s.button} onClick={goNext}>
				<BsArrowRightSquareFill size={40} color={'#006CE4'} />
			</button>
		</div>
	);
};

export default SwiperControls;
