import React from 'react';
import './index.scss';
import { FORM_KEYS, FORM_LABELS, SELECT_OPTIONS, INPUT_TYPES } from '../../global/constants';

import Input from '../../components/input';
import CustomSelect from '../../components/select';
import Checkbox from '../../components/checkbox';
export const Signup = () => {
	return (
		<div className="page">
			<div className="container">
				<div className="header">
					<h1 className="header-title">Sign up for email updates</h1>
					<p className="header-subtitle">*Indicates Required Field</p>
				</div>
				<div className="form-layout">
					<div className="input-container">
						<Input type={INPUT_TYPES.TEXT} label={FORM_LABELS.FIRST_NAME} disabled required minLength="3" />
						<Input type={INPUT_TYPES.TEXT} label={FORM_LABELS.LAST_NAME} required minLength="3" />
						<Input type={INPUT_TYPES.EMAIL} label={FORM_LABELS.EMAIL} required minLength="3" />
						<Input type={INPUT_TYPES.TEXT} label={FORM_LABELS.ORGANIZATION} />
					</div>
					<div className="select-container">
						<CustomSelect label={FORM_LABELS.EU_RESIDENT} options={SELECT_OPTIONS} required />
					</div>
					<div className="checkbox-wrapper">
						<Checkbox id={FORM_KEYS.ADVANCES} label={FORM_KEYS.ADVANCES} />
						<Checkbox id={FORM_KEYS.ALERTS} label={FORM_KEYS.ALERTS} />
						<Checkbox id={FORM_KEYS.COMMS} label={FORM_KEYS.COMMS} />
					</div>
					<div className="btn-container">
						<button className="btn-submit">SUBMIT</button>
						<button className="btn-reset">RESET</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
