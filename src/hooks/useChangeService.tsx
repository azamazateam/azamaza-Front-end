import {useNavigate} from 'react-router-dom';

export const useChangeService = (id: number | string) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/service-card/${id}`);
	};
	return {handleClick};
};

export default useChangeService;
