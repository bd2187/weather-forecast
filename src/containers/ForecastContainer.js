import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Forecast from '../components/Forecast';
import { currentLocationCurrentWeather } from '../actions/actions';

class ForecastContainer extends Component {
  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
  }
  success(position) {
    console.log(position.coords.latitude, position.coords.longitude)
    this.props.currentLocationCurrentWeather(
      position.coords.latitude,
      position.coords.longitude
    )
    // this.props.searchLocation('los angeles')
  }
  fail() {
    console.log('fail')
  }
  componentDidMount() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(this.success, this.fail)
    }
    else {
      console.log("Can't identify your location")
    }

    // return navigator.geolocation
    //   ? navigator.geolocation.getCurrentPosition(success, fail)
    //   : console.log('nope')
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
  currentLocationCurrentWeather: PropTypes.func.isRequired

}

function mapStateToProps (state) {
  return {
    forecast: state.forecast.forecastArr,
    error: state.forecast.error,
    isFetching: state.forecast.isFetching,
    unit: state.unit
  }
}

function mapDispatchToProps (dispatch) {
  return {
    currentLocationCurrentWeather: (lon, lat) => {
      dispatch(currentLocationCurrentWeather(lon, lat))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastContainer);
