import React from 'react';
import PropTypes from 'prop-types';
import CurrentTemp from '../components/CurrentTemp';
import { connect } from 'react-redux';

function CurrentTempContainer ({currentTemp, unit, location}) {
  return (
    <CurrentTemp
      currentTemp={currentTemp}
      unit={unit}
      location={location}/>
  );
}

function mapStateToProps (state) {
  return {
    currentTemp: state.forecast.currentTemp,
    unit: state.unit,
    location: state.location,
  }
}

CurrentTempContainer.propTypes = {
  currentTemp: PropTypes.object.isRequired,
  unit: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(CurrentTempContainer);
