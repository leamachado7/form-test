import React from "react"
import './index.scss'
export const Input = ({ label, required }) => {
  return (
    <div className="cmp-input-container">
      <label className='cmp-input-label'>{label} {required ? '*' : ''}</label>
      <input className='cmp-input' type='text' />
    </div>
  )
}
export default Input
