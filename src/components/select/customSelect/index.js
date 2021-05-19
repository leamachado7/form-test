import React from 'react';
import './index.scss'
import arrow from '../../../assets/text-expand-arrow.svg'

const DEFAULT_OPTION = '- SELECT ONE -'
export const CustomSelect = ({ open, onClick, options, selectedOption, onSelect }) => (
  <div className={`custom-select-wrapper ${open ? 'custom-select-wrapper-open' : 'custom-select-wrapper-closed'}`} >
    <div className='custom-select'>
      <div className="custom-select-trigger" onClick={() => onClick()}>
        {
          !selectedOption?.value && <span>{DEFAULT_OPTION}</span>
        }
        {
          selectedOption && (<span key={selectedOption.value} className={'selected-span'}>
            {selectedOption.label}
          </span>)
        }
        <img className={`${open ? 'arrow-open' : 'arrow'}`} src={arrow} alt='open arrow' />
      </div>
      <div className={`scrollable ${open ? 'custom-options-open' : 'custom-options'}`}>
        {
          options.map(o =>
            <span key={o.value} onClick={() => onSelect(o)} className={`custom-option ${selectedOption.value === o.value ? 'selected' : ''}`}>
              {o.label}
            </span>
          )
        }
      </div>
    </div>
  </div>
)
export default CustomSelect;
