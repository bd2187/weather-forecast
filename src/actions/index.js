import api from '../config/api';
import axios from 'axios';
import { REQUEST_WEATHER, FETCHING_WEATHER, FETCHING_WEATHER_SUCCESS, FETCHING_WEATHER_FAILURE } from './actionTypes';


function fetchingWeather() {
  return {
    type: FETCHING_WEATHER
  }
}

function fetchingWeatherSuccess() {
  return {
    type: FETCHING_WEATHER_SUCCESS
  }
}

function fetchingWeatherFailure() {
  return {
    type: FETCHING_WEATHER_FAILURE
  }
}

function requestWeather (weather) {
  return {
    type: REQUEST_WEATHER,
    weather
  }
}

export function fetchAPI (city) {
  return function (dispatch) {
    dispatch(fetchingWeather());
    return axios(api(city))
      .then( (data) => dispatch(requestWeather(data.data)) )
      .then( () => dispatch(fetchingWeatherSuccess()) )
      .catch( () => dispatch(fetchingWeatherFailure()) )
  }
}
