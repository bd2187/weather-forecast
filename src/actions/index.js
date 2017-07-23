import api from '../config/api';
import axios from 'axios';

const REQUEST_WEATHER = 'REQUEST_WEATHER';

export function requestWeather (city) {
  // dispatch()
  axios(api(city))
  return {
    type: REQUEST_WEATHER,
    city
  }
}
