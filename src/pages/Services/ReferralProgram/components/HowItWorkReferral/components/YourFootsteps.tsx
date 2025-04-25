import React from 'react';
import s from '../HowItWorkReferral.module.css';
const YourFootsteps: React.FC = () => {
	return (
		<div className={s.footstepsContainer}>
			<h2>Your footsteps</h2>
			<div className={s.step}>
				<span className={s.stepNumber}>1</span>
				<p>
					Copy or send your referral link to your friends, coworkers, family or
					spread it around your social networks
				</p>
			</div>
			<div className={s.step}>
				<span className={s.stepNumber}>2</span>
				<p>
					Users who come to our platform through your referral link will be
					assigned to your group for all time
				</p>
			</div>
			<div className={s.step}>
				<span className={s.stepNumber}>3</span>
				<p>
					If a user buys a subscription to the Azamaza project, you as his
					referral get a certain percentage of the amount he spent on the
					subscription
				</p>
			</div>
			<div className={s.step}>
				<span className={s.stepNumber}>4</span>
				<p>
					The more referrals you have the more money you can get as a result.
					You can spend these funds both to buy our subscription and to pay for
					services and facilities
				</p>
			</div>
		</div>
	);
};

export default YourFootsteps;
