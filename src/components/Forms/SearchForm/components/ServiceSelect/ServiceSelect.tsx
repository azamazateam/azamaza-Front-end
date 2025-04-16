import React, {ReactNode, useState} from 'react';
import Select, {SingleValue} from 'react-select';
import {BsCaretDown, BsSearch} from 'react-icons/bs';
import {components} from 'react-select';
export type Option = {value: string; label: string; icon: ReactNode};
export type Options = Option[];
import s from '../../SearchForm.module.css';
import {options} from './selectData.tsx';
import {useTranslation} from 'react-i18next';
import {useFormikContext} from 'formik';

type Props = {
	fieldName: string;
};
const ServiceSelect: React.FC<Props> = ({fieldName}) => {
	const {setFieldValue} = useFormikContext();
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

	const onChangeFn = (newValue: SingleValue<Option> | null) => {
		setValue(newValue);
		setFieldValue(fieldName, newValue?.value.toLocaleLowerCase());
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
					IndicatorSeparator: () => null,
					DropdownIndicator,
				}}
			/>
		</>
	);
};

export default ServiceSelect;
