import React, { useState, useEffect  } from 'react';
import './index.scss';
import { FORM_KEYS, FORM_LABELS, SELECT_OPTIONS, INPUT_TYPES } from '../../global/constants';

import Input from '../../components/input';
import CustomSelect from '../../components/select';
import Checkbox from '../../components/checkbox';
export const Signup = () => {
  const [form, setForm] = useState({

  })
  const onChangeCheckbox = (field, value) => {
    const newForm = {...form}
    newForm[field] = value;
    setForm(newForm)
  }
  useEffect(() => {
    console.log(form)
  }, [form])
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
						<Checkbox onChange={onChangeCheckbox} value={form.advances} field='advances' label={FORM_KEYS.ADVANCES} />
						<Checkbox onChange={onChangeCheckbox} value={form.alerts} field='alerts' label={FORM_KEYS.ALERTS} />
						<Checkbox onChange={onChangeCheckbox} value={form.comms} field='comms' />
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
