import React from "react"
import './index.scss'
export const Input = ({ label, required, disabled, minLength }) => {
  return (
    <div className="cmp-input-container">
      <label className='cmp-input-label'>{label} {required ? '*' : ''}</label>
      <input minLength={minLength} disabled={disabled} className='cmp-input' type='text' />
    </div>
  )
}
export default Input
