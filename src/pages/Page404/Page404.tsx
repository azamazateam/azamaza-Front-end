import React from 'react';
import s from './page404.module.css';
import image404 from '../../assets/images/image.png';

const Page404: React.FC = () => {
	return (
		<div className={s.container}>
			<div>
				<img src={image404} alt="404" />
			</div>
		</div>
	);
};

export default Page404;
