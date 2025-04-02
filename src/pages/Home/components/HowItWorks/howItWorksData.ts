import qr from '../../../../assets/images/HitW/qr.jpg';
import curt from '../../../../assets/images/HitW/curt.png';
import settings from '../../../../assets/images/HitW/settings.png';

export type HowItWorksDataType = {
	image: string;
	description: string;
};

export const howItWorksData: HowItWorksDataType[] = [
	{
		image: qr,
		description:
			'Sign up for the subscription that suits you in the "Our Subscriptions" section',
	},
	{
		image: curt,
		description: 'Choose a service that suits you in all respects',
	},
	{
		image: settings,
		description:
			'Get unique promotions, discounts and offers that no one else has',
	},
];
