import React, { Fragment } from 'react';
import { components } from 'react-select';
import arrow from '../../assets/text-expand-arrow.svg';
export const indicatorSeparatorStyle = {
	alignSelf: 'stretch',
	backgroundColor: 'transparent',
	marginBottom: 8,
	marginTop: 8,
	width: 1
};

const getArrowStyle = (isOpen) => {
	return isOpen ? { transform: 'rotate(90deg)' } : { transform: 'rotate(0deg)' };
};
export const DropdownIndicator = (props) => {
	return (
		<components.DropdownIndicator {...props}>
			<img style={getArrowStyle(props.selectProps.menuIsOpen)} width="20px" height="20px" src={arrow} alt="" />
		</components.DropdownIndicator>
	);
};

export const IndicatorSeparator = ({ innerProps }) => {
	return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

export const options = [
	{
		value: 'YES',
		label: 'YES'
	},
	{
		value: 'NO',
		label: 'NO'
	}
];

function getLength(options) {
	return options.reduce((acc, curr) => {
		if (curr.options) return acc + getLength(curr.options);
		return acc + 1;
	}, 0);
}

export const CustomOption = ({ innerProps, isDisabled, children }) =>
	!isDisabled ? (
		<div className="cmp-option" {...innerProps}>
			{children}
		</div>
	) : null;

export const Menu = (props) => {
	const optionsLength = getLength(props.options);
	return (
		<Fragment>
			<components.Menu {...props}>{props.children}</components.Menu>
		</Fragment>
	);
};
