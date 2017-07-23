import React, { Component } from 'react';
import { connect } from 'react-redux';

function SevenDayForeCast ({day}) {
  return (
    <li>
      <p>{day.date}</p>
      <p>Min: {day.day.mintemp_f}</p>
      <p>Max: {day.day.maxtemp_f}</p>
    </li>
  )
}

function DisplayCityWeather ({city}) {
  return (
    <li>
      <h3>{city.location.name}</h3>
      <ul>
        {city.forecast.forecastday.map(function(day, index){
          return (
            <SevenDayForeCast
              key={index + '_forecast'}
              day={day}/>
          )
        })}
      </ul>
      <p>Current Temp: {city.forecast.forecastday[0].day.avgtemp_f}</p>
    </li>
  )
}

class WeatherList extends Component {
  render() {
    console.log(this.props)
    if (this.props.weather.forecast.length > 0) {
      return (
        <ul>
          {this.props.weather.forecast.map(function(city, index){
            return (
              <DisplayCityWeather
                key={index + '_data'}
                city={city}/>
            )
            // return <li key={index}>{city.location.name}</li>
          })}
        </ul>
      )
    }
    else {
      return null
    }
  }
}

function mapStateToProps (state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);
