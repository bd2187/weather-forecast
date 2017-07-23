import forecastReducer from './forecastReducer';
import { locationReducer, trackingLocationReducer } from './locationReducers';
import { unitReducer } from './unitReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  location: locationReducer,
  forecast: forecastReducer,
  unit: unitReducer,
  trackingLocation: trackingLocationReducer
});

export default rootReducer;

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
