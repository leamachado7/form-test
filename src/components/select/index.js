import React, { useEffect, useState } from 'react';

import './index.scss';
import CustomSelect from './customSelect'

export const Select = ({ label, required, options }) => {
	const [option, setOption] = useState({value: '', label: ''})
	const [open, setOpen ] = useState(false);
	const onClick = () => {
		setOpen(!open);
		console.log('set ', !open);
	}
	const onSelect = (o) => {
		setOption(o)
	}
	return (
		<div className="cmp-select-container">
			<label className="cmp-input-label">
				{label}
				{required ? '*' : ''}
			</label>
			<CustomSelect onSelect={onSelect} selectedOption={option} options={options} open={open} onClick={onClick} />
		</div>
	);
};
export default Select;
