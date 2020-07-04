import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    activeTab: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    className: PropTypes.string
  }

  static defaultProps = {
    activeTab: 0
  }

  state = {
    tab: 0
  }

  setActiveTab = (tab, fn) => {
    this.setState(
      { tab },
      () => typeof fn === 'function'
        ? fn()
        : null
    );
  }

  componentDidMount() {
    const { children: child, activeTab } = this.props
    const children = React.Children.toArray(child)

    const tab = typeof activeTab === 'number' ? children[activeTab].props.label : activeTab

    this.setState({ tab })
  }

  render() {
    const { tab } = this.state
    const { children } = this.props
    const childrens = React.Children.map(children, child =>
      React.cloneElement(child, {
        setActiveTab: this.setActiveTab,
        activeTab: tab
      })
    );

    return (
      <div className={`tabs-wrapper ${this.props.type} ${this.props.className}`}>
        <ol className={`tabs tabs--${this.props.type} u-bg-white`}>
          {childrens}
        </ol>
        <div className="tabs__content">
          {childrens.map((child) => {
            return (child.props.label === tab)
              ? child.props.children
              : null
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;