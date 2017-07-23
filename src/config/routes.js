import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavContainer from '../containers/NavContainer';

// import containers/components here

function Form () {
  return <h1>Form</h1>
}

const routes = (
  <BrowserRouter>
    <div>
      <NavContainer />
      <Switch>
        <Route path="/" component={Form}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default routes;
