import {
  CHANGE_LOCATION, FETCHING_WEATHER,
  FETCHING_WEATHER_SUCCESS, FETCHING_WEATHER_FAILURE } from './actionTypes';
import axios from 'axios';
import api from '../config/api';

export function changeLocation (location) {
  return {
    type: CHANGE_LOCATION,
    location
  }
}

function fetchingWeather () {
  return {
    type: FETCHING_WEATHER
  }
}

function fetchingWeatherSuccess (forecast) {
  return {
    type: FETCHING_WEATHER_SUCCESS,
    forecast
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
      .then( (data) => dispatch(fetchingWeatherSuccess(data.data)) )
      .catch( () => dispatch(fetchingWeatherFailure()) )
  }
}
