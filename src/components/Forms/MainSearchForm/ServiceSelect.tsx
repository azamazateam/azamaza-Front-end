import React, {ReactNode, useState} from 'react';
import Select, {MultiValue, SingleValue} from 'react-select';
import {BsCaretDown, BsSearch} from 'react-icons/bs';
import {components} from 'react-select';
export type Option = {value: string; label: string; icon: ReactNode};
export type Options = Option[];
import s from './MainSearchForm.module.css';
import {options} from './selectData.tsx';
import {useTranslation} from 'react-i18next';

const ServiceSelect: React.FC = () => {
	const {t} = useTranslation();
	const [value, setValue] = useState<any>(undefined);
	const customStyles = {
		control: (base: any) => ({
			...base,
			minHeight: '42px', // <-- регулируешь высоту
			height: '42px',
			padding: '0px',
		}),
		valueContainer: (base: any) => ({
			...base,
			padding: '0px 8px', // <-- регулируешь отступ текста
			height: '42px',
		}),
		input: (base: any) => ({
			...base,
			margin: '0px', // <-- убирает отступ внутри инпута
			padding: '0px',
		}),
		indicatorsContainer: (base: any) => ({
			...base,
			height: '42px', // <-- иконки по высоте подгоняем
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
	const DropdownIndicator = (props: any) => {
		return (
			<components.DropdownIndicator {...props}>
				<div className={s.dropdownIndicator}>
					<BsCaretDown size={18} />
					{props.children}
				</div>
			</components.DropdownIndicator>
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
	return (
		<>
			<Select
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
					IndicatorSeparator: () => null /*<BsCaretDown size={18} />*/,
					DropdownIndicator, //: () => <BsCaretDown size={18} />, // <BsSearch size={18} />,
					//DropdownIndicator: () => <BsCaretDown size={18} />,
				}}
			/>
		</>
	);
};

export default ServiceSelect;
