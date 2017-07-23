import { CHANGE_LOCATION } from '../actions/actionTypes';
import forecastReducer from './forecastReducer';
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

function unitReducer (state = 'f', action) {
  switch (action.type) {
    case 'CHANGE_UNIT':
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  location: locationReducer,
  forecast: forecastReducer,
  unit: unitReducer
});

export default rootReducer;
