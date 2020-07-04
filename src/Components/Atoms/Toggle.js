import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Toggle = props => {
  const [checked, setChecked] = useState(props.checked)

  const labelPosition = props.labelPosition === 'right'
    ? 'u-fx-row-reverse'
    : 'u-fx-row'
  const labelInsidePosition = checked
    ? 'u-js-start'
    : 'u-js-end'
  const labelInsideText = checked
    ? 'On'
    : 'Off'
  const labelText = props.labelText !== null
    ? <span className="toggle__text u-mx-4">{props.labelText}</span>
    : null

  return (
    <label className={`toggle u-ds-inline-flex u-al-items-center ${labelPosition} ${props.styles}`}>
      {labelText}
      <input
        className="toggle__input"
        type="checkbox"
        name={props.name}
        onChange={() => setChecked(!checked)}
        disabled={props.disabled}
        checked={checked}
      />
      <span
        className={classNames(
          'toggle__slider u-tx-white u-px-8',
          props.labelInside ? 'toggle__slider--label-inside' : null,
          props.toggleStyles,
          labelInsidePosition
        )}
      >
        {props.labelInside ? labelInsideText : null}
      </span>
    </label>
  )
};

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  name: null,
  styles: '',
  toggleStyles: '',
  labelText: null,
  labelPosition: 'right',
  labelInside: false,
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  styles: PropTypes.string,
  toggleStyles: PropTypes.string,
  labelText: PropTypes.string,
  labelPosition: PropTypes.oneOf([
    'left',
    'right',
  ]),
  labelInside: PropTypes.bool
}

export default Toggle;