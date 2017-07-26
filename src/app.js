import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import '../public/style/main.scss';

import routes from './config/routes';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk))

render (
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
