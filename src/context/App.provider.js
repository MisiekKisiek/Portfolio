import React, { Component } from 'react';

//Context 
import AppContext, { defaultValue } from './App.context';


class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = defaultValue
  }

  handleMenu = () => {
    if (this.state.menu) {
      this.setState({
        menu: false
      })
    } else {
      this.setState({
        menu: true
      })
    }
  }

  handleMenuSticky = () => {
    const changeState = () => {
      if (window.pageYOffset > 100) {
        this.setState({
          menuSticky: true,
        })
      } else {
        this.setState({
          menuSticky: false,
        })
      }
    }
    window.addEventListener('scroll', changeState)
  }

  render() {
    return (
      <AppContext.Provider value={{
        menu: this.state.menu,
        handleMenu: this.handleMenu,
        menuSticky: this.state.menuSticky,
        handleMenuSticky: this.handleMenuSticky,
      }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
