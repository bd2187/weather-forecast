import {
  FETCHING_WEATHER, FETCHING_WEATHER_SUCCESS, FETCHING_WEATHER_FAILURE
} from '../actions/actionTypes';

const initialState = {
  forecastArr: [],
  isFetching: false,
  error: ''
}

export default function forecastReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_WEATHER:
      return {...state, isFetching: true};
    case FETCHING_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        forecastArr: action.forecast.forecast.forecastday
      };
    case FETCHING_WEATHER_FAILURE:
      return {...state, isFetching: false, error: action.error};
    default:
      return state;
  }
}
