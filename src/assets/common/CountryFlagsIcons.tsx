import React from 'react';

type Props = {
	id: string | 'uk' | 'en' | 'es' | 'it' | 'ru' | 'fr' | 'de';
};
const CountryFlagsIcons: React.FC<Props> = ({id}) => {
	switch (id) {
		case 'uk':
			return (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width="24" height="24" rx="12" fill="#FFDA2C" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0 0H24V12.8H0V0Z"
						fill="#3A99FF"
					/>
				</svg>
			);
		case 'en':
			return (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1258_764)">
						<rect width="24" height="24" rx="12" fill="#1A47B8" />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M-1.22569 0H-4.80005V4L25.2062 24L28.7999 24V20L-1.22569 0Z"
							fill="white"
						/>
						<path
							d="M-3.60789 0L28.7999 21.6567V24H27.6357L-4.80005 2.32089V0H-3.60789Z"
							fill="#F93939"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M25.5999 0H28.7999V4C28.7999 4 8.01564 17.3249 -1.60005 24H-4.80005V20L25.5999 0Z"
							fill="white"
						/>
						<path
							d="M28.7999 0H27.7148L-4.80005 21.6753V24H-3.60789L28.7999 2.33842V0Z"
							fill="#F93939"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M7.41927 0H16.6086V7.40291H28.7999V16.5922H16.6086V24H7.41927V16.5922H-4.80005V7.40291H7.41927V0Z"
							fill="white"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.34732 0H14.6526V9.23077H28.7999V14.7692H14.6526V24H9.34732V14.7692H-4.80005V9.23077H9.34732V0Z"
							fill="#F93939"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1258_764">
							<rect width="24" height="24" rx="12" fill="white" />
						</clipPath>
					</defs>
				</svg>
			);
		case 'es':
			return (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_1250_2164)">
						<rect width="24" height="24" rx="12" fill="#F93939" />
						<path
							d="M30.4 0H3.2C1.43269 0 0 1.43269 0 3.2V20.8C0 22.5673 1.43269 24 3.2 24H30.4C32.1673 24 33.6 22.5673 33.6 20.8V3.2C33.6 1.43269 32.1673 0 30.4 0Z"
							fill="#F93939"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0 6.39999H33.6V17.6H0V6.39999Z"
							fill="#FFDA2C"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M14.3999 9.95521V13.9872C14.3999 15.1072 13.3247 16.0032 11.9999 16.0032H8.7999C7.4783 16 6.3999 15.0992 6.3999 13.984V9.952C6.3999 9.0368 7.1167 8.27201 8.1023 8.024C8.3999 7.19201 9.3151 7.93761 10.3999 7.93761C11.4911 7.93761 12.3999 7.1968 12.6975 8.0256C13.6799 8.28 14.3999 9.04641 14.3999 9.95521Z"
							fill="#D4AF2C"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M14.3998 11.2H15.9998V16H14.3998V11.2ZM4.7998 11.2H6.3998V16H4.7998V11.2Z"
							fill="#CBCBCB"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M14.3998 14.4H15.9998V16H14.3998V14.4ZM4.7998 14.4H6.3998V16H4.7998V14.4Z"
							fill="#1A47B8"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M14.3998 9.60001H15.9998V11.2H14.3998V9.60001ZM4.7998 9.60001H6.3998V11.2H4.7998V9.60001Z"
							fill="#D4AF2C"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8 9.60001H9.6V12H8V9.60001ZM11.2 12.8H12.8V15.2H11.2V12.8Z"
							fill="#AF010D"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M11.2002 9.60001H12.8002V12H11.2002V9.60001Z"
							fill="#AE6A3E"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8 12.8H9.6V15.2H8V12.8Z"
							fill="#FFDA2C"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.6 9.6L8 8H12.8L11.2 9.6H9.6Z"
							fill="#AF010D"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.6001 6.39999H11.2001V7.99999H9.6001V6.39999Z"
							fill="#D4AF2C"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1250_2164">
							<rect width="24" height="24" rx="12" fill="white" />
						</clipPath>
					</defs>
				</svg>
			);
		case 'it':
			return (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1250_2183)">
						<rect width="24" height="24" rx="12" fill="white" />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M-4.80005 0H6.39995V24H-4.80005V0Z"
							fill="#249F58"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M17.6001 0H28.8001V24H17.6001V0Z"
							fill="#F93939"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1250_2183">
							<rect width="24" height="24" rx="12" fill="white" />
						</clipPath>
					</defs>
				</svg>
			);
		case 'ru':
			return (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1250_2188)">
						<rect width="24" height="24" rx="12" fill="#1A47B8" />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M-3.19995 16H30.4V24H-3.19995V16Z"
							fill="#F93939"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M-3.19995 0H30.4V8H-3.19995V0Z"
							fill="white"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1250_2188">
							<rect width="24" height="24" rx="12" fill="white" />
						</clipPath>
					</defs>
				</svg>
			);
		case 'fr':
			return (
				<svg
					width="25"
					height="24"
					viewBox="0 0 25 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1250_2159)">
						<rect x="0.666504" width="24" height="24" rx="12" fill="white" />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M-4.13354 0H7.06645V24H-4.13354V0Z"
							fill="#1A47B8"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M18.2666 0H29.4666V24H18.2666V0Z"
							fill="#F93939"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1250_2159">
							<rect x="0.666504" width="24" height="24" rx="12" fill="white" />
						</clipPath>
					</defs>
				</svg>
			);
		case 'de':
			return (
				<svg
					width="25"
					height="24"
					viewBox="0 0 25 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_1258_758)">
						<rect x="0.666504" width="24" height="24" rx="12" fill="#F93939" />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M-4.13354 16H29.4665V24H-4.13354V16Z"
							fill="#FFDA2C"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M-4.13354 0H29.4665V8H-4.13354V0Z"
							fill="#151515"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1258_758">
							<rect x="0.666504" width="24" height="24" rx="12" fill="white" />
						</clipPath>
					</defs>
				</svg>
			);
		default:
			return <svg></svg>;
	}
};

export default CountryFlagsIcons;
