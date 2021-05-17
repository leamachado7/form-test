import React from 'react';
import './index.scss';
const TYPE_SUBMIT = 'submit'
export const Button = ({ type,  children }) => {

	return (
		<button className={`${type === TYPE_SUBMIT ? 'btn-submit' : ''} cmp-button`}>{children}</button>
	);
};
export default Button;
