import React, { useState } from 'react'
import { toast } from 'react-toastify'
import './index.scss'

import Button from '../../components/button'
import Input from '../../components/input'
import Select from '../../components/select'
import Checkbox from '../../components/checkbox'
import Loading from '../../components/loading'

import { signUp } from '../../services/registerService'

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
  MIN,
} from './constants'

export const Signup = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState(DEFAULT_FORM)
  const onChange = (field, value) => {
    const newForm = { ...form }
    newForm[field] = value
    setForm(newForm)
  }

  const onReset = () => {
    setForm(DEFAULT_FORM)
    toast.info(RESET)
  }
  const onSubmit = () => {
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
  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <h1 className="header-title">Sign up for email updates</h1>
          <p className="header-subtitle">*Indicates Required Field</p>
        </div>
        <div className="form-layout">
          <div className="input-container">
            <Input
              field="firstName"
              value={form.firstName}
              onChange={onChange}
              type={INPUT_TYPES.TEXT}
              label={FORM_LABELS.FIRST_NAME}
              required
              minLength={MIN}
            />
            <Input
              field="lastName"
              value={form.lastName}
              onChange={onChange}
              type={INPUT_TYPES.TEXT}
              label={FORM_LABELS.LAST_NAME}
              required
              minLength={MIN}
            />
            <Input
              field="email"
              value={form.email}
              onChange={onChange}
              type={INPUT_TYPES.EMAIL}
              label={FORM_LABELS.EMAIL}
              required
              minLength={MIN}
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
            />
          </div>
          <div className="checkbox-wrapper">
            <Checkbox
              field="advances"
              onChange={onChange}
              value={form.advances}
              label={FORM_KEYS.ADVANCES}
              required
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
            <Button disabled={loading} type="submit" onClick={onSubmit}>
              {TXT_SUBMIT}
            </Button>
            <Button disabled={loading} onClick={onReset}>
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
