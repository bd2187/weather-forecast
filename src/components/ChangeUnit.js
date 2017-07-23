import React from 'react';
import PropTypes from 'prop-types';

function ChangeUnit ({unit, changeUnit}) {
  console.log(unit, changeUnit)
  return (
    <button onClick={changeUnit}>
      {unit === 'f'
        ? 'c'
        : 'f'
      }
    </button>
  )
}

ChangeUnit.propTypes = {
  unit: PropTypes.string.isRequired,
  changeUnit: PropTypes.func.isRequired
}

export default ChangeUnit;
