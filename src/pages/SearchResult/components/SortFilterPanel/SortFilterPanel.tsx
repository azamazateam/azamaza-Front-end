import React from 'react';
import SortFilterButton from '../../../../components/Buttons/SortFilterButton/SortFilterButton.tsx';
import {useTranslation} from 'react-i18next';
import {BsArrowDown, BsArrowUp, BsFilterCircle, BsMap} from 'react-icons/bs';
import s from './SortFilterPanel.module.css';
const SortFilterPanel: React.FC = () => {
	const {t} = useTranslation();
	return (
		<div className={s.container}>
			<SortFilterButton
				text={t('Sort')}
				type={'button'}
				icon={
					<div style={{display: 'flex'}}>
						<BsArrowUp
							size={20}
							color={'#006CE4'}
							style={{marginRight: '-10px'}}
						/>
						<BsArrowDown size={20} color={'#006CE4'} />
					</div>
				}
			/>
			<SortFilterButton
				text={t('Filters')}
				type={'button'}
				icon={<BsFilterCircle size={20} color={'#006CE4'} />}
			/>
			<SortFilterButton
				text={t('Map')}
				type={'button'}
				icon={<BsMap size={20} color={'#006CE4'} />}
			/>
		</div>
	);
};

export default SortFilterPanel;
