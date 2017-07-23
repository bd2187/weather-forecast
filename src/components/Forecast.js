import React from 'react';
import PropTypes from 'prop-types';

function temp (minTemp, maxTemp, unit) {
  return (
    <div>
      <p>Min: {minTemp} {unit}</p>
      <p>Max: {maxTemp} {unit}</p>
    </div>
  )
}

function Day ({day, unit}) {
  return (
    <li>
      <p>Date: {day.date}</p>
      <img src={day.day.condition.icon}/>
      {(unit === "f")
        ? temp(day.day.mintemp_f, day.day.maxtemp_f, unit)
        : temp(day.day.mintemp_c, day.day.maxtemp_c, unit)
      }
    </li>
  )
}

Day.propTypes = {
  day: PropTypes.object.isRequired
}

function Forecast ({forecast, error, isFetching, unit, tracking}) {
  return (
    <div className="forecast">
      <h1>Forecast</h1>
      { tracking && <p>TRACKING LOCATION</p> }
      { isFetching && <p>Loading Weather</p> }
      { error
        ? <p>Error</p>
        : forecast.map( function(day, index) {
          return (
            <Day
              key={`${index}_day`}
              day={day}
              unit={unit}/>
          )
        } )
      }
    </div>
  )
}

Forecast.propTypes = {
  forecast: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  unit: PropTypes.string.isRequired,
  tracking: PropTypes.bool.isRequired
}

export default Forecast;
