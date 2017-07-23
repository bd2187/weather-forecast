import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { changeUnit } from '../actions/actions';
import ChangeUnit from '../components/ChangeUnit'

function ChangeUnitContainer (props) {
  return <ChangeUnit {...props}/>
}

ChangeUnitContainer.propTypes = {
  unit: PropTypes.string.isRequired,
  changeUnit: PropTypes.func.isRequired
}

export default connect(
  (state) => ({unit: state.unit}),
  (dispatch) => ({changeUnit: () => dispatch(changeUnit())})
)(ChangeUnitContainer)
