import React, {useState} from 'react';
import Select, {ActionMeta, MultiValue, SingleValue} from 'react-select';
import {BsCaretDown, BsSearch} from 'react-icons/bs';

export type Option = {value: string; label: string};
export type Options = Option[];

const ServiceSelect: React.FC = () => {
	const [value, setValue] = useState<any>(undefined);
	const defaultValue: Option | undefined = {
		value: 'asdasdasd',
		label: 'asdasdasd',
	};
	const options: Options = [
		{
			value: 'value',
			label: 'label',
		},
	];
	const onChangeFn = (
		newValue: SingleValue<Option> | MultiValue<Option> | null,
		actionMeta: ActionMeta<Option>,
	) => {
		setValue(newValue);
	};
	return (
		<>
			<Select
				isClearable={false}
				isSearchable={false}
				onChange={onChangeFn}
				defaultValue={defaultValue}
				options={options}
				value={value}
				components={{
					IndicatorSeparator: () => <BsCaretDown size={18} />,
					DropdownIndicator: () => <BsSearch size={18} />,
					//DropdownIndicator: () => <BsCaretDown size={18} />,
				}}
			/>
		</>
	);
};

export default ServiceSelect;
