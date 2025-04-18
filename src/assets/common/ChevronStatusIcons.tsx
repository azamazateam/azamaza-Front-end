import React from 'react';
import gold from '../images/statusChevron/gold.png';
import blue from '../images/statusChevron/blue.png';
import pGold from '../images/statusChevron/photoGold.png';
import pBlue from '../images/statusChevron/photoBlue.png';
import pGrey from '../images/statusChevron/photoGrey.png';
type Props = {
	id: 'gold' | 'blue' | 'photoGold' | 'photoBlue' | 'photoGrey';
};
const ChevronStatusIcons: React.FC<Props> = ({id}) => {
	switch (id) {
		case 'gold':
			return <img src={gold} alt="gold" />;
		case 'blue':
			return <img src={blue} alt="blue" />;
		case 'photoGold':
			return <img src={pGold} alt="pGold" />;

		case 'photoBlue':
			return <img src={pBlue} alt="pBlue" />;
		case 'photoGrey':
			return <img src={pGrey} alt="pGrey" />;
		default:
			return <svg></svg>;
	}
};

export default ChevronStatusIcons;
