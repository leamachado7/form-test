import React from 'react'
import './index.scss'
import check from '../../assets/check.svg'
export const Checkbox = ({ label, required, onChange, value, field, errors }) => {
	const toggleState = () => {
		onChange(field, !value)
	}
	return (
		<>
			<div className="checkbox-container">
				<div className={!value ? 'custom-checkbox-active' : 'custom-checkbox'} onClick={toggleState}>
					<img className="img-check" alt="checkbox" src={check} />
				</div>
				<label className={'checkbox-title ' + (	(errors && errors[field])  ? 'label-error' : '') }>
					{label} {required ? '*' : ''}
				</label>
			</div>
		</>

	)
}

export default Checkbox
