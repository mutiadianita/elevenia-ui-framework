import React from 'react'
import { Button, Icon } from './';
import PropTypes from 'prop-types';

const NextNavButton = (props) => {
  const { styles, disabled, click, direction, children } = props;

  const directionIcon = (icon) => {
    switch (icon) {
      case "left" : return <Icon iwidth="i" name="chevron-left" width="16" height="16" fill="#70727D" class="chevron-left" />
      case "right" : return <Icon iwidth="i" name="chevron-right" width="16" height="16" fill="#70727D" class="chevron-right" />
      default: return 
    }
  }

  return (
    <div
      className={ `navbutton-container ${direction ? `navbutton--${direction}`:''} ${styles} ${disabled ? "navbutton--disabled" : ''} `}
      >
      <Button styles={`btn navbutton__button u-p-0`} click={click}>
        {directionIcon(direction)}
      </Button>
    </div>
  )
}
NextNavButton.propTypes = {
  direction: PropTypes.oneOf([
    'left',
    'right',
  ]),
};


export default NextNavButton;
