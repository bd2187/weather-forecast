import { REQUEST_WEATHER, FETCHING_WEATHER, FETCHING_WEATHER_SUCCESS, FETCHING_WEATHER_FAILURE } from '../actions/actionTypes';

const initialState = {
  forecast: [],
  isFetching: false,
  error: ''
}

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    // case REQUEST_WEATHER:
    //   return [action.weather, ...state]

    case REQUEST_WEATHER:
      return { ...state, forecast: [action.weather, ...state.forecast]};
    case FETCHING_WEATHER:
      return { ...state, isFetching: true};
    case FETCHING_WEATHER_SUCCESS:
      return { ...state, isFetching: false, error: ''};
    case FETCHING_WEATHER_FAILURE:
      return { ...state, isFetching: false, error: 'error'};
    default:
      return state;

  }
}

export default weatherReducer;
