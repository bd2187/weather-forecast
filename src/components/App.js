import React from 'react';

import ForecastContainer from '../containers/ForecastContainer';
import CurrentTempContainer from '../containers/CurrentTempContainer';
import ChangeUnitContainer from '../containers/ChangeUnitContainer'

 export default function App () {
  return (
    <div className="container" id="main">
      <CurrentTempContainer />
      <ForecastContainer />
    </div>
  )
}
