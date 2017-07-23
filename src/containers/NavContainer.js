import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Nav from '../components/Nav';
import { changeLocation, searchLocation } from '../actions/actions';

function NavContainer (props) {
  console.log(props);
  return (
    <Nav changeLocation={props.changeLocation} searchLocation={props.searchLocation} />
  )
}

NavContainer.propTypes = {
  changeLocation: PropTypes.func.isRequired,
  searchLocation: PropTypes.func.isRequired
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    changeLocation: changeLocation,
    searchLocation: searchLocation
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(NavContainer);
