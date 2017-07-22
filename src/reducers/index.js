import { combineReducers } from 'redux';

function sampleReducer (state = {}, action) {
  return state;
}

const rootReducer = combineReducers({
  sample: sampleReducer
})

export default rootReducer;
