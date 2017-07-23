import React from 'react';
import PropTypes from 'prop-types';

function CurrentTemp ({currentTemp, unit}) {
  if (Object.keys(currentTemp).length === 0) {
    return null;
  }
  return (
    <div>
      <p>{currentTemp.temp_f} {unit}</p>
      <img src={currentTemp.condition.icon}/>
    </div>
  )
}

export default CurrentTemp;
