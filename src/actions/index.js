import api from '../config/api';
import axios from 'axios';
import { REQUEST_WEATHER } from './actionTypes';


function requestWeather (city) {
  return {
    type: REQUEST_WEATHER,
    city
  }
}

export function fetchAPI (city) {
  return function (dispatch) {
    // dispatch(fetchingData)
    return axios(api(city))
      .then( (data) => dispatch(requestWeather(data.data)) )
      // .catch( () => dispatch(err) )
  }
}
