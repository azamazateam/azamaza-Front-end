import React from 'react';
import {
	BsBuilding,
	BsBusFront,
	BsCupHot,
	BsGrid,
	BsRepeat,
	BsShopWindow,
	BsTaxiFront,
} from 'react-icons/bs';
import {BsBackpack4} from 'react-icons/bs';
import {BsCamera} from 'react-icons/bs';
import {BsPeople} from 'react-icons/bs';
import {BsPhone} from 'react-icons/bs';
import {BsFuelPump} from 'react-icons/bs';

export type CategoriesIconsType =
	| 'excursion'
	| 'all'
	| 'photography'
	| 'meet'
	| 'appSubscription'
	| 'fueling'
	| 'taxi'
	| 'restaurants'
	| 'transfer'
	| 'hotels'
	| 'marketplaces'
	| 'coupon'
	| 'rent'
	| 'referralProgram';

type Props = {
	id: CategoriesIconsType;
	color?: string;
};
const CategoriesIcons: React.FC<Props> = ({id, color}) => {
	switch (id) {
		case 'all':
			return <BsGrid size={20} color={color} />;
		case 'excursion':
			return <BsBackpack4 />;
		case 'photography':
			return <BsCamera />;
		case 'meet':
			return <BsPeople />;
		case 'appSubscription':
			return <BsPhone />;
		case 'fueling':
			return <BsFuelPump />;
		case 'taxi':
			return <BsTaxiFront />;
		case 'restaurants':
			return <BsCupHot />;
		case 'transfer':
			return <BsBusFront />;
		case 'hotels':
			return <BsBuilding />;
		case 'marketplaces':
			return <BsShopWindow />;
		case 'coupon':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="16"
					viewBox="0 0 20 16"
					fill="none"
				>
					<path
						d="M6.45672 11.5715L13.5996 4.42861M0.713867 13.7143C0.713866 14.0927 0.863984 14.4556 1.13128 14.7235C1.39857 14.9913 1.7612 15.1421 2.13958 15.1429H17.8596C18.238 15.1421 18.6006 14.9913 18.8679 14.7235C19.1352 14.4556 19.2853 14.0927 19.2853 13.7143V10.8086C18.6685 10.6413 18.1239 10.2757 17.7356 9.76807C17.3473 9.26045 17.1369 8.63913 17.1369 8.00004C17.1369 7.36094 17.3473 6.73962 17.7356 6.23201C18.1239 5.72439 18.6685 5.35873 19.2853 5.19146V2.28575C19.2853 1.90736 19.1352 1.54443 18.8679 1.27661C18.6006 1.00878 18.238 0.857935 17.8596 0.857178H2.13958C1.7612 0.857935 1.39857 1.00878 1.13128 1.27661C0.863984 1.54443 0.713866 1.90736 0.713867 2.28575V5.18575C1.33561 5.34928 1.8857 5.71409 2.27824 6.22322C2.67078 6.73236 2.88367 7.35715 2.88367 8.00004C2.88367 8.64292 2.67078 9.26771 2.27824 9.77685C1.8857 10.286 1.33561 10.6508 0.713867 10.8143V13.7143Z"
						stroke={color ?? '#006CE4'}
						strokeWidth="1.42857"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.17132 5.85716C7.36076 5.85716 7.54244 5.78191 7.67639 5.64795C7.81035 5.514 7.8856 5.33231 7.8856 5.14287C7.8856 4.95343 7.81035 4.77175 7.67639 4.6378C7.54244 4.50384 7.36076 4.42859 7.17132 4.42859C6.98188 4.42859 6.8002 4.50384 6.66624 4.6378C6.53229 4.77175 6.45703 4.95343 6.45703 5.14287C6.45703 5.33231 6.53229 5.514 6.66624 5.64795C6.8002 5.78191 6.98188 5.85716 7.17132 5.85716ZM12.8856 11.5714C13.075 11.5714 13.2567 11.4962 13.3907 11.3622C13.5246 11.2283 13.5999 11.0466 13.5999 10.8572C13.5999 10.6677 13.5246 10.486 13.3907 10.3521C13.2567 10.2181 13.075 10.1429 12.8856 10.1429C12.6962 10.1429 12.5145 10.2181 12.3805 10.3521C12.2466 10.486 12.1713 10.6677 12.1713 10.8572C12.1713 11.0466 12.2466 11.2283 12.3805 11.3622C12.5145 11.4962 12.6962 11.5714 12.8856 11.5714Z"
						stroke={color ?? '#006CE4'}
						strokeWidth="1.42857"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case 'rent':
			return <BsRepeat />;
		case 'referralProgram':
			return (
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.9167 10.8333C15.9082 10.8333 18.3333 10.0871 18.3333 9.16667C18.3333 8.24619 15.9082 7.5 12.9167 7.5C9.92512 7.5 7.5 8.24619 7.5 9.16667C7.5 10.0871 9.92512 10.8333 12.9167 10.8333Z"
						stroke={color ?? '#006CE4'}
						strokeWidth="1.25"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M18.3333 12.9165C18.3333 13.8373 15.9083 14.5832 12.9167 14.5832C9.925 14.5832 7.5 13.8373 7.5 12.9165"
						stroke={color ?? '#006CE4'}
						strokeWidth="1.25"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M18.3333 9.16663V16.5C18.3333 17.5125 15.9083 18.3333 12.9167 18.3333C9.925 18.3333 7.5 17.5125 7.5 16.5V9.16663"
						stroke={color ?? '#006CE4'}
						strokeWidth="1.25"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.08366 4.99996C10.0752 4.99996 12.5003 4.25377 12.5003 3.33329C12.5003 2.41282 10.0752 1.66663 7.08366 1.66663C4.09212 1.66663 1.66699 2.41282 1.66699 3.33329C1.66699 4.25377 4.09212 4.99996 7.08366 4.99996Z"
						stroke={color ?? '#006CE4'}
						strokeWidth="1.25"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M5.00033 9.16667C3.42366 8.975 1.97533 8.47917 1.66699 7.5M5.00033 13.3333C3.42366 13.1417 1.97533 12.6458 1.66699 11.6667"
						stroke={color ?? '#006CE4'}
						strokeWidth="1.25"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M5.00033 17.4999C3.42366 17.3083 1.97533 16.8116 1.66699 15.8333V3.33325M12.5003 4.99992V3.33325"
						stroke={color ?? '#006CE4'}
						strokeWidth="1.25"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		default:
			return <svg></svg>;
	}
};

export default CategoriesIcons;
