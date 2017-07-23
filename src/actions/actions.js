import {
  CHANGE_LOCATION,
  FETCHING_WEATHER,
  FETCHING_WEATHER_SUCCESS,
  FETCHING_WEATHER_FAILURE,
  TRACKING_LOCATION,
  TRACKING_LOCATION_SUCCESSFUL,
  TRACKING_LOCATION_FAILURE,
  CHANGE_UNIT
} from './actionTypes';
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
        console.log(data)
        dispatch(fetchingWeatherSuccess(data.data));
        dispatch(changeLocation(
          `${data.data.location.name}, ${data.data.location.region}`
        ));
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
        console.log(data)
        dispatch(fetchingWeatherSuccess(data.data));
        dispatch(changeLocation(
          `${data.data.location.name}, ${data.data.location.region}`
        ));
        dispatch(updateCurrentWeather(data.data.current))
      })
      .then(dispatch(trackingLocationSuccessful()))
      .catch(() => dispatch(fetchingWeatherFailure()))
  }
}

export function trackingLocation () {
  return {
    type: TRACKING_LOCATION
  }
}

function trackingLocationSuccessful () {
  return {
    type: TRACKING_LOCATION_SUCCESSFUL
  }
}

export function trackingLocationFailure () {
  return {
    type: TRACKING_LOCATION_FAILURE
  }
}



export function changeUnit () {
  return {
    type: CHANGE_UNIT
  }
}
