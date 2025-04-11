import axios from 'axios';

export type Option = {
	label: string;
	value: string;
};

export const fetchLocations = async (inputValue: string): Promise<Option[]> => {
	if (!inputValue) return [];

	try {
		const response = await axios.get(
			'https://nominatim.openstreetmap.org/search',
			{
				params: {
					format: 'json',
					addressdetails: 1,
					limit: 5,
					q: inputValue,
				},
				headers: {
					'User-Agent': 'azamaza/1.0 (sendega89@gmail.com)', // важно для nominatim
				},
			},
		);

		return response.data.map((item: any) => ({
			label: item.display_name,
			value: item.place_id,
		}));
	} catch (error) {
		console.error(error);
		return [];
	}
};
