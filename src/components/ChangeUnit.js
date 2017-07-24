import React from 'react';
import PropTypes from 'prop-types';

function ChangeUnit ({unit, changeUnit}) {
  return (
    <button onClick={changeUnit} className="changeUnitButton">
      &deg;{unit === 'F'
            ? 'C'
            : 'F'
          }
    </button>
  )
}

ChangeUnit.propTypes = {
  unit: PropTypes.string.isRequired,
  changeUnit: PropTypes.func.isRequired
}

export default ChangeUnit;
