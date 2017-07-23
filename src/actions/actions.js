import {
  CHANGE_LOCATION, FETCHING_WEATHER,
  LOAD_FORECAST, FETCHING_WEATHER_SUCCESS,
  FETCHING_WEATHER_FAILURE } from './actionTypes';
import axios from 'axios';
import api from '../config/api';

export function changeLocation (location) {
  return {
    type: CHANGE_LOCATION,
    location
  }
}

function loadForecast (forecast) {
  return {
    type: LOAD_FORECAST,
    forecast
  }
}

function fetchingWeather () {
  return {
    type: FETCHING_WEATHER
  }
}

function fetchingWeatherSuccess () {
  return {
    type: FETCHING_WEATHER_SUCCESS
  }
}

function fetchingWeatherFailure () {
  return {
    type: FETCHING_WEATHER_FAILURE,
    error: 'ERROR'
  }
}

export function searchLocation (location) {
  return function (dispatch) {
    dispatch( fetchingWeather() )
    axios.get(api(location))
      .then( (data) => dispatch(loadForecast(data.data)) )
      .then( () => dispatch(fetchingWeatherSuccess()) )
      .catch( () => dispatch(fetchingWeatherFailure()) )
  }
}
