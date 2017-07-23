import {
  CHANGE_LOCATION,
  TRACKING_LOCATION,
  TRACKING_LOCATION_SUCCESSFUL,
  TRACKING_LOCATION_FAILURE
} from '../actions/actionTypes';

export function locationReducer (state = '', action) {
  switch (action.type) {
    case CHANGE_LOCATION:
      return action.location
    default:
      return state;
  }
}

export function trackingLocationReducer (state = false, action) {
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
