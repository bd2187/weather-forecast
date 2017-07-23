import {
  CHANGE_LOCATION, FETCHING_WEATHER,
  FETCHING_WEATHER_SUCCESS, FETCHING_WEATHER_FAILURE } from './actionTypes';
import axios from 'axios';
import api, { apiLonLat } from '../config/api';

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

function updateCurrentWeather (currentTemp) {
  return {
    type: 'UPDATE_CURRENT_WEATHER',
    currentTemp
  }
}

export function searchLocation (location) {
  return function (dispatch) {
    dispatch( fetchingWeather() )
    axios.get(api(location))
      .then((data) => {
        dispatch(fetchingWeatherSuccess(data.data));
        dispatch(changeLocation(data.data.location.name));
        dispatch(updateCurrentWeather(data.data.current))
      })
      .catch(() => dispatch(fetchingWeatherFailure()))
  }
}

export function currentLocationCurrentWeather (lon, lat) {
  return function (dispatch) {
    dispatch( fetchingWeather() )
    axios.get(apiLonLat(lon, lat))
      .then((data) => {
        dispatch(fetchingWeatherSuccess(data.data));
        dispatch(changeLocation(data.data.location.name));
        dispatch(updateCurrentWeather(data.data.current))
      })
      .catch(() => dispatch(fetchingWeatherFailure()))
  }
}
