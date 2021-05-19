import React from 'react'
import './index.scss'

export const Input = ({ field, type, onChange, label, required, disabled, minLength, value, errors }) => {
  const onChanged = e => {
    onChange(field, e.target.value)
  }
  return (
    <div className="cmp-input-container">
      <label className='cmp-input-label'>{label} {required ? '*' : ''}</label>
      <input className='cmp-input' value={value} onChange={onChanged} minLength={minLength} disabled={disabled} type={type} />
      {
        (errors && errors[field]) && (<label className='cmp-error-label'>{errors[field]}</label>)
      }
    </div>
  )
}
export default Input
