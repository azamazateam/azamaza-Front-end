import rl1 from '../../../../../assets/images/referral/rl1.png';
import rl2 from '../../../../../assets/images/referral/rl2.png';
import rl3 from '../../../../../assets/images/referral/rl3.png';

export type ReferralDataType = {
	id: string;
	background: string;
	title: string;
	codeRef: string;
	link: string;
	description?: string;
	position: 'center' | 'right' | 'left';
};

export const referralData: ReferralDataType[] = [
	{
		id: '123456763',
		background: rl1,
		codeRef: 'ref=6Xyg7J5',
		title: 'Albert Wolfz is waiting for you at Azamaza!',
		link: 'ref=6Xyg7J5',
		position: 'right',
	},
	{
		id: '123456762',

		background: rl2,
		codeRef: 'ref=6Xyg7J5',
		title: 'Albert Wolfz is waiting for you at Azamaza!',
		link: 'ref=6Xyg7J5',
		position: 'left',
	},
	{
		id: '123456761',
		background: rl3,
		codeRef: 'ref=6Xyg7J5',
		title: 'Azamaza.com',
		link: 'ref=6Xyg7J5',
		position: 'center',
		description:
			'Travel and meet, save and enjoy, rent, communicate, discover the world!',
	},
];
