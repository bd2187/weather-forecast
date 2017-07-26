import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

function dayOfWeek (date) {
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var d = new Date(date)
  // console.log(d)
  return days[d.getDay()];
}

function temp (minTemp, maxTemp, unit) {
  return <p className="tempText">{minTemp} &deg;{unit} / {maxTemp} &deg;{unit}</p>
}

function Day ({day, unit}) {
  return (
    <li className="clearfix">
      <img src={day.day.condition.icon}/>
      <div className="weatherInfo">
        <p className="dayText">{dayOfWeek(day.date)}</p>
        {(unit === "F")
          ? temp(day.day.mintemp_f, day.day.maxtemp_f, unit)
          : temp(day.day.mintemp_c, day.day.maxtemp_c, unit)
        }
        <p>{day.day.condition.text}</p>
      </div>
    </li>
  )
}

Day.propTypes = {
  day: PropTypes.object.isRequired
}

function Forecast ({forecast, error, isFetching, unit, tracking}) {
  return (
    <div className="forecast">
      { tracking && <Loading text="Tracking Location"/> }
      { isFetching && <Loading text="Loading Weather"/> }
      { error
        ? <p className="errorText">{error}. Try another location.</p>
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
