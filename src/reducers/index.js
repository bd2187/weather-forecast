import {
  CHANGE_LOCATION,
  TRACKING_LOCATION,
  TRACKING_LOCATION_SUCCESSFUL,
  TRACKING_LOCATION_FAILURE
} from '../actions/actionTypes';
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
  unit: f,
  trackingLocation: false
}
*/

function locationReducer (state = '', action) {
  switch (action.type) {
    case CHANGE_LOCATION:
      return action.location
    default:
      return state;
  }
}

function trackingLocationReducer (state = false, action) {
  switch (action.type) {
    case TRACKING_LOCATION:
      return true
    case TRACKING_LOCATION_SUCCESSFUL:
    case TRACKING_LOCATION_FAILURE:
      return false;
    default:
      return state;
  }
}



function unitReducer (state = 'f', action) {
  switch (action.type) {
    case 'CHANGE_UNIT':
      if (state === 'f') {
        return 'c';
      }
      else {
        return 'f';
      }
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  location: locationReducer,
  forecast: forecastReducer,
  unit: unitReducer,
  trackingLocation: trackingLocationReducer
});

export default rootReducer;
