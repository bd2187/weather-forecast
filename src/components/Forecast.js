import React from 'react';
import PropTypes from 'prop-types';

function foo (minTemp, maxTemp, unit) {
  return (
    <div>
      <p>Min: {minTemp} {unit}</p>
      <p>Max: {maxTemp} {unit}</p>
    </div>
  )
}

function Day ({day, unit}) {
  console.log(day)
  return (
    <li>
      <p>Date: {day.date}</p>

      {(unit === "f")
        ? foo(day.day.mintemp_f, day.day.maxtemp_f, unit)
        : foo(day.day.mintemp_c, day.day.maxtemp_c, unit)
      }
    </li>
  )
}

Day.propTypes = {
  day: PropTypes.object.isRequired
}

function Forecast ({forecast, error, isFetching, unit}) {
  return (
    <div className="forecast">
      <h1>Forecast</h1>
      { isFetching && <p>Loading</p> }
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
  unit: PropTypes.string.isRequired
}

export default Forecast;
