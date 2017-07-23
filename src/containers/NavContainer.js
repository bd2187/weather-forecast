import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Nav from '../components/Nav';
import { searchLocation } from '../actions/actions';

function NavContainer (props) {
  return (
    <Nav searchLocation={props.searchLocation} />
  )
}

NavContainer.propTypes = {
  searchLocation: PropTypes.func.isRequired,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    searchLocation: searchLocation
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(NavContainer);
