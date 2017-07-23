import React from 'react';
import PropTypes from 'prop-types';

function CurrentTemp ({currentTemp, unit, location}) {
  if (Object.keys(currentTemp).length === 0) {
    return null;
  }
  return (
    <div>
      <h1>Current temperature for {location}</h1>
      <p>{currentTemp.temp_f} {unit}</p>
      <img src={currentTemp.condition.icon}/>
    </div>
  )
}

export default CurrentTemp;
