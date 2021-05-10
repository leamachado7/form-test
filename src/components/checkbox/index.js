import React from 'react';
import './index.scss';
import check from '../../assets/check.svg';
export const Checkbox = ({ label, required, onChange, value, field }) => {
	const toggleState = () => {
		onChange(field, !value);
	};
	return (
		<div className="checkbox-container">
			<div className="custom-checkbox" onClick={toggleState}>
				{value && <img className="img-check" alt="alternative" src={check} />}
			</div>
			<label className="checkbox-title">
				{label} {required ? '*' : ''}
			</label>
		</div>
	);
};
export default Checkbox;
