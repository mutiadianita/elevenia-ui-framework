import React from 'react'
import PropTypes from 'prop-types'

class Tray extends React.Component {
  state = {
    show: false
  }

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  render() {
    const show = this.props.hasOwnProperty('show') ? this.props.show : this.state.show
    const toggleShow = this.props.hasOwnProperty('toggleShow') ? this.props.toggleShow : this.toggleShow
    const { children, className, slideDown } = this.props

    const childrens = React.Children.map(children, child =>
      React.cloneElement(child, { toggleShow })
    );

    return (
      <>
        <div onClick={() => show && toggleShow()} className={`tray-background ${show ? 'tray-background--show' : ''}`} />
        <div style={{ transform: `translateY(${show ? '0px' : `${slideDown}px`})` }} className={`tray ${show ? 'tray--show' : ''} ${className}`}>
          {childrens}
        </div>
      </>
    )
  }
}

Tray.defaultProps = {
  className: '',
  slideDown: 250
}

const Header = ({children, swipeable, hideOnClick, className, toggleShow, ...props}) => {
  return (
    <div
      {...props}
      onClick={() => hideOnClick && toggleShow()}
      className={`tray__header ${swipeable && 'tray__header--swipeable'} ${className}`}
    >
      {children}
    </div>
  )
}

Header.defaultProps = {
  swipeable: true,
  hideOnClick: true,
}

Header.propTypes = {
  swipeable: PropTypes.bool,
  hideOnClick: PropTypes.bool,
}

const Content = ({children, hideOnClick, toggleShow, maxHeight = 350, ...props}) => {
  return (
    <div {...props} style={{ maxHeight }} className="tray__content" onClick={() => hideOnClick && toggleShow()}>
      {children}
    </div>
  )
}

const Action = ({children, hideOnClick, toggleShow}) => {
  return (
    <div className="tray__action u-bd-top u-bd-light u-p-16" onClick={() => hideOnClick && toggleShow()}>
      {children}
    </div>
  )
}

Tray.Header = Header
Tray.Content = Content
Tray.Action = Action

export default Tray;