import React from 'react';
import s from './FavoriteHeart.module.css';
import {BsHeart, BsHeartFill} from 'react-icons/bs';
type Props = {
	active: boolean;
};
const FavoriteHeart: React.FC<Props> = ({active}) => {
	return (
		<button className={s.container}>
			{active ? (
				<BsHeartFill fill={'#DE1E1E'} size={16} />
			) : (
				<BsHeart size={16} />
			)}
		</button>
	);
};

export default FavoriteHeart;
