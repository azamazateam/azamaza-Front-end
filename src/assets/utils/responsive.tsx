import {useMediaQuery} from 'react-responsive';

export const Desktop = ({children}: any) => {
	const isDesktop = useMediaQuery({minWidth: 600});
	console.log(isDesktop);
	return isDesktop ? children : null;
};

export const Mobile = ({children}: any) => {
	const isMobile = useMediaQuery({maxWidth: 600});
	console.log(isMobile);
	return isMobile ? children : null;
};
