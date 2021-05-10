import React, { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import { DropdownIndicator, CustomOption,  IndicatorSeparator, options, IndicatorContainer, Menu  } from './helper';
import './index.scss';
export const DEFAULT_OPTION = '- SELECT ONE -';

export const CustomSelect = ({ label, required }) => {
	return (
		<div className="cmp-select-container">
			<label className="cmp-input-label">
				{label}
				{required ? '*' : ''}
			</label>
			<Select
				className="cmp-select"
				placeholder="- SELECT ONE -"
				options={options}
				components={{ DropdownIndicator, IndicatorSeparator, Option: CustomOption, Menu  }}
			/>
		</div>
	);
};
export default CustomSelect;
