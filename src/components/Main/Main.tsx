import React, {ReactNode} from 'react';
import s from './main.module.css';
interface MainProps {
	children: ReactNode;
}
const Main: React.FC<MainProps> = ({children}) => {
	return (
		<main>
			<section className={s.pageWrapper}>{children}</section>
		</main>
	);
};

export default Main;
