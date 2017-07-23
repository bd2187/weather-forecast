import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import routes from './config/routes';

// const store = createStore(rootReducer, applyMiddleware(thunk))

render (
  routes,
  document.getElementById('app')
);

/*
state = {
  city: '',
  forecast: [],
  unit
}
*/
