import React from 'react';

import ChevronStatusIcons from '../../assets/common/ChevronStatusIcons.tsx';

type Props = {
	specialStatus: number | null;
};
const UserStatusInProduct: React.FC<Props> = ({specialStatus}) => {
	const statusMap: any = [
		'gold',
		'blue',
		'photoGold',
		'photoBlue',
		'photoGrey',
	];
	if (specialStatus && specialStatus <= statusMap.length) {
		return <ChevronStatusIcons id={statusMap[specialStatus - 1]} />;
	} else return null;
};

export default UserStatusInProduct;
