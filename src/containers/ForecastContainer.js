import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Forecast from '../components/Forecast';
import {
  currentLocationCurrentWeather,
  trackingLocation,
  trackingLocationFailure
} from '../actions/actions';

class ForecastContainer extends Component {
  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
    this.fail = this.fail.bind(this);
  }
  success(position) {
    console.log(position.coords.latitude, position.coords.longitude)
    this.props.currentLocationCurrentWeather(
      position.coords.latitude,
      position.coords.longitude
    )
  }
  fail() {
    alert("Looks like we can't track your location. In the meantime, search a location to see their forecast");
    this.props.trackingLocationFailure();
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success, this.fail);
      this.props.trackingLocation()
    }
    else {
      alert("Looks like we can't track your location. In the meantime, search a location to see their forecast");
      this.props.trackingLocationFailure();
    }
  }
  render() {
    console.log(this.props)
    return <Forecast {...this.props} />
  }
}

ForecastContainer.propTypes = {
  forecast: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  unit: PropTypes.string.isRequired,
  currentLocationCurrentWeather: PropTypes.func.isRequired,
  trackingLocation: PropTypes.func.isRequired,
  trackingLocationFailure: PropTypes.func.isRequired,
  tracking: PropTypes.bool.isRequired

}

function mapStateToProps (state) {
  return {
    forecast: state.forecast.forecastArr,
    error: state.forecast.error,
    isFetching: state.forecast.isFetching,
    unit: state.unit,
    tracking: state.trackingLocation
  }
}

function mapDispatchToProps (dispatch) {
  return {
    currentLocationCurrentWeather: (lon, lat) => {
      dispatch(currentLocationCurrentWeather(lon, lat))
    },
    trackingLocation: () => dispatch(trackingLocation()),
    trackingLocationFailure: () => dispatch(trackingLocationFailure())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastContainer);
