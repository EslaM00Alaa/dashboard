import React, { useState, useEffect } from 'react';
import './switch.css';
import { X, Check } from "react-bootstrap-icons";
import openClose from '../../Api/opencloseRegisteration';

const Switch = ({ checkedState }) => {
  const [checked, setChecked] = useState(checkedState);

  useEffect(() => {
    setChecked(checkedState);
  }, [checkedState]);

  return (
    <label className="switch-label">
      <input 
        onChange={ async() => {setChecked(!checked); await openClose(!checked)}} 
        className="toggle-checkbox" 
        type="checkbox" 
        checked={checked} 
      />
      <div className={`toggle-switch ${checked ? 'checked' : 'unchecked'}`}>
        <span className="switch-icon unchecked-icon"><X /></span>
        <span className="switch-icon checked-icon"><Check /></span>
      </div>
    </label>
  );
};

export default Switch;
