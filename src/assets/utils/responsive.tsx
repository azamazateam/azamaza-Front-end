import {useMediaQuery} from 'react-responsive';

export const Desktop = ({children}: any) => {
	const isDesktop = useMediaQuery({minWidth: 600});
	return isDesktop ? children : null;
};

export const Mobile = ({children}: any) => {
	const isMobile = useMediaQuery({maxWidth: 600});
	return isMobile ? children : null;
};
