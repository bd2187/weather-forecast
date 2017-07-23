import React from 'react';

import ForecastContainer from '../containers/ForecastContainer';
import CurrentTempContainer from '../containers/CurrentTempContainer';

 export default function App () {
  return (
    <div>
      <CurrentTempContainer />
      <ForecastContainer />
    </div>
  )
}
