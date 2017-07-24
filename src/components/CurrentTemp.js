import React from 'react';
import PropTypes from 'prop-types';

function CurrentTemp ({currentTemp, unit, location}) {
  if (Object.keys(currentTemp).length === 0) {
    return <div className="currentTemp"></div>;
  }
  return (
    <div className="currentTemp">
      <h1>{location}</h1>
      <img src={currentTemp.condition.icon}/>
      {unit === 'f'
        ? <p>{currentTemp.temp_f} &deg;{unit}</p>
        : <p>{currentTemp.temp_c} &deg;{unit}</p>
      }
    </div>
  )
}

export default CurrentTemp;
