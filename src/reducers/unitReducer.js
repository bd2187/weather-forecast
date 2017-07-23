import { CHANGE_UNIT } from '../actions/actionTypes'

export function unitReducer (state = 'f', action) {
  switch (action.type) {
    case CHANGE_UNIT:
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
