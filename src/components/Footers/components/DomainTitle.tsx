import React from 'react';
import s from '../Footer.module.css';

const DomainTitle: React.FC = () => {
	return (
		<div className={s.containerTitle}>
			<h3 className={s.domain}>AZAMAZA.COM</h3>
		</div>
	);
};

export default DomainTitle;
