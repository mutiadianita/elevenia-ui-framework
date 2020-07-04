import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabsItem extends Component {
  static propTypes = {
    activeTab: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    className: ''
  }

  onClick = () => {
    const { label, setActiveTab, onClick } = this.props;
    setActiveTab(label, onClick);
  }

  render() {
    const { activeTab, label, className, setActiveTab, ...props } = this.props;

    return (
      <li
        {...props}
        className={`tabs__item ${className} ${activeTab === label ? 'active' : ''}`}
        onClick={this.onClick}
      >
        <span href={this.props.link} className="tabs__text">
          {label}
        </span>
        <div className="tabs__decoration"></div>
      </li>
    );
  }
}

export default TabsItem;