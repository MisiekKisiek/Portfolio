import React, { Component } from 'react';

//Context 
import AppContext, { defaultValue } from './App.context';


class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue
    }
  }

  handleMenuVisibility = () => {
    console.log('aaaaaasdadasfasfzxv')
    if (this.state.menuVisibility) {
      this.setState({
        menuVisibility: false
      })
    } else {
      this.setState({
        menuVisibility: true
      })
    }

  }
  render() {
    return (
      <AppContext.Provider value={{
        menuVisibility: this.state.menuVisibility,
        handleMenuVisibility: this.handleMenuVisibility,
      }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
