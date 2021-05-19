import React from 'react'
import './index.scss'
import check from '../../assets/check.svg'
export const Checkbox = ({ label, required, onChange, value, field }) => {
	const toggleState = () => {
		onChange(field, !value)
	}
	return (
		<div className="checkbox-container">
			<div className={ !value ? 'custom-checkbox-active' : 'custom-checkbox'} onClick={toggleState}>
				<img className="img-check" alt="checkbox" src={check} />
			</div>
			<label className="checkbox-title">
				{label} {required ? '*' : ''}
			</label>
		</div>
	)
}

export default Checkbox
