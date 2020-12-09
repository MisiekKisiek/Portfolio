import React, { Component } from 'react';

//Context 
import AppContext, { defaultValue } from './App.context';


class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = defaultValue
  }

  handleMenu = (e) => {
    if (e.node) {
      this.setState({
        menu: false
      })
    } else if (e.target) {
      this.setState(prevState => ({
        menu: !prevState.menu
      }))
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
