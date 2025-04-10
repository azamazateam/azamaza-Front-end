import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Select, {components, MultiValue, SingleValue} from 'react-select';
import {BsSearch} from 'react-icons/bs';
import s from './SearchLocationSelect.module.css';
export type Option = {
	label: string;
	value: string;
};

const SearchLocationSelect: React.FC = () => {
	const {t} = useTranslation();
	const [value, setValue] = useState<any>(undefined);
	const customStyles = {
		control: (base: any) => ({
			...base,
			height: '50px',
			paddingLeft: '16px',
		}),
	};

	const onChangeFn = (
		newValue: SingleValue<Option> | MultiValue<Option> | null,
	) => {
		setValue(newValue);
	};
	const Placeholder = (props: any) => {
		return (
			<components.Placeholder {...props}>
				<div className={s.placeholder}>
					<BsSearch size={18} />
					{props.children}
				</div>
			</components.Placeholder>
		);
	};
	const SingleValue = (props: any) => {
		const {data, innerRef, innerProps} = props;
		return (
			<components.SingleValue {...props}>
				<div ref={innerRef} {...innerProps} className={s.singleValueContainer}>
					{data.icon}
					{props.data.label}
				</div>
			</components.SingleValue>
		);
	};
	const Menu = (props: any) => {
		return (
			<components.Menu {...props}>
				<div className={s.menu}>{props.children}</div>
			</components.Menu>
		);
	};
	const Option = (props: any) => {
		const {data, innerRef, innerProps} = props;

		return (
			<div ref={innerRef} {...innerProps} className={s.option}>
				{data.icon && <span className={s.icon}>{data.icon}</span>}
				{data.label}
			</div>
		);
	};
	const options = [
		{
			value: '',
			label: '',
		},
	];
	return (
		<>
			<Select
				className={s.select}
				isClearable={false}
				isSearchable={false}
				onChange={onChangeFn}
				options={options}
				styles={customStyles}
				menuPortalTarget={document.body}
				value={value}
				placeholder={t('A service, a meeting, an offer')}
				components={{
					SingleValue,
					Menu,
					Option,
					Placeholder,
					IndicatorSeparator: () => null,
					DropdownIndicator: () => null,
				}}
			/>
		</>
	);
};

export default SearchLocationSelect;
