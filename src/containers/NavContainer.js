import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Nav from '../components/Nav';
import { changeLocation } from '../actions/actions';

class NavContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <Nav changeLocation={this.props.changeLocation}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    location: state.location
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ changeLocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
