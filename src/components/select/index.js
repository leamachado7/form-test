import React, { useEffect, useState } from "react";
import "./index.scss";
export const DEFAULT_OPTION = "- SELECT ONE -";
export const Select = ({
  id = "custom-dropdown",
  label = "label",
  options = ["Yes", "No"]
}) => {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    if (!data) {
     if(!selected) {
      setData([DEFAULT_OPTION, ...options])
     }
    }
  }, [options,data,selected]);
  const onChange = (e) => {
    setData(data.filter(f=> f !== DEFAULT_OPTION))
    setSelected(e.target.value)
  }
  return (
    <div className="custom-select-container">
      <label>{label}</label>
      {data && (
        <select onChange={onChange} className="custom-select" name={id} id={id}>
          {data.map((o) => (
            <option className="custom-option" key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
export default Select;
