import {
  CHANGE_LOCATION, FETCHING_WEATHER,
  LOAD_FORECAST, FETCHING_WEATHER_SUCCESS,
  FETCHING_WEATHER_FAILURE} from '../actions/actionTypes';
import { combineReducers } from 'redux';

/*
state = {
  city: '',
  forecast: {
    forecastArr: [],
    isFetching: false,
    error: ''
  },
  unit: f
}
*/


function locationReducer (state = null, action) {
  switch (action.type) {
    case CHANGE_LOCATION:
      return action.location
    default:
      return state;
  }
}

const initialState = {
  forecastArr: [],
  isFetching: false,
  error: ''
}

function forecastReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_FORECAST:
      return {...state, forecastArr: action.forecast.forecast.forecastday};
    case FETCHING_WEATHER:
      return {...state, isFetching: true};
    case FETCHING_WEATHER_SUCCESS:
      return {...state, isFetching: false, error: ''};
    case FETCHING_WEATHER_FAILURE:
      return {...state, isFetching: false, error: action.error};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  location: locationReducer,
  forecast: forecastReducer
});

export default rootReducer;
