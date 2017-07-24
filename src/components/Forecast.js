import React from 'react';
import PropTypes from 'prop-types';

function dayOfWeek (date) {
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var d = new Date(date)
  // console.log(d)
  return days[d.getDay()];
}

function temp (minTemp, maxTemp, unit) {
  return (
    <div>
      <p>Min: {minTemp} &deg;{unit}</p>
      <p>Max: {maxTemp} &deg;{unit}</p>
    </div>
  )
}

function Day ({day, unit}) {
  return (
    <li>
      <img src={day.day.condition.icon}/>
      <p>{dayOfWeek(day.date)}</p>
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
        ? <p>{error}. Try another search.</p>
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
