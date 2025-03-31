import React from 'react';
import s from './Footer.module.css';
const FooterGrey: React.FC = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer>
			<section className={s.sectionGrey}>
				<div>All right reserved</div>
				<div>{`Copyright ${year} - Azamaza.com`}</div>
			</section>
		</footer>
	);
};

export default FooterGrey;
