import React, { useState } from 'react';
import './switch.css';
import { X, Check } from "react-bootstrap-icons";

const Switch = () => {
const [checked, setchecked] = useState(false);
  return (
    <label className="switch-label">
      <input onChange={()=>setchecked(!checked)} className="toggle-checkbox" type="checkbox" />
      <div className={`toggle-switch ${checked ? 'checked' : 'unchecked'} `}>
        <span className="switch-icon unchecked-icon"><X /></span>
        <span className="switch-icon checked-icon"><Check /></span>
      </div>
    </label>
  );
};

export default Switch;
