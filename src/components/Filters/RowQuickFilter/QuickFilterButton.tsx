import React from 'react';

import s from './RowQuickFilter.module.css';
import {QuickRowFilterType} from '../../../redux/slices/filtersSlice.ts';
type Props = {
	filter: QuickRowFilterType;
	callback?: () => void;
};
const QuickFilterButton: React.FC<Props> = ({filter, callback}) => {
	return (
		<button className={s.container} onClick={callback}>
			{filter.name} {filter?.value ? `(${filter.value})` : ''}
		</button>
	);
};

export default QuickFilterButton;
