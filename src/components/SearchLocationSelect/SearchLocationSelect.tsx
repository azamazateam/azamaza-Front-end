import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {components, SingleValue, ValueContainerProps} from 'react-select';
import {BsGeoAlt, BsSearch} from 'react-icons/bs';
import s from './SearchLocationSelect.module.css';
import {useFormikContext} from 'formik';
import AsyncSelect from 'react-select/async';
import {fetchLocations} from '../../Api/api.ts';

export type Option = {
	label: string;
	value: string;
};
type Props = {
	fieldName: string;
};
const SearchLocationSelect: React.FC<Props> = ({fieldName}) => {
	const {t} = useTranslation();
	const {setFieldValue} = useFormikContext<any>();
	const [value, setValue] = useState<any>(undefined);
	const customStyles = {
		control: (base: any) => ({
			...base,
			height: '50px',
			paddingLeft: '8px',
			backgroundColor: 'var(--Color-Grey-100, #D7D7D9)',
			borderRadius: '30px',
			border: `1px solid var(--Color-Grey-300, #888A90)`,
		}),
		menuPortal: (base: any) => ({...base, zIndex: 50}),
	};

	const onChangeFn = (newValue: SingleValue<Option> | null) => {
		setValue(newValue);
		setFieldValue(fieldName, newValue?.label);
	};

	const ValueContainer = (props: ValueContainerProps<any>) => {
		const {children} = props;
		return (
			<components.ValueContainer {...props}>
				<div className={s.valueContainer}>
					<BsSearch size={20} />
					{children}
				</div>
			</components.ValueContainer>
		);
	};
	/*const Placeholder = (props: any) => {
		return (
			<components.Placeholder {...props}>
				<div className={s.placeholder}>
					<BsSearch size={20} />
					{props.children}
				</div>
			</components.Placeholder>
		);
	};*/
	/*const SingleValue = (props: any) => {
		const {data, innerRef, innerProps} = props;
		return (
			<components.SingleValue {...props}>
				<div ref={innerRef} {...innerProps} className={s.singleValueContainer}>
					<BsSearch size={20} />
					{props.data.label}
				</div>
			</components.SingleValue>
		);
	};*/
	const Menu = (props: any) => {
		return (
			<components.Menu {...props}>
				<div className={s.menu}>{props.children}</div>
			</components.Menu>
		);
	};
	const Option = (props: any) => {
		const {data} = props;
		return (
			<components.Option {...props}>
				<div className={s.option}>
					<span className={s.icon}>
						<BsGeoAlt size={20} />
					</span>
					{data.label}
				</div>
			</components.Option>
		);
	};

	return (
		<>
			<AsyncSelect
				isClearable={true}
				isSearchable={true}
				onChange={onChangeFn}
				/*options={options}*/
				styles={customStyles}
				menuPortalTarget={document.body}
				value={value}
				loadOptions={fetchLocations}
				cacheOptions
				placeholder={t('Destination, city, address')}
				components={{
					ValueContainer,
					Menu,
					Option,
					IndicatorSeparator: () => null,
					DropdownIndicator: () => null,
				}}
			/>
		</>
	);
};

export default SearchLocationSelect;
