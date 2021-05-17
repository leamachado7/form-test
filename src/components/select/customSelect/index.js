import React from "react";
import './index.scss'
import arrow from '../../../assets/text-expand-arrow.svg'
export const CustomSelect = ({ open, onClick, options, selectedOption, onSelect }) => {
  
  return (
    <div className={`${open ? "custom-select-wrapper-open" : "custom-select-wrapper"}`} >
      <div className='custom-select'>
        <div className="custom-select__trigger">
          <span>- SELECT ONE -</span>
          <img className={`${open ? 'arrow-open' : 'arrow' }`} src={arrow} alt='' onClick={() => onClick()}/>
        </div>
        <div className={`scrollable ${open ? 'custom-options-open' : 'custom-options'}`}>
          {
            options.map(o =>
              <span  onClick={() => onSelect(o)} className={`custom-option ${selectedOption.value === o.value ? 'selected' : ''}`}>
                {o.label}
              </span>
            )
          }
        </div>
      </div>
    </div>
  );
};
export default CustomSelect;
