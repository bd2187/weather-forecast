import React from 'react';
import PropTypes from 'prop-types';
import Forecast from '../components/Forecast';
import { connect } from 'react-redux';

function ForecastContainer (props) {
  return <Forecast {...props}/>
}

ForecastContainer.propTypes = {
  forecast: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  unit: PropTypes.string.isRequired
}

function mapStateToProps (state) {
  return {
    forecast: state.forecast.forecastArr,
    error: state.forecast.error,
    isFetching: state.forecast.isFetching,
    unit: state.unit
  }
}

export default connect(mapStateToProps)(ForecastContainer);
