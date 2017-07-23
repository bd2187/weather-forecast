import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavContainer from '../containers/NavContainer';
import App from '../components/App';

const routes = (
  <BrowserRouter>
    <div>
      <NavContainer />
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default routes;
