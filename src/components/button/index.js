import React from 'react'
import './index.scss'
const TYPE_SUBMIT = 'submit'

export const Button = ({ onClick, type, disabled, children }) => (
	<button
		disabled={disabled}
		onClick={onClick}
		className={`${type === TYPE_SUBMIT ? 'btn-submit' : ''} cmp-button ${disabled ? 'btn-disabled' : ''}`}>
			{children}
	</button>
)
export default Button
