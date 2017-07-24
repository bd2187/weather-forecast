import { CHANGE_UNIT } from '../actions/actionTypes'

export function unitReducer (state = 'F', action) {
  switch (action.type) {
    case CHANGE_UNIT:
      if (state === 'F') {
        return 'C';
      }
      else {
        return 'F';
      }
    default:
      return state;
  }
}
