import React, { useState } from 'react';
import '../Styles/Slider.css';

function Slider() {
  const [isOn, setIsOn] = useState(0);

  const toggle = () => {
    setIsOn(prev => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="slider-wrapper">
      <div className="toggle-container" onClick={toggle}>
        <div className={`toggle-switch ${isOn ? 'on' : 'off'}`}>
          <div className="toggle-circle" />
        </div>
      </div>
    </div>
  );
}

export default Slider;

