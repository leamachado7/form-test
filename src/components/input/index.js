import React from 'react'
import './index.scss'

export const Input = ({ field, type, onChange, label, required, disabled, minLength, value }) => {
  const onChanged = e => {
    onChange(field, e.target.value)
  }
  return (
    <div className="cmp-input-container">
      <label className='cmp-input-label'>{label} {required ? '*' : ''}</label>
      <input className='cmp-input' value={value} onChange={onChanged} minLength={minLength} disabled={disabled} type={type} />
    </div>
  )
}
export default Input
