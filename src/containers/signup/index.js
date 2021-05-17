import React, { useState, useEffect } from 'react';
import './index.scss';
import { FORM_KEYS, FORM_LABELS, SELECT_OPTIONS, INPUT_TYPES } from '../../global/constants';
import Button from '../../components/button'
import Input from '../../components/input';
import Select from '../../components/select';
import Checkbox from '../../components/checkbox';
export const Signup = () => {
	const [form, setForm] = useState({
		firstName: '',
		lastNAme: '',
		email: '',
		advances: false,
		alerts: false,
		comms: false,

	});
	const onChange = (field, value) => {
		const newForm = { ...form };
		newForm[field] = value;
		setForm(newForm);
	};
	useEffect(
		() => {
			console.log(form);
		},
		[form]
	);
	return (
		<div className="page">
			<div className="container">
				<div className="header">
					<h1 className="header-title">Sign up for email updates</h1>
					<p className="header-subtitle">*Indicates Required Field</p>
				</div>
				<div className="form-layout">
					<div className="input-container">
						<Input field='firstName' value={form.firstName} onChange={onChange} type={INPUT_TYPES.TEXT} label={FORM_LABELS.FIRST_NAME} required minLength="3" />
						<Input field='lastName' value={form.lastName} onChange={onChange} type={INPUT_TYPES.TEXT} label={FORM_LABELS.LAST_NAME} required minLength="3" />
						<Input field='email' value={form.email} onChange={onChange} type={INPUT_TYPES.EMAIL} label={FORM_LABELS.EMAIL} required minLength="3" />
						<Input field='organization' value={form.organization} onChange={onChange} type={INPUT_TYPES.TEXT} label={FORM_LABELS.ORGANIZATION} />
					</div>
					<div className="select-container">
						<Select label={FORM_LABELS.EU_RESIDENT} options={SELECT_OPTIONS}  required />
					</div>
					<div className="checkbox-wrapper">
						<Checkbox
							field="advances"
							onChange={onChange}
							value={form.advances}
							label={FORM_KEYS.ADVANCES}
						/>
						<Checkbox
							field="alerts"
							onChange={onChange}
							value={form.alerts}
							label={FORM_KEYS.ALERTS}
						/>
						<Checkbox
							field="comms"
							onChange={onChange}
							value={form.comms}
							label={FORM_KEYS.COMMS} />
					</div>
					<div className="btn-container">
						<Button type='submit'>SUBMIT</Button>
						<Button>RESET</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
