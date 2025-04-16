import React from 'react';
import s from './FavoriteHeart.module.css';
import {BsHeart, BsHeartFill} from 'react-icons/bs';
type Props = {
	active: boolean;
	side: 'left' | 'right';
};
const FavoriteHeart: React.FC<Props> = ({active, side = 'right'}) => {
	return (
		<button className={`${s.container}`} style={{[side]: '8px'}}>
			{active ? (
				<BsHeartFill fill={'#DE1E1E'} size={16} />
			) : (
				<BsHeart size={16} />
			)}
		</button>
	);
};

export default FavoriteHeart;
