import React from 'react';
import PropTypes from 'prop-types';
import CurrentTemp from '../components/CurrentTemp';
import { connect } from 'react-redux';

function CurrentTempContainer ({currentTemp, unit}) {
  console.log(currentTemp, unit)
  return (
    <CurrentTemp
      currentTemp={currentTemp}
      unit={unit}/>

  )
}

function mapStateToProps (state) {
  return {
    currentTemp: state.forecast.currentTemp,
    unit: state.unit
  }
}

CurrentTempContainer.propTypes = {
  currentTemp: PropTypes.object.isRequired,
  unit: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(CurrentTempContainer);
