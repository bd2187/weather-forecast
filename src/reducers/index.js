import { CHANGE_LOCATION } from '../actions/actionTypes';
import { combineReducers } from 'redux';

/*
state = {
  city: '',
  forecast: [],
  unit: f,
  isFetching: false,
  error: ''
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

const rootReducer = combineReducers({
  location: locationReducer
});

export default rootReducer;
