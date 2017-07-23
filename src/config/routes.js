import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavContainer from '../containers/NavContainer';
import ForecastContainer from '../containers/ForecastContainer';

function Form () {
  return <h1>Form</h1>
}

const routes = (
  <BrowserRouter>
    <div>
      <NavContainer />
      <Switch>
        <Route path="/" component={ForecastContainer}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default routes;
