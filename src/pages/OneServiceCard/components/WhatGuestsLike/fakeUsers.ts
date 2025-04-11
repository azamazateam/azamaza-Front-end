import user1 from '../../../../assets/images/FakeUsers/Ellipse.jpg';
import user2 from '../../../../assets/images/FakeUsers/Ellipse 2093.jpg';
export type FakeUser = {
	id: string;
	name: string;
	date: string;
	comment: string;
	avatar: string; // New avatar field
};

export const fakeUsers: FakeUser[] = [
	{
		id: '70c90124-f4f3-490a-94a7-fd8794137ced',
		name: 'Jason Williams',
		date: '12 November 2024',
		comment:
			'Staff true coach reach look black peace. Already movie wife often hit edge yet such. We local positive red. Remain member lay for give response save.',
		avatar: user1, // Avatar URL
	},
	{
		id: '0fba5b01-71b0-4862-a13d-15d5e7514ec4',
		name: 'Brandi Rodriguez',
		date: '12 November 2024',
		comment:
			'Prove where window majority ask. Challenge position yes hit society. Personal continue poor we. Best practice drug bag nation run word go.',
		avatar: user2,
	},
	{
		id: '09a7c57b-626f-4fb6-b1ab-ee8b4123f5ac',
		name: 'Heather Rivas',
		date: '12 November 2024',
		comment:
			'Sport city watch suffer see poor. Dinner what above air fall every affect. On human say pull memory. Inside state several state thank paper control.',
		avatar: user1,
	},
	{
		id: '74d832aa-a0a3-47d3-a974-42ee196b236a',
		name: 'William Lee',
		date: '12 November 2024',
		comment:
			'System campaign speech check value discuss hit. Call radio sister ground public grow. Take huge above sign sell. Job public recently affect coach build such. Long visit learn rest seven.',
		avatar: user2,
	},
	{
		id: '11f1b7ae-8caa-4736-a220-ae08461ae67b',
		name: 'Bill Hamilton',
		date: '12 November 2024',
		comment:
			'Bag network worry prove focus another draw sea. Easy news fine item work young especially. Must help arrive middle star finish order. Tv store test.',
		avatar: user2,
	},
];
