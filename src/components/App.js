import React from 'react';

import ForecastContainer from '../containers/ForecastContainer';
import CurrentTempContainer from '../containers/CurrentTempContainer';
import ChangeUnitContainer from '../containers/ChangeUnitContainer'

 export default function App () {
  return (
    <div>
      <CurrentTempContainer />
      <ChangeUnitContainer />
      <ForecastContainer />
    </div>
  )
}
