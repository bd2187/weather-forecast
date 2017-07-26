import React from 'react';
import PropTypes from 'prop-types';
import ChangeUnitContainer from '../containers/ChangeUnitContainer';

function CurrentTemp ({currentTemp, unit, location}) {
  if (Object.keys(currentTemp).length === 0) {
    return (
      <div className="currentTempBox">
        <div className="currentTemp">
          <p className="todayText">Today</p>
        </div>
      </div>
    )
  }
  return (
    <div className="currentTempBox">
      <div className="currentTemp">
        <p className="todayText">Today</p>
        <h1>{location}</h1>
        <img src={currentTemp.condition.icon}/>
        {unit === 'F'
          ? <p className="tempText">{currentTemp.temp_f} &deg;{unit}</p>
          : <p className="tempText">{currentTemp.temp_c} &deg;{unit}</p>
        }
        <p className="currentCondition">{currentTemp.condition.text}</p>
        <ChangeUnitContainer />
      </div>
    </div>
  )
}

export default CurrentTemp;
