import React from 'react';
import {BsX} from 'react-icons/bs';
type CloseCrossProps = {
	closeFn: () => void;
	size?: number;
};
const CloseCross: React.FC<CloseCrossProps> = ({closeFn, size}) => {
	return (
		<button onClick={closeFn} type={'button'}>
			<BsX size={size} color={'#64666B'} />
		</button>
	);
};

export default CloseCross;
