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
  render() {
    return (
      <AppContext.Provider value={{
        menu: this.state.menu,
        handleMenu: this.handleMenu,
      }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
