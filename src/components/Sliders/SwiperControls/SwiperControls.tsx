import {useDispatch} from 'react-redux';
import {slideNext, slidePrev} from '../../../redux/slices/swiperSlice.ts';
import s from './SwiperControls.module.css';
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs';
const SwiperControls = () => {
	const dispatch = useDispatch();

	return (
		<div className={s.container}>
			<button className={s.button} onClick={() => dispatch(slidePrev(600))}>
				<BsArrowLeftSquareFill size={40} color={'#AEB0B4'} />
			</button>
			<button className={s.button} onClick={() => dispatch(slideNext(600))}>
				<BsArrowRightSquareFill size={40} color={'#006CE4'} />
			</button>
		</div>
	);
};

export default SwiperControls;
