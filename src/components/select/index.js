import React, { useState } from 'react';

import './index.scss';
import CustomSelect from './customSelect'

export const Select = ({ label, required, options, onSelectOption, errors, field }) => {
	const [option, setOption] = useState({ value: '', label: '' })
	const [open, setOpen ] = useState(false);
	const onClick = () => {
		setOpen(!open);
	}
	const onSelect = (o) => {
		setOption(o)
		onSelectOption(o)
	}
	return (
		<div className="cmp-select-container">
			<label className="cmp-input-label">
				{label}
				{required ? '*' : ''}
			</label>
			<CustomSelect onSelect={onSelect} selectedOption={option} options={options} open={open} onClick={onClick} />
			{
				errors && errors[field] && (	<label className="margin-top-20 cmp-error-label">{errors[field]}</label>)
			}
		</div>
	);
};
export default Select;
