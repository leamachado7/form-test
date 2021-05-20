import React, { useState } from 'react'
import { toast } from 'react-toastify'
import './index.scss'

import Button from '../../components/button'
import Input from '../../components/input'
import Select from '../../components/select'
import Checkbox from '../../components/checkbox'
import Loading from '../../components/loading'

import { signUp } from '../../services/registerService'
import { validateForm, checkEmail, checkName } from '../../global/utils'

import {
	FORM_KEYS,
	FORM_LABELS,
	SELECT_OPTIONS,
	INPUT_TYPES,
} from '../../global/constants'

import {
	DEFAULT_FORM,
	RESET,
	CONGRATS,
	TXT_RESET,
	TXT_SUBMIT,
	MIN, DEFAULT_ERRORS, REQUIRED_FIELDS
} from './constants'

export const Signup = () => {
	const [loading, setLoading] = useState()
	const [errors, setErrors] = useState(DEFAULT_ERRORS);
	const [form, setForm] = useState(DEFAULT_FORM)

	const onChange = (field, value) => {
		const newForm = { ...form }
		newForm[field] = value
		setForm(newForm)
	}
	const onReset = () => {
		setForm(DEFAULT_FORM)
		setErrors(DEFAULT_ERRORS)
		toast.info(RESET)
	}
	const onSubmit = (a) => {
		const newErrors = validateForm(form, REQUIRED_FIELDS);
		setErrors(newErrors)
		const validEmail = checkEmail(form.email)
		if (!validEmail) {
			newErrors.email = "There is an error with the email"
		}
		const validName = checkName(form.firstName)
		if (!validName)
			newErrors.firstName = 'The first name has errors'
		const validLastName = checkName(form.lastName)
		if (!validLastName)
			newErrors.lastName = 'The last name has errors'
		const invalid = Object.keys(newErrors).length > 0
		setErrors(newErrors)
		if (invalid) {
			toast.error("The form has errors");
			return
		}
		setLoading(true)
		signUp(form)
			.then(() => {
				toast.success(CONGRATS)
			})
			.catch((error) => console.error(error))
			.finally(() => {
				setLoading(false)
			})
	}
	const keyPress = e => {
		if (e.key === 'Enter') {
			onSubmit();
		}
	}
	return (
		<div className="page">
			<div className="container">
				<div className="header">
					<h1 className="header-title">Sign up for email updates</h1>
					<p className="header-subtitle">*Indicates Required Field</p>
				</div>
				<div className="form-layout" onKeyPress={keyPress}>
					<div className="input-container">
						<Input
							field="firstName"
							value={form.firstName}
							onChange={onChange}
							type={INPUT_TYPES.TEXT}
							label={FORM_LABELS.FIRST_NAME}
							required
							minLength={MIN}
							errors={errors}
						/>
						<Input
							field="lastName"
							value={form.lastName}
							onChange={onChange}
							type={INPUT_TYPES.TEXT}
							label={FORM_LABELS.LAST_NAME}
							required
							minLength={MIN}
							errors={errors}
						/>
						<Input
							field="email"
							value={form.email}
							onChange={onChange}
							type={INPUT_TYPES.EMAIL}
							label={FORM_LABELS.EMAIL}
							required
							minLength={MIN}
							errors={errors}
						/>
						<Input
							field="organization"
							value={form.organization}
							onChange={onChange}
							type={INPUT_TYPES.TEXT}
							label={FORM_LABELS.ORGANIZATION}
						/>
					</div>
					<div className="select-container">
						<Select
							label={FORM_LABELS.EU_RESIDENT}
							options={SELECT_OPTIONS}
							onSelectOption={(o) => onChange('euResident', o.value)}
							required
							field='euResident'
							errors={errors}
						/>
					</div>
					<div className="checkbox-wrapper">
						<Checkbox
							field="advances"
							onChange={onChange}
							value={form.advances}
							label={FORM_KEYS.ADVANCES}
							required
							errors={errors}
						/>
						<Checkbox
							field="alerts"
							onChange={onChange}
							value={form.alerts}
							label={FORM_KEYS.ALERTS}
						/>
						<Checkbox
							field="others"
							onChange={onChange}
							value={form.others}
							label={FORM_KEYS.COMMS}
						/>
					</div>
					<div className="btn-container">
						<Button onClick={onSubmit} disabled={loading} type="submit">
							{TXT_SUBMIT}
						</Button>
						<Button disabled={loading} onClick={onReset} type='button'>
							{TXT_RESET}
						</Button>
					</div>
					<div className="loading-container">{loading && <Loading />}</div>
				</div>

			</div>
		</div>
	)
}

export default Signup
