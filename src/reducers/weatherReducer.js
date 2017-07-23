import { REQUEST_WEATHER } from '../actions/actionTypes';

function weatherReducer(state = null, action) {
  switch (action.type) {
    case 'REQUEST_WEATHER':
      return action.city
  }
  return state;
}

export default weatherReducer;
