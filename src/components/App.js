import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import WeatherList from '../containers/WeatherListContainer';

function App () {
  return (
    <div className="container">
      <SearchBarContainer />
      <WeatherList />
    </div>
  )
}

export default App;
