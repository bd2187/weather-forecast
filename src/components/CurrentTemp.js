import React from 'react';
import PropTypes from 'prop-types';
import ChangeUnitContainer from '../containers/ChangeUnitContainer';

function CurrentTemp ({currentTemp, unit, location}) {
  if (Object.keys(currentTemp).length === 0) {
    return (
      <div className="currentTemp">
        <p className="todayText">Today</p>
      </div>
    )
  }
  return (
    <div>

      <div className="currentTemp">
        <p className="todayText">Today</p>
        <h1>{location}</h1>
        <img src={currentTemp.condition.icon}/>
        {unit === 'F'
          ? <p className="tempText">{currentTemp.temp_f} &deg;{unit}</p>
          : <p className="tempText">{currentTemp.temp_c} &deg;{unit}</p>
        }
        <ChangeUnitContainer />
      </div>
    </div>
  )
}

export default CurrentTemp;
